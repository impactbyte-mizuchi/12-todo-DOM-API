window.onload = showAllTodos()

const addButton = document.querySelector('.add')
addButton.addEventListener('click', addTodo)

const activeUser = JSON.parse(localStorage.getItem('loginUser'))

function showAllTodos(){
  document.querySelector('#todo-list ul').innerHTML = ''
  
  const url = 'https://5e9407d7c7393c0016de4cfc.mockapi.io/todos'

  fetch(url)
    .then(response => response.json())
    .then(results => {
      // const activeUser = JSON.parse(localStorage.getItem('loginUser'))
      const userTodos = results.filter(result => {
        return result.userId === activeUser.id
      })

      userTodos.forEach(todo => {
        const li = document.createElement('li')
        
        const input = document.createElement('input')
        input.classList.add('show-mode')
        input.type = 'text'
        input.setAttribute('value', todo.todo)
        input.setAttribute('disabled', '')

        const editButton = document.createElement('button')
        const editText = document.createTextNode('Edit')
        editButton.appendChild(editText)

        const deletButton = document.createElement('button')
        const deleteText = document.createTextNode('Hapus')
        deletButton.appendChild(deleteText)

        li.appendChild(input)
        li.appendChild(editButton)
        li.appendChild(deletButton)
        
        document.querySelector('#todo-list ul').appendChild(li)
      })

  
    })
    .catch(error => console.log(error))
}

function addTodo(){
  const data = {
    todo: document.getElementById('todo').value,
    userId: activeUser.id
  }

  const url = 'https://5e9407d7c7393c0016de4cfc.mockapi.io/todos'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(url, options)
    .then(response => response.json())
    .then(todo => showAllTodos())
    .catch(error => console.log(error))
}





