const result = document.querySelector('.card__selected');
const rating = document.querySelector('.card__rating');
const enviar = document.getElementById('btn')

const form = document.querySelector('[data-js-form]')

enviar.addEventListener('click',() => {
    event.preventDefault()
    
    result.classList.remove("hidden")
    rating.style.display = "none"
    
    
  


    })
    