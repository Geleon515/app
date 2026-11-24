import http from "node:http";
import { fileURLToPath } from "node:url";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, join, sep } from "node:path";
const root = resolve(
    process.argv[2] || fileURLToPath(new URL("./app", import.meta.url)),
  ),
  port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webmanifest": "application/manifest+json",
  ".json": "application/json",
};
http
  .createServer(async (req, res) => {
    try {
      const path = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      let file = resolve(root, "." + path);
      if (!file.startsWith(root + sep) && file !== root) {
        res.writeHead(403).end();
        return;
      }
      try {
        if (!(await stat(file)).isFile()) file = join(root, "index.html");
      } catch {
        file = join(root, "index.html");
      }
      res.setHeader(
        "Content-Type",
        types[extname(file)] || "application/octet-stream",
      );
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
      res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' http://127.0.0.1:54321 https://*.supabase.co; object-src 'none'; frame-ancestors 'none'; base-uri 'self'",
      );
      res.end(await readFile(file));
    } catch {
      res.writeHead(500).end("No se pudo servir el archivo.");
    }
  })
  .listen(port, "127.0.0.1", () =>
    console.log(`FinanPro 360 local: http://localhost:${port}`),
  );
