const input = document.querySelector('#input')
const list = document.querySelector('#list')
const button = document.querySelector('#addButton')

button.addEventListener('click', () => {
   
   if(!input.value) {
      alert('Escreva algo')
      console.log(input.value)
   }else {
      const createInput = document.createElement('input')
      const createLabel = document.createElement('label')
      const createDiv = document.createElement('div')
      let inputValue = input.value


      createInput.setAttribute('type', 'checkbox')
      createInput.setAttribute('name', 'to-do')
      createInput.classList.add('toDoInputs')
      createLabel.classList.add('toDoLabels')
      createDiv.classList.add('uniqueToDo')

      
      createLabel.innerHTML = inputValue

      list.appendChild(createDiv)
      createDiv.appendChild(createInput)
      createDiv.appendChild(createLabel)

      input.value = ''
   }

})

checkbox.addEventListener('change', () => {
   alert('Olá')
})