import os, sys, glob
from pypdf import PdfReader

root = r"C:\Users\Alan Gornall\Desktop\MAT1203-completo"
out = r"C:\Users\Alan Gornall\Desktop\MAT1203-completo\plataforma\_build\texto"
os.makedirs(out, exist_ok=True)

folders = {
    "clases": os.path.join(root, "Clases", "Clases"),
    "apuntes": os.path.join(root, "Apuntes", "Apuntes"),
    "libro_sol": os.path.join(root, "Libros", "Solucion Libro"),
    "guias": os.path.join(root, "Guías"),
}

for key, folder in folders.items():
    if not os.path.isdir(folder):
        print("MISSING", folder); continue
    for pdf in sorted(glob.glob(os.path.join(folder, "*.pdf"))):
        name = os.path.splitext(os.path.basename(pdf))[0]
        safe = "".join(c if c.isalnum() or c in " -_" else "_" for c in name)
        dst = os.path.join(out, f"{key}__{safe}.txt")
        if os.path.exists(dst):
            continue
        try:
            r = PdfReader(pdf)
            parts = []
            for i, p in enumerate(r.pages):
                try:
                    parts.append(f"\n----- pagina {i+1} -----\n" + (p.extract_text() or ""))
                except Exception as e:
                    parts.append(f"\n----- pagina {i+1} ERROR {e} -----")
            text = "".join(parts)
            with open(dst, "w", encoding="utf-8") as f:
                f.write(text)
            print(f"OK {key} :: {name} :: {len(r.pages)} pags :: {len(text)} chars")
        except Exception as e:
            print(f"FAIL {key} :: {name} :: {e}")

print("DONE")
