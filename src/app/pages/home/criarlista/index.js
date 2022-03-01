import React, { useState } from 'react';

import './crialista.css';

export default function CriarLista() {


  const formProduto = document.querySelector(".form_produto");
    const formQuantidade = document.querySelector(".form_quantidade");

    

async function criaLista() {

  let objInputs = {
    produto: formProduto.value,
    quantidade: formQuantidade.value,
  };

  formProduto.value = '';
  formQuantidade.value = '';
  formProduto.focus();

  let res = await fetch("http://localhost:3000/cria", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(objInputs),
  });
  if (res.ok) {
    console.log('Produto Cadastrado!');
    window.location = 'http://localhost:8080/principal';
    /*if (res.status == "401") {
      getUrl("http://localhost/app/login.html");
    }
    */
  }
  throw new Error(`HTTP error! status: ${res.status}`);
    }

    const [alteraDisplay, setAlteraDisplay] = useState(false);
    function mostraFormulario() {

      
      const form = document.querySelector('form');

      let mudaEstado;
      if (alteraDisplay) {
        form.style.display = "none";
        mudaEstado = false;
      } else {
        form.style.display = "block";
        mudaEstado = true;
      }
      setAlteraDisplay(mudaEstado);
    }


    return(
        <section className='crialista width_padrao'>
            <div className='crialista_container'>
                <h1 className='titulolista'
                  onClick={()=> mostraFormulario()}
                >Cadastro de produtos</h1>
                <form>
                    <div className='produto_container'>
                        <label for="produto">Produto</label>
                        <input type="text" className='form_produto' />
                    </div>
                    <div className='quantidade_container'>
                        <label for="quantidade">Quantidade</label>
                        <input type="text" className='form_quantidade' />
                    </div>
                    <button 
                    onClick={(e)=>
                        criaLista()
                    }
                    type='button'>Criar</button>
                </form>
            </div>
        </section>
    );
}