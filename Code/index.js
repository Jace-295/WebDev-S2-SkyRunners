// var formData = document.forms[0];

// alert(formData);

const submitButton = document.getElementById("submitButton");
console.log(submitButton)

submitButton.addEventListener("click",submit,false);

function submit(event){
    event.preventDefault();
    var formData = document.forms[0];

    alert(`First Name: ${formData.elements["fname"].value} Last Name: ${formData.elements["lname"].value}`);
}