import os, re, glob, urllib.parse
base = r"C:\Users\Alan Gornall\Desktop\MAT1203-completo\plataforma"
pat = re.compile(r'(?:ruta:\s*"|\shref=")(recursos/[^"]+)"')
seen = {}
for f in glob.glob(os.path.join(base, "content", "**", "*.js"), recursive=True):
    t = open(f, encoding="utf-8").read()
    for m in pat.findall(t):
        seen[m] = seen.get(m, 0) + 1
miss = 0
for p in sorted(seen):
    real = os.path.normpath(os.path.join(base, p.replace("/", os.sep)))
    real = urllib.parse.unquote(real)
    if not os.path.exists(real):
        miss += 1
        print("MISSING:", p)
print("rutas unicas:", len(seen), "| faltantes:", miss)
