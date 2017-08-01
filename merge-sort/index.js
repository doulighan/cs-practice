
var array = new Array(12)
for (var i = 0; i < array.length; i++) {
  array[i] = Math.floor(Math.random() * 20)
}

function mergeSort(arr) {
  divide(arr)
}


function divide(arr) {
  if(arr.length <= 1) 
    return arr
  var left = arr.slice(0, arr.length/2)
  var right = arr.slice(arr.length/2, arr.length)
  merge(divide(left), divide (right))
}

function merge(a, b) {
  console.log(a, b)
  var res = []
  if(a.length > 0)
}

console.log(array)
mergeSort(array)