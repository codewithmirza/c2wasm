function callAdd() {
  const x = parseFloat(document.getElementById('x').value);
  const y = parseFloat(document.getElementById('y').value);
  
  fetch('functions.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(obj => {
      const add = obj.instance.exports.add;
      const result = add(x, y);
      document.getElementById('result').textContent = `${x} + ${y} = ${result}`;
    })
    .catch(console.error);
}
