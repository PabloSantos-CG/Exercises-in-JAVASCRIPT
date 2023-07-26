const dayjs = require("dayjs")

function birthday (date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const age = today.diff(birthday, 'years')
  const nextBirthday = birthday.add(age + 1, 'years')
  const daysForNexBirthday = nextBirthday.diff(today + 1, 'days')

  console.log(`
  Data de nascimento: ${birthday.format('DD/MMMM/YYYY')}
  Idade Atual: ${age} anos
  Próximo Aniversário: ${nextBirthday.format('DD/MM/YYYY')}
  Faltam: ${daysForNexBirthday} dias
  `)
}

birthday('2023-07-26')