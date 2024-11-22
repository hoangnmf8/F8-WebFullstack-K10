function countElements(tagName) {
  if (typeof tagName !== 'string') {
    return false
  }

  const countTagName = document.getElementsByTagName(tagName)

  return countTagName.length
}

console.log(countElements('div'))
