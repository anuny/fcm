const slice = require('./slice')

function chunk(array, size) {
  // #1  
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  
  // #2
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))
  
  // #3  
  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}

module.exports = chunk