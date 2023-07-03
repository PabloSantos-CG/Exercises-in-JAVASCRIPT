function register (element) {
  const user = element.children.user.value
  const passowrd = element.children.passowrd.value
  const passowrdConfirm = element.children.passowrdConfirm.value

  if (passowrd === passowrdConfirm) {
    alert('Usuário registrado com sucesso!')
    console.log({user, passowrd})

      element.children.user.value = ''
      element.children.passowrd.value = ''
      element.children.passowrdConfirm.value = ''
  } else {
    alert('As senhas estão diferentes\nTente novamente')
      element.children.passowrd.value = ''
      element.children.passowrdConfirm.value = ''
  }
}