import os, re, glob, unicodedata

ROOT = r"C:\Users\Alan Gornall\Desktop\MAT1203-completo"
PLAT = os.path.join(ROOT, "plataforma")

def norm(s):
    s = s.replace("\\u00b0", "")  # literal secuencia JS del grado
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", s.lower())

def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode()
    s = re.sub(r"[^A-Za-z0-9]+", "-", s).strip("-").lower()
    return s

def hardlink(src, dst):
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    if not os.path.exists(dst):
        try:
            os.link(src, dst)
        except OSError:
            import shutil; shutil.copy2(src, dst)

# ---- mapas ----
clases_map = {}   # norm(nombre) -> rel
clases_num = {}   # numero -> rel
d = os.path.join(ROOT, "Clases", "Clases")
os.makedirs(os.path.join(PLAT, "recursos", "clases"), exist_ok=True)
for f in os.listdir(d):
    if not f.lower().endswith(".pdf"):
        continue
    m = re.search(r"Clase\s+(\d+)", f)
    num = int(m.group(1)) if m else None
    base = "clase-%02d.pdf" % num if num else slug(f) + ".pdf"
    rel = "../recursos/clases/" + base
    hardlink(os.path.join(d, f), os.path.join(PLAT, "recursos", "clases", base))
    clases_map[norm(os.path.splitext(f)[0])] = rel
    if num is not None:
        clases_num[num] = rel

apuntes_map = {}
apuntes_num = {}
d = os.path.join(ROOT, "Apuntes", "Apuntes")
os.makedirs(os.path.join(PLAT, "recursos", "apuntes"), exist_ok=True)
for f in os.listdir(d):
    if not f.lower().endswith(".pdf"):
        continue
    m = re.search(r"Clase-?\s*(\d+)", f)
    num = int(m.group(1)) if m else None
    base = "apunte-clase-%02d.pdf" % num if num else slug(f) + ".pdf"
    rel = "../recursos/apuntes/" + base
    hardlink(os.path.join(d, f), os.path.join(PLAT, "recursos", "apuntes", base))
    apuntes_map[norm(os.path.splitext(f)[0])] = rel
    if num is not None:
        apuntes_num[num] = rel

pruebas_map = {}
d = os.path.join(ROOT, "Pruebas", "Evaluaciones")
for cat in os.listdir(d):
    cd = os.path.join(d, cat)
    if not os.path.isdir(cd):
        continue
    os.makedirs(os.path.join(PLAT, "recursos", "pruebas", cat), exist_ok=True)
    for f in os.listdir(cd):
        if not f.lower().endswith(".pdf"):
            continue
        base = slug(os.path.splitext(f)[0]) + ".pdf"
        rel = "../recursos/pruebas/%s/%s" % (cat, base)
        hardlink(os.path.join(cd, f), os.path.join(PLAT, "recursos", "pruebas", cat, base))
        pruebas_map[norm(os.path.splitext(f)[0])] = rel

print("pruebas keys:", len(pruebas_map), "| i120241?", "i120241" in pruebas_map, "| i120231?", "i120231" in pruebas_map)

# ---- reescribir referencias en content ----
pat = re.compile(r'(\.\./(?:Clases/Clases|Apuntes/Apuntes|Pruebas/Evaluaciones)/[^"]+?\.pdf)')
stats = {"clases": 0, "apuntes": 0, "pruebas": 0, "nofound": 0}
nofound = []
for jf in glob.glob(os.path.join(PLAT, "content", "**", "*.js"), recursive=True):
    txt = open(jf, encoding="utf-8").read()
    def repl(m):
        p = m.group(1)
        nombre = os.path.splitext(p.rsplit("/", 1)[-1])[0]
        key = norm(nombre)
        if "/Clases/Clases/" in p:
            mm = re.search(r"Clase\s*(\d+)", nombre)
            if mm and int(mm.group(1)) in clases_num:
                stats["clases"] += 1; return clases_num[int(mm.group(1))]
            if key in clases_map:
                stats["clases"] += 1; return clases_map[key]
        elif "/Apuntes/Apuntes/" in p:
            mm = re.search(r"Clase-?\s*(\d+)", nombre)
            if mm and int(mm.group(1)) in apuntes_num:
                stats["apuntes"] += 1; return apuntes_num[int(mm.group(1))]
            if key in apuntes_map:
                stats["apuntes"] += 1; return apuntes_map[key]
        elif "/Pruebas/Evaluaciones/" in p:
            if key in pruebas_map:
                stats["pruebas"] += 1; return pruebas_map[key]
            stats["nofound"] += 1; nofound.append(p + "  [key=" + key + "]"); return p
        stats["nofound"] += 1; nofound.append(p); return p
    txt2 = pat.sub(repl, txt)
    if txt2 != txt:
        open(jf, "w", encoding="utf-8").write(txt2)

print("clases", stats["clases"], "apuntes", stats["apuntes"], "pruebas", stats["pruebas"], "nofound", stats["nofound"])
for p in sorted(set(nofound)):
    print("  SIN MAPEAR:", p)
