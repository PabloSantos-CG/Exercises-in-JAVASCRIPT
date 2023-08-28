import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Inputs } from "./Inputs.js";
import { Label } from "./Label.js";

const result = new Component('h1', 'body', { textContent: "Hello World!" })
result.render()

result.tag = 'h3'

result.build().render()


const form = new Form('body')

const label = new Label('Digite: ', form, { htmlFor: 'inputResult' })
const input = new Inputs(form, { id: 'inputResult', name: 'result' })

form.render()
label.render()

form.addChildren(input)
// ao utilizar esse método não precisa especificar o parent, pois já está sendo adicionado direto ao input
form.addChildren(
  new Component('br'),
  new Label('Date: ', form, { htmlFor: 'iDate' }),
  new Inputs(form, { id: 'iDate', type: 'date' })
)

console.log(result)