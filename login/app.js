const firebaseConfig = {
    apiKey: "AIzaSyClE-O7PdO-7r61VubC24Yr0HMFY06o6k8",
    authDomain: "projeto2miateste-c14ce.firebaseapp.com",
    projectId: "projeto2miateste-c14ce",
    storageBucket: "projeto2miateste-c14ce.appspot.com",
    messagingSenderId: "728472047388",
    appId: "1:728472047388:web:c9e29715e379d2c1e1f4d9"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("Usuário logado: ", user)
    })
    .catch((error)=>{
        const errorMessage = error.message;
        console.error("Erro de autenticação: ", errorMessage)
    })     
  })