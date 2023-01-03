fetch('../out/main.wasm')
  .then(response => response.arrayBuffer())
  .then(bytes => {
    const importObject = {
      console: {
        log: console.log
      }
    };
    return WebAssembly.instantiate(bytes, importObject);
  })
  .then(results => {
    const instance = results.instance;
    const resultElement = document.getElementById('container');
    resultElement.textContent = instance.exports.add(100, 10);
  })
  .catch(console.error);
