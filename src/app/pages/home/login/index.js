import React, { useState } from 'react';

import './login.css';

import img_00 from '../../../../../img/img_00.jpeg';

export default function Login() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');

async function fazerLogin(e) {
  e.preventDefault();

  console.log(userName);
  console.log(passWord);

  let res = await fetch("http://localhost:3000/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  if(res.ok) {
      let res = await fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ usuario: userName, email: email, senha: passWord}),
    });
    if(res.ok) {
      console.log(res);
      window.location = 'http://localhost:8080/principal';
      /*if (res.status == "401") {
        getUrl("http://localhost/app/login.html");
      }
      */
    }
  }

}



function limpaErros() {
  document.getElementById("senha_incorreta").style.display = "none";
}


    return(
        <section className='login'>
            <div className='login_container width_padrao'>
                <img src={img_00} />
                <h1>BD Market List</h1>
                <form onSubmit={(e)=> fazerLogin(e)} >
                    <div>
                        <label>Login:</label>
                        <input type='text' class="inputUsuario" onChange={(e)=> setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='mail' class="inputEmail" onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type='password' class="inputSenha" onChange={(e)=> setPassWord(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit'>Entrar</button>
                    </div>
                    <div id="senha_incorreta">
                        <p>Usuário ou senha incorretos!</p>
                    </div>
                </form>
            </div>
        </section>
    );
}