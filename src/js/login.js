const form = document.getElementById('form')
form.addEventListener('submit', login)

function login(event){
  event.preventDefault()

  let userData = {
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  }

  if(userData.email === ''){
    alert('Email tidak boleh kosong')
  } else if(userData.password === ''){
    alert('Password tidak boleh kosong')
  } else {
    const url = 'https://5e9407d7c7393c0016de4cfc.mockapi.io/users'

    fetch(url)
      .then(response => response.json())
      .then(results => {
        const loginUser = results.find(result => result.email === userData.email)

        if(loginUser === undefined){
          alert('Email belum terdaftar. Silahkan registrasi terlebih dahulu')
        } else if((loginUser.email === userData.email) && (loginUser.password === userData.password)){
          localStorage.setItem('loginUser', JSON.stringify(loginUser))

          // location.replace('./todos.html') 
          location.href = 'http://127.0.0.1:5500/todos.html'
        } else {
          alert('Email atau password salah')
        }
      })
  }
}