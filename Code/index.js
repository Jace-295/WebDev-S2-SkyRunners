let cars = document.getElementById("cars");

function submit(event){
    event.preventDefault();
    var formData = document.forms[0];
    alert(`Service: ${cars.options[cars.selectedIndex].getAttribute('name')}
Price: ${formData.elements["Options"].value}
Address: ${formData.elements["AddressLine1"].value} ${formData.elements["AddressLine2"].value} ${formData.elements["AddressLine3"].value}
Postcode: ${formData.elements["PostCode"].value}
Sender: ${formData.elements["SenderName"].value}
Message: ${formData.elements["CustomMessage"].value}
Item: ${formData.elements["Item"].value}
Receiver: ${formData.elements["ReceiverName"].value}
Request: ${formData.elements["AdditionalRequests"].value}`);
    let price=formData.elements["Options"].value;
    let address=formData.elements["AddressLine1"].value+" "+formData.elements["AddressLine2"].value+" "+formData.elements["AddressLine3"].value;
    let postcode=formData.elements["PostCode"].value;
    let sender=formData.elements["SenderName"].value;
    let message=formData.elements["CustomMessage"].value;
    let item=formData.elements["Item"].value;
    let receiver=formData.elements["ReceiverName"].value;
    let request=formData.elements["AdditionalRequests"].value;
    location.reload();
}


const submission = document.getElementById("submission");
console.log(submission)
submission.addEventListener("click",submit,false);