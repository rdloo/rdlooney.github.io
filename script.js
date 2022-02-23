f = function (x) {return -4 * x + 2}
g = function (x) {return x * x}

function update() {
  x = parseFloat(document.getElementById('x').value)
  h = parseFloat(document.getElementById('h').value)
  document.getElementById('fx').innerHTML = `f(x) = ${f(x).toFixed(3)}`
  document.getElementById('df').innerHTML =
    `f(x+h) - f(x)= ${(f(x+h)-f(x)).toFixed(3)}`
  document.getElementById('gx').innerHTML = `g(x) = ${g(x).toFixed(3)}`
  document.getElementById('dg').innerHTML =
    `g(x+h) - g(x)= ${(g(x+h)-g(x)).toFixed(3)}`
}

