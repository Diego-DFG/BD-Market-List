import React, { useState } from 'react';

import './login.css';

import img_00 from '../../../../img/img_00.jpeg';

export default function Login() {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');

async function fazerLogin(e) {
  e.preventDefault();

  console.log(userName);
  console.log(passWord);

  let res = await fetch("https://git.heroku.com/bdmarketlist.git/usuarios", {
    method: "GET",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
  }
  });
  if(res.ok) {
      let res = await fetch("https://git.heroku.com/bdmarketlist.git/auth", {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({ usuario: userName, email: email, senha: passWord}),
    });
    if(res.ok) {
      console.log(res);
      const url = 'https://diego-dfg.github.io/BD-Market-List/#/principal'
      console.log(url);
      window.location = url;
    } else {
      const usuarioSenhaIncorreta = document.querySelector('.senha_incorreta');
      usuarioSenhaIncorreta.style.display = "block";
    }
      
  }

}


    return(
        <section className='login'>
            <div className='login_container width_padrao'>
                <img src={img_00} />
                <h1>BD Market List</h1>
                <form onSubmit={(e)=> fazerLogin(e)} >
                    <div>
                        <label>Login:</label>
                        <input type='text' className="inputUsuario" onChange={(e)=> setUserName(e.target.value)} />
                    </div>
                    <div className='email_container'>
                        <label>Email:</label>
                        <input type='mail' className="inputEmail" onChange={(e)=> setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha:</label>
                        <input type='password' className="inputSenha" onChange={(e)=> setPassWord(e.target.value)} />
                    </div>
                    <div className='senha_incorreta'>
                        <p>Usuário ou senha incorretos!</p>
                    </div>
                    <div>
                        <button type='submit'>Entrar</button>
                    </div>
                </form>
            </div>
        </section>
    );
}