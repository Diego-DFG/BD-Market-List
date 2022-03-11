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

  let res = await fetch("https://git.heroku.com/bdmarketlist.git/cria", {
    method: "PUT",
    headers: {
      "origin": "https://diego-dfg.github.io/BD-Market-List/#/",
      "Access-Control-Request-Headers": "Content-Type",
      "Access-Control-Request-Method": "PUT",

    },
    credentials: "include",
    body: JSON.stringify(objInputs),
  });
  if (res.ok) {
    window.location.reload();
  } else {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
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
                        <label>Produto</label>
                        <input type="text" className='form_produto' />
                    </div>
                    <div className='quantidade_container'>
                        <label>Quantidade</label>
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