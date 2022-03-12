import React, { useState } from 'react';

import './listadecompras.css';

export default function ListaDeCompras({mostraFormulario}) {

    window.onload = function() {
        mostraFormulario();
    }

      async function deletaItens(event) {
          
        console.log(event.target.id);

        let res = await fetch("https://git.heroku.com/bdmarketlist.git/apaga", {
            method: "DELETE",
            headers: {
            "Origin": "https://diego-dfg.github.io/BD-Market-List/#/",
            "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify({id: event.target.id}),
        });
        if (res.ok) {
            window.location.reload();
          } else {
            throw new Error(`HTTP error! status: ${res.status}`);
          }

          

    }

    return(
        <section className='listadecompras width_padrao'>
        <h1 
            className='titulolista'
            onClick={()=> mostraFormulario() }
        >Lista de compras</h1>
        <div className='listadecompras_container'>
            <div
            className='body'>
                <div className='tabela_cabecalho'>
                    <div>DATA</div>
                    <div>PRODUTO</div>
                    <div>QUANTIDADE</div>
                </div>
                <div className='tabela_conteudo'>
                    <div 
                    onClick={(e)=> deletaItens(e)}
                    className='tabela_conteudo-div'>

                    </div>
                </div> 
            </div>
        </div>
    </section>
    );
}
