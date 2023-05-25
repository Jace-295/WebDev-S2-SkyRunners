// ${formData.elemnts["AddressLine2"].value}

let cars = document.getElementById("cars");

function submit(event){
    event.preventDefault();
    var formData = document.forms[0];
    alert(`Service :${cars.options[cars.selectedIndex].getAttribute('name')}
Price: ${formData.elements["Options"].value}
Address: ${formData.elements["AddressLine1"].value} ${formData.elements["AddressLine2"].value} ${formData.elements["AddressLine3"].value}
Postcode: ${formData.elements["PostCode"].value}`)
}


const submission = document.getElementById("submission");
console.log(submission)
submission.addEventListener("click",submit,false);