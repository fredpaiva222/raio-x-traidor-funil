const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const DIR = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".png":  "image/png",
  ".jpg":  "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
  ".svg":  "image/svg+xml"
};

http.createServer(function(req, res) {
  var url = req.url.split("?")[0];
  if (url === "/" || url === "") url = "/index.html";
  var fp = path.join(DIR, url);
  var ext = path.extname(fp).toLowerCase();
  var ct = MIME[ext] || "text/plain";
  fs.readFile(fp, function(err, data) {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/html"});
      res.end("<h1>404 Not Found</h1><p>" + url + "</p>");
      return;
    }
    res.writeHead(200, {"Content-Type": ct});
    res.end(data);
  });
}).listen(PORT, function() {
  console.log("");
  console.log("  ╔══════════════════════════════════════════════╗");
  console.log("  ║       RAIO-X DO TRAIDOR — Funil Local        ║");
  console.log("  ╚══════════════════════════════════════════════╝");
  console.log("");
  console.log("  Paginas disponíveis:");
  console.log("");
  console.log("  [1] Landing Page   →  http://localhost:3000/");
  console.log("  [2] Upload         →  http://localhost:3000/upload.html");
  console.log("  [3] Quiz           →  http://localhost:3000/quiz.html");
  console.log("  [4] Processando    →  http://localhost:3000/processando.html");
  console.log("  [5] Resultado      →  http://localhost:3000/resultado.html");
  console.log("  [6] Obrigado/OTO1  →  http://localhost:3000/obrigado.html");
  console.log("  [7] Area Membros   →  http://localhost:3000/membros.html");
  console.log("");
  console.log("  Pressione Ctrl+C para parar.");
  console.log("");
});