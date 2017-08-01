
var array = [5, 1, 3, 3, 3, 1, 4, 1 ,5 ,3, 3]

var vals = {}
var maxIdx = 0
for (var i = 0; i < array.length; i++) {
  if (i === 0) {
    maxIdx = array[i]
    vals[maxIdx] = 0
  }

  vals[array[i]] = vals[array[i]] + 1  || 1

  if(vals[array[i]] > vals[maxIdx]) {
    maxIdx = array[i]
    maxCount = vals[array[i]]
  }
}

console.log(maxIdx)
