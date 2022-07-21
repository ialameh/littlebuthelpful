const fname = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const fnameError = document.querySelector('#fnameError')
const fnameErrorMessage = "first name should be more than 5 characters"


// let fnameValue = fname.value


// if (I clicked on the text ) {
// }

// i want to listen to a click eve\nt on the text
// if this happen I want to execute a block of code

lname.addEventListener('click', (e)=> {
    // fname.style.display = 'none'
    const fnameValue = fname.value
    if (fnameValue.length < 6) {
        fnameError.innerHTML = fnameErrorMessage
    }
})


// clickme.addEventListener('mouseover', (e)=> {
//     window.alert('stay away')
// })