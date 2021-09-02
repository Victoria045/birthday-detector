const birthdate = document.getElementById('birthdate')
const male = document.getElementById('male')
const female = document.getElementById('female')
const button = document.getElementById('submit')

const day =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

button.addEventListener('submit, (e) => {
  // let messages = []
  if ((birthdate.value <= 0) || (birthdate.value > 31))
  messages.push('Enter a valid date')
})