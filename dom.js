const nameInput = document.getElementById('form_name')
const cardName = document.getElementById('name_details')
const numberInput = document.getElementById('form_number')
const cardNumber = document.getElementById('number_details')
const expMonthInput = document.getElementById('mon_exp')
const expMonth = document.getElementById('exp_month')
const expYearInput = document.getElementById('date_exp')
const expYear = document.getElementById('exp_year')
const cvcInput = document.getElementById('cvc')
const cvcNumber = document.getElementById('CVC_number')
const form = document.getElementById('form')
const nameError = document.getElementById('name_wrong')
const numberError = document.getElementById('number_wrong')
const expError = document.getElementById('exp_wrong')
const cvcError = document.getElementById('cvc_wrong')
const container = document.getElementById('card_details')
const side = document.getElementById('first')




// CARD NAME FUNCTION
nameInput.addEventListener('keyup', () => {
    cardName.innerHTML = nameInput.value
});
// CARD NUMBER FUNCTION
numberInput.addEventListener('keyup', () => {
    cardNumber.innerHTML = numberInput.value
});
// EXPIRATION MONTH FUNCTION
expMonthInput.addEventListener('keyup', () => {
    expMonth.innerHTML = expMonthInput.value
});  
// EXPIRATION YEAR FUNCTION
expYearInput.addEventListener('keyup', () => {
    expYear.innerHTML = expYearInput.value
});
// CARD CVC NUMBER FUNCTION
cvcInput.addEventListener('keyup', () => {
    cvcNumber.innerHTML = cvcInput.value
});
// FORM SUBMIT EVENT
form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (nameInput.value === '') {
        nameError.innerHTML = "Enter your Name"
        nameInput.classList.add('input_error')
    } else if (validarNumero(nameInput.value) == false) {
        nameError.innerHTML = "Wrong format, only letters"
    } else if (numberInput.value === '') {
        nameError.innerHTML = ''
        nameInput.classList.remove('input_error')
        numberError.innerHTML = "Enter your figures"
        numberInput.classList.add('input_error')
    } else if (validarNumero(numberInput.value) == false) {
        numberError.innerHTML = "Wrong format, only numbers"
    } else if (expMonthInput.value === '') {
        numberError.innerHTML = ""
        numberInput.classList.remove('input_error')
        expError.innerHTML = "Enter the required info"
        expMonthInput.classList.add('input_error')
    } else if (validarNumero(expMonthInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (expYearInput.value === '') {
        expMonthInput.classList.remove('input_error')
        expError.innerHTML = "Enter the required info"
        expYearInput.classList.add('input_error')
    } else if (validarNumero(expYearInput.value) == false) {
        expError.innerHTML = "Wrong format, only numbers"
    } else if (cvcInput.value === '') {
        expYearInput.classList.remove('input_error')
        cvcError.innerHTML = "Enter the required info"
        cvcInput.classList.add('input_error')
    } else if (validarNumero(cvcInput.value) == false) {
        cvcError.innerHTML = "Wrong format, only numbers"
    } else {
        cvcError.innerHTML = ""
        cvcInput.classList.remove('input_error')
        container.removeChild(form)
        const newNode = document.createElement('div')
        newNode.classList.add('OKAY')
        container.appendChild(newNode)
        newNode.innerHTML = `
        <figure>
        <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
    </figure>
    <section class="okay_text">
        <h1 class="okay_head">OKAY ✔</h1>
        <p class="okay_parag">YOUR DETIALS HAVE BEEN SUCCESSFULLY SUBMITTED</p>
        </section>
             <button class="okay_btn" id="next_btn">Next</button>
             `

        const nextBtn = document.getElementById('next_bnt')
        nextBtn.addEventListener('click', () => {
            window.location.href = 'index.html'
        })
    }

})
    