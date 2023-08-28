function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
let ownProps = [];

for (let property in duck) {
  ownProps.push(property)
}

console.log(ownProps)