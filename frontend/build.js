const fs = require('fs');
const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Página de pruebas sencilla</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 24px;
        background: #f4f7fb;
        color: #222;
      }
      .card {
        max-width: 480px;
        margin: 40px auto;
        background: white;
        padding: 24px;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
      }
      h1 {
        margin-top: 0;
      }
      .actions {
        display: flex;
        gap: 10px;
        margin-bottom: 16px;
      }
      button {
        border: none;
        padding: 10px 14px;
        border-radius: 8px;
        cursor: pointer;
        color: white;
        font-weight: bold;
      }
      .btn-add { background: #2563eb; }
      .btn-remove { background: #dc2626; }
      .btn-clear { background: #6b7280; }
      ul {
        padding-left: 20px;
      }
      li {
        margin: 6px 0;
      }
      .counter {
        margin-bottom: 12px;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Prueba rápida</h1>
      <p>Haz clic en los botones para agregar o quitar elementos.</p>
      <div class="actions">
        <button class="btn-add" onclick="agregarItem()">Agregar</button>
        <button class="btn-remove" onclick="quitarUltimo()">Quitar último</button>
        <button class="btn-clear" onclick="limpiarLista()">Limpiar</button>
      </div>
      <div class="counter" id="counter">Elementos: 0</div>
      <ul id="lista"></ul>
    </div>

    <script>
      const lista = document.getElementById('lista');
      const counter = document.getElementById('counter');
      let items = [];

      function render() {
        lista.innerHTML = '';
        items.forEach((item) => {
          const li = document.createElement('li');
          li.textContent = item;
          lista.appendChild(li);
        });
        counter.textContent = 'Elementos: ' + items.length;
      }

      function agregarItem() {
        const nextNumber = items.length + 1;
        items.push('Elemento ' + nextNumber);
        render();
      }

      function quitarUltimo() {
        if (items.length > 0) {
          items.pop();
          render();
        }
      }

      function limpiarLista() {
        items = [];
        render();
      }

      render();
    </script>
  </body>
</html>`;

fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
console.log('Frontend build: dist/index.html created');
