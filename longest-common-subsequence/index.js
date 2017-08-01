
function initializeMatrix(strA, strB) {
  var matrix = new Array(strA.length)
  for (var i = 0; i < strA.length; i++) {
    matrix[i] = new Array(strB.length).fill(0)
  }
  return matrix
}

function longestSubsequenceMatrix(strA, strB) {

  var matrix = initializeMatrix(strA, strB)
  for (var i = 1; i < strA.length; i++) {
    for (var j = 1; j < strB.length; j++) {
      
      if(strA[i] === strB[j]) 
        matrix[i][j] += matrix[i-1][j-1] + 1
      else
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1])
    }
  }
  return matrix
}



function getLongestSubstring(matrix, strA, strB) {

  let m = strA.length-1
  let n = strB.length-1
  let idx = matrix[m][n]
  var out = new Array(idx)

  for (var i = m; i > 1;) {
    for (var j = n; j > 1;) {
      console.log('i:', i, "j:", j, 'm:', matrix[i][j])
      if(strA[i] === strB[j]) {
        out[idx] = strA[i]
        i--; j--; idx--;
      } 
      else if(matrix[i-1][j] > matrix[i][j-1])
        i--
      else
        j--
    }
  }
  return out.join('')
}



function longestSubsequence(strA, strB) {
  var aMask = ' ' + strA
  var bMask = ' ' + strB 
  var m = longestSubsequenceMatrix(aMask, bMask)
  return getLongestSubstring(m, aMask, bMask)

}


var a = 'The quick brown fox jumped over the lazy dog'
var b = 'abcdefghijklmnopqrstuvwxyz'


console.log(longestSubsequence(a, b))
