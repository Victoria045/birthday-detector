const birthdate = document.getElementById('birthdate')
const male = document.getElementById('male')
const female = document.getElementById('female')
const button = document.getElementById('submit')

let date = centuary, year, month, day;

const day =  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;

button.addEventListener('submit', (e) => {
  let messages = []
  if ( (d <= 0) || (d > 31) || (m <= 0) || (m > 12)){
  messages.push('INVALID INPUT. Please enter a valid date')
  }
  else if (day === 0 && gender.value == 'male') {
    messages.push('Your birth day date is Sunday and akon name Kwasi')
  }
  else if (day === 0 && gender.value == 'female') {
    messages.push('Your birth day date is Sunday and akon name Akosua')
  }
  else if (day === 1 && gender.value == 'male') {
    messages.push('Your birth day date is Monday and akon name Kwadwo')
  }
  else if (day === 1 && gender.value == 'female') {
    messages.push('Your birth day date is Monday and akon name Adwoa')
  }
  else if (day === 2 && gender.value == 'male') {
    messages.push('Your birth day date is Tuesday and akon name Kwabena')
  }
  else if (day === 2 && gender.value == 'female') {
    messages.push('Your birth day date is Tuesday and akon name Abenaa')
  }
  else if (day === 0 && gender.value == 'male') {
    messages.push('Your birth day date is Wednesday and akon name Kwaku')
  }
  else if (day === 0 && gender.value == 'female') {
    messages.push('Your birth day date is Wednesday and akon name Akua')
  }
  else if (day === 0 && gender.value == 'male') {
    messages.push('Your birth day date is Thursday and akon name Yaw')
  }
  else if (day === 0 && gender.value == 'female') {
    messages.push('Your birth day date is Thursday and akon name Yaa')
  }
  else if (day === 0 && gender.value == 'male') {
    messages.push('Your birth day date is Friday and akon name Kofi')
  }
  else if (day === 0 && gender.value == 'female') {
    messages.push('Your birth day date is Friday and akon name Afua')
  }
  else if (day === 0 && gender.value == 'male') {
    messages.push('Your birth day date is Saturday and akon name Kwame')
  } else {
    messages.push('Your birth day date is Saturday and akon name Ama')
  }
});

console.log(messages);