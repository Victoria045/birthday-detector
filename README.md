# birthday-detector

# Author 
[Victoria Beryl](https://github.com/Victoria045)

## Description
This is a web application that allows a user to input their birth date details in a form 
and calculates day of the week they were born and depending on their gender outputs 
their Akan names as well.

## Setup/Installation Requirements
* Install you preferred browser

* Load the website url on your browser

## Technologies Used
* Bootstrap 5 v1.0 - 2021-07-09

* HTML5

* CSS

* Vanilla JavaScript

* markdown

## Behaviour Driven Development (BDD)
Enter century of birth eg 19 for 1990,

* Enter year of Birth eg 90 for 1990

* Enter month of birth eg 08 for August

* Enter Date of the month you were born in eg 20

* Select gender 
    Select one of the two options,
    either male or female

Submit.
The program compares the inputs entered with the conditions set for the inputs eg if input field is empty, the program executes an alert to enter valid details.
* 0 < Date >= 31, Date falls between 0-31 else false.
* 0 < Month >= 12, Month falls between 0-12 else false.
* Gender Male or Female, cannot be empty. <br/>  
The True value is output. Example: **You were born on Tuesday. And Your Akan name is Kwabena!** If gender is Male.<br/>
The True value is output. Example: **You were born on Tuesday and Your akan name is  Abenaa!** If gender is female.  

**Example**
* century input - 19
* year input - 90
* month input - 08
* date input - 20
* gender -- female selected,
**Expected output is *You were born on Tuesday. And Your Akan name is Abenaa!*** 

## Known Bugs
* Some of the output are not entirely accurate as expected.

## Support and contact details
Incase of any issues at hand, please email me at [v@gmail.com]
### License
MIT License. This website is 100% free. You do not have the rights to resell, sublicense or redistribute (even for free)
the site on its own or as separate attachment from any of your work.