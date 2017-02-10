/*
Displaying Timer
*/
function displayTimer() {
    var date = new Date();
    var time = date.toLocaleTimeString();
    document.getElementById("timer").innerHTML = time  //manipulating DOM
}

setInterval(displayTimer,1000)

/*
Simple Validations for checking if the fields are empty or not. 
*/
function registerValidation() {
    
    //using Array as an Object
    var formElements  = { name: document.forms["register"]["name"].value, dob: document.forms["register"]["user-dob"].value,
                          gender: document.forms["register"]["radio-gender"].value, email: document.forms["register"]["email-address"].value,
                          checkbox: document.forms["register"]["checkbox"].value };
    
    if (formElements.name == "" || formElements.dob == "" || formElements.gender == "" || formElements.email == "" || formElements.checkbox == "") {
        alert("Please fill in all the fields of the form.");
        return false;
    }
}

/*
Event Handling when checkbox is enabled
*/
function checkboxEnabled() {
    /*var elementsArray = [document.querySelector('.name'), document.querySelector('.dob'), document.querySelector('.email-address'), document.querySelector('.agree-checkbox') ];
   // alert("Email Address: "+elementsArray.pop()+", Gender: "+ elementsArray.pop()+", DOB: "++ elementsArray.pop()+ ", Name: "+elementsArray.pop())
    elementsArray.forEach(alert(elementArray.pop()))*/
    if(document.forms["register"]["checkbox"].checked) {
       document.forms["register"]["btn-register"].disabled = false;
    }
}

/*
Simple Validations for checking if the fields are empty or not. 
*/
function loginValidation() {
    var formElements  = { email: document.forms["login"]["user-email"].value, 
                          password : document.forms["login"]["password"].value };
    
    if(formElements.email == "" || formElements.password == "") {
        alert("Please fill in all the fields of the form.");
        return false;
    }
}