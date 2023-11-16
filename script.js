const formInput = document.querySelector('.form-input')
const submitBtn = document.querySelector('button')
const input = document.querySelector('.form-input').querySelector('input')
const imgContainer = document.getElementById('component-img')

const validateEmail = (email) => {
  const atSign = email.indexOf('@')
  const dotPos = email.lastIndexOf('.')

  if (atSign > 0 && dotPos > atSign + 1 && dotPos < email.length - 1) {
    alert('email sent')
    email.value = ''
  } else {
    const errorMsg = document.createElement('p')
    errorMsg.innerText = 'Valid email required'
    errorMsg.style.color = 'hsl(4, 100%, 67%)'
    errorMsg.style.fontSize = 'smaller'
    errorMsg.style.fontWeight = 700
    formInput.appendChild(errorMsg)

    setTimeout(() => {
      errorMsg.remove()
    }, 2000)
    email.value = ''
  }
}

submitBtn.addEventListener('click', () => {
  validateEmail(input.value)
})

if(window.innerWidth <= 430) {
  imgContainer
    .querySelector('img')
    .setAttribute('src', 'assets/images/illustration-sign-up-mobile.svg')
}