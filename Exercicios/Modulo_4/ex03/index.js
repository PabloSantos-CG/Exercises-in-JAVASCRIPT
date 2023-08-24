const Author = require("./author");

const newAuthor = new Author('Stt_Pablo')

const post = newAuthor.createPosts('Um_Anônimo_Qualquer', 'Estou quebrando a cabeça com algo que todos tratam com simples, mas FODA-SE!!')


post.addNewComments('UmOtarioQualquer', 'Carai tu é burrao ksks aprendi tudo em uma semana')
post.addNewComments('UmCornoQualquer', 'Ta estudando isso pra depois ficar sem emprego ha ha ha')

console.log(newAuthor, post.comments)