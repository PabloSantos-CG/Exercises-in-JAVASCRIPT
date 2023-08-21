function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return []
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1)
    arr.push(endNum)
    return arr
  }
};

const exibir = rangeOfNumbers(5, 10)
console.log(exibir)