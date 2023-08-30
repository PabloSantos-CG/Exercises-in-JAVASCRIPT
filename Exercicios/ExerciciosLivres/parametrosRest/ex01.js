const sum = (...args) => {
  return args.reduce( (accumulator, value) => accumulator + value, 0)
}

console.log(sum(5,5,5,5,5))