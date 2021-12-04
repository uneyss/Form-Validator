const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repassword = document.querySelector('#repassword')


// Error
function error(input, message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling
    div.innerText = message
    div.className = 'invalid-feedback'
}


// Success
function success(input){
    input.className = 'form-control is-valid'
}


// Check E-Mail
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if(re.test(input.value))
        success(input)
    else 
        error(input, 'required e-mail')
}

// Check Required
function checkRequired(inputs){
    inputs.forEach(input => {
        if(input.value === ''){
            error(input, `${input.id} is required`)
        }else {
            success(input)
        }
    })
}


// Check Lnegth
function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters`)
    }else if (input.value.length > max) {
        error(input, `${input.id} must be at most ${max} characters`)
    }else {
        success(input)
    }
}

// Check Phone
function checkPhone(input) {
    var exp = /^\d{10}$/   
    if(!exp.test(input.value)) 
        error(input, 'Phone number must have 10 characters.')
}

// Check Password
function checkPasswords(input1, input2){
    if(input1.value !== input2.value){
        error(input2, 'Passwords do not match')
    }
}


// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault()

    checkRequired([username, email, password, repassword, phone])
    checkEmail(email)
    checkLength(username, 7, 15)
    checkLength(password, 7, 15)
    checkPasswords(password, repassword)
    checkPhone(phone)
})