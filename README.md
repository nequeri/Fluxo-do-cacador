index.html:

<!DOCTYPE html><html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="manifest" href="manifest.json">
  <title>Fluxo do Caçador</title>
</head>
<body>
  <main class="container">
    <h1>Fluxo do Caçador</h1>
    <p class="subtitle">Nível atual: <span id="level">1</span></p>
    <button id="startBtn">Iniciar Sessão</button>
    <div id="taskLog"></div>
  </main>
  <script src="script.js"></script>
</body>
</html>style.css:

body { margin: 0; font-family: 'Segoe UI', sans-serif; background-color: #0e0e0e; color: #fff; display: flex; justify-content: center; align-items: center; height: 100vh; }

.container { text-align: center; padding: 20px; border: 2px solid #222; border-radius: 12px; background-color: #1a1a1a; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); }

.subtitle { margin: 10px 0; }

button { background-color: #00ffcc; color: #000; padding: 12px 24px; font-size: 16px; border: none; border-radius: 8px; cursor: pointer; transition: 0.3s; }

button:hover { background-color: #00b38f; }

#taskLog { margin-top: 20px; text-align: left; max-height: 200px; overflow-y: auto; }

script.js:

let level = 1; const levelEl = document.getElementById("level"); const log = document.getElementById("taskLog"); const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => { const startTime = new Date(); const sessionLength = 25 * 60 * 1000; // 25 min foco

startBtn.disabled = true; startBtn.innerText = "Em Progresso...";

setTimeout(() => { level++; levelEl.innerText = level; const endTime = new Date(); log.innerHTML += <p>Missão completa: ${startTime.toLocaleTimeString()} - ${endTime.toLocaleTimeString()}</p>; startBtn.disabled = false; startBtn.innerText = "Iniciar Sessão"; }, sessionLength); });

manifest.json:

{ "name": "Fluxo do Caçador", "short_name": "Caçador", "start_url": "index.html", "display": "standalone", "background_color": "#000000", "theme_color": "#00ffcc", "icons": [ { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" }, { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" } ] }

(service worker opcional, mas não essencial para funcionar como PWA básico)

