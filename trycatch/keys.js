let person = {
   name: '',
   age: 27,
   email: '',
   password: 'satuduatiga'
}

let result = Object.keys(person)
console.log(person)

result.forEach(key => {
   if (!person[key]) {
      delete person[key]
   }
})

console.log(person)