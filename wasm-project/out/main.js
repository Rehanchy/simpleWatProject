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
    // Get the span element where the result will be displayed
    const resultElement = document.getElementById('container');
    // Update the span element with the result of the add function
    resultElement.textContent = instance.exports.add(100, 10);
  })
  .catch(console.error);
