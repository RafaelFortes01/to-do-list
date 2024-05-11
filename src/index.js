const input = document.querySelector('#input')
const addButton = document.querySelector('#addButton')
const list = document.querySelector('#list')

addButton.addEventListener('click', () => {
   
   if(!input.value) {
      alert('Escreva algo')
      return
   }else {

      const createDiv = document.createElement('div')
      const createInputCheckbox = document.createElement('input')
      const createInputText = document.createElement('input')
      const createEditButton = document.createElement('button')
      const createDeleteButton = document.createElement('button')
      let inputValue = input.value


      createDiv.classList.add('uniqueToDo')

      createInputCheckbox.setAttribute('type', 'checkbox')
      createInputCheckbox.setAttribute('name', 'to-do')
      createInputCheckbox.classList.add('toDoInputs')

      createInputText.setAttribute('readonly', 'readonly')
      createInputText.classList.add('toDoInputsTextReadonly')

      createEditButton.classList.add('editButton')
      createEditButton.innerText = 'Editar'

      // Edit Button
      createEditButton.addEventListener('click', () => {

         if (createEditButton.innerText.toLocaleLowerCase() == 'editar') {

            createInputText.removeAttribute('readonly');
            createInputText.focus();

            createInputText.classList.add('toDoInputsText')
            createInputText.classList.remove('toDoInputsTextReadonly')


            createEditButton.innerText = 'Salvar'
            createEditButton.classList.remove('editButton')
            createEditButton.classList.add('saveButton')

        } else {

            createInputText.setAttribute('readonly', 'readonly');

            createInputText.classList.add('toDoInputsTextReadonly')
            createInputText.classList.remove('toDoInputsText')

            createEditButton.innerText = 'Editar'
            createEditButton.classList.remove('saveButton')
            createEditButton.classList.add('editButton')

        }        
       });
      //

      createDeleteButton.classList.add('deleteButton')
      createDeleteButton.innerText = 'Deletar'

      //Delete Button
      createDeleteButton.addEventListener('click', () => {
         if(confirm('Tem certeza que deseja deletar?')){
            list.removeChild(createDiv)
         }
       });
      
      //
      
      createInputText.value = inputValue

      list.appendChild(createDiv)
      createDiv.appendChild(createInputCheckbox)
      createDiv.appendChild(createInputText)
      createDiv.appendChild(createEditButton)
      createDiv.appendChild(createDeleteButton)

      input.value = ''
   }

})

