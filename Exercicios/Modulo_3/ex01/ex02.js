const person = {
  name: 'Pablo',
  job: 'Freelancer',
  parents: ['Joana', 'Alan']
}

const { name, job } = person

const {parents} = person
console.log(parents)

const [a, b] = parents
console.log(a)

const castle = ['Silvana', 'Elbôro', 'Orum']

const madalena = [...castle]
console.log(madalena)