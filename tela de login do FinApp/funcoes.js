let usuarios = {};

usuarios['admin@a.com'] = 'admin';


function fazerLogin() {
  const usuario = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("erro_login");

  if (usuarios[usuario] && usuarios[usuario] === senha) {
    msg.textContent = "Login bem-sucedido!";
    msg.style.color = "green";
    msg.style.visibility = "visible";
    setTimeout(() => {window.location.href = "../trab_v.alfa/index.html";},1500);
  } else {
    msg.textContent = "E-mail ou senha errados, tente de novo";
    msg.style.color = "red";
    msg.style.visibility = "visible";
  }
}

function fazerCadastro() {
const usuario = document.getElementById("email_c").value;
  const senha = document.getElementById("senha_c").value;
  const msg = document.getElementById("erro_login");


  if (usuario && senha) {
    if (usuarios[usuario]) {
      msg.textContent = "Usuário já existe!";
      msg.style.visibility = 'visible';
    } else {
      usuarios[usuario] = senha;
      msg.textContent = "Cadastro realizado com sucesso!";
      msg.style.color = "green";
      msg.style.visibility = 'visible';
      setTimeout(() => {window.location.href = "../tela de login do FinApp/index.html"},1500);
      
    }
  } else {
    msg.textContent = "Preencha todos os campos.";
    msg.style.color = "red";
    msg.style.visibility = 'visible';
  }
}











