const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById('message'); 


function storeData () {
       return {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        webAddress :form.web.value,
        p : form.password.value
    };
  
}

function processFormData(e) {
    e.preventDefault(); 
    // Validate form
    isValid = form.checkValidity();
    console.log(isValid)

    // Style main message for an error
    if(!isValid) {
        message.textContent = "Please fill out all fields";
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return
    }

    if(password1El.value === password2El.value){
        message.textContent = 'Successfully registered!'
        message.style.color = 'green'
        messageContainer.style.borderColor = 'green'
        let v = storeData()
        console.log(v)
  
    } else {
        message.textContent = 'Passwords do not match'
        message.style.color = 'red'
        messageContainer.style.borderColor = 'red'
    }
    
}



// Event Listener

form.addEventListener('submit', processFormData)