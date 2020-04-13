const form = document.getElementById('form')
form.addEventListener('submit', register)

function register(event){
  event.preventDefault()

  const userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  if (userData.name === ''){
    alert('Nama tidak boleh kosong')
  } else if (userData.email === ''){
    alert('Email tidak boleh kosong')
  } else if (userData.password === ''){
    alert('Password tidak boleh kosong')
  } else if (userData.password.length < 7){
    alert('Password minimal 8 karakter')
  } else {
    const url = 'https://5e9407d7c7393c0016de4cfc.mockapi.io/users'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }


    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        alert('Registrasi berhasil')
        location.replace('./login.html')
      })
      .catch(error => console.log(error))
  }
}
