//Initializing variables
var CC, YY, MM, DD, d, dayOfWeek;
var weekdays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday"];
var akanMaleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var akanFemaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

//function to raise alert messages on invalid input submission
function validate() {
  var genders = document.getElementsByName("gender");
  if( document.form.year.value == "" || document.form.year.value.length !=4 || document.form.year.value <= 1900 || document.form.year.value > 2100) {
     alert(`Please enter a valid year of birth! eg 1990`);
     document.form.year.focus() ;
     return false;
  }
  else if( document.form.month.value == "" || document.form.month.value.length != 2 || document.form.month.value <= 0 || document.form.month.value > 12){
     alert(`Please enter your month of birth! between 1 and 12`);
     document.form.month.focus() ;
     return false;
  }
  else if( document.form.date.value == "" || document.form.month.value.length != 2|| document.form.date.value <= 0 || document.form.date.value > 31) {
     alert(`Please enter a valid date that you were born in!`);
     document.form.day.focus() ;
     return false;
  }
  else if( genders[0].checked == false && genders[1].checked == false ) {
      alert(`You must select gender. Male or Female`);
      return false;
  }   
  else{
    return true ;
  } 
}

/* function splits the three inputs given by the user into CC, YY, MM, DD 
and returns day of the week the user was born */
function weekdayValue() {
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD) % 7;
  console.log(d);
  return (d.toFixed());
}

// function that returns either male/female in regard to the gnder option checked
function getGender() {
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender){
    case "male":
      if (dayOfWeek == 1){
        alert(`You were born on ${weekdays[0]}. And your Akan name is ${akanMaleNames[0]}!`);
      }
      else if(dayOfWeek == 2){
        alert(`You were born on ${weekdays[1]}. And your Akan name is ${akanMaleNames[1]}!`);
      }
      else if(dayOfWeek == 3){
        alert(`You were born on ${weekdays[2]}. And your Akan name is ${akanMaleNames[2]}!`);
      }
      else if(dayOfWeek == 4){
        alert(`You were born on ${weekdays[3]}. And your Akan name is ${akanMaleNames[3]}!`);
      }
      else if(dayOfWeek == 5){
        alert(`You were born on ${weekdays[4]}. And your Akan name is ${akanMaleNames[4]}!`);
      }
      else if(dayOfWeek == 6){
        alert(`You were born on ${weekdays[5]}. And your Akan name is ${akanMaleNames[5]}!`);
      }
      else if(dayOfWeek == 7){
        alert(`You were born on ${weekdays[6]}. And your Akan name is ${akanMaleNames[6]}!`);
      }
    break;
    case "female":
      if (dayOfWeek == 1){
        alert(`You were born on ${weekdays[0]}. And your Akan name is ${akanFemaleNames[0]}!`);
      }
      else if(dayOfWeek == 2){
        alert(`You were born on ${weekdays[1]}. And your Akan name is ${akanFemaleNames[1]}!`);
      }
      else if(dayOfWeek == 3){
        alert(`You were born on ${weekdays[2]}. And your Akan name is ${akanFemaleNames[2]}!`);
      }
      else if(dayOfWeek == 4){
        alert(`You were born on ${weekdays[3]}. And your Akan name is ${akanFemaleNames[3]}!`);
      }
      else if(dayOfWeek == 5){
        alert(`You were born on ${weekdays[4]}. And your Akan name is ${akanFemaleNames[4]}!`);
      }
      else if(dayOfWeek == 6){
        alert(`You were born on ${weekdays[5]}. And your Akan name is ${akanFemaleNames[5]}!`);
      }else if(dayOfWeek == 7){
        alert(`You were born on ${weekdays[6]}. And your Akan name is ${akanFemaleNames[6]}!`);
      }
    break
    default:
    }
}

function findOut() {
  validate();
  dayOfWeek = weekdayValue();
  getGender();
  form.reset();
}