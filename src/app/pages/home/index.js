import React, { useState } from 'react';
import CriarLista from './criarlista';

import pao_de_queijo from '../../../../img/pao_de_queijo.jpeg';
import creme_dental from '../../../../img/creme_dental.jpeg';
import leite_desnatado from '../../../../img/leite_desnatado.jpeg';
import cafe from '../../../../img/cafe.jpeg';
import filtro_papel from '../../../../img/filtro_papel.jpeg';
import feijao from '../../../../img/feijao.jpeg';
import arroz from '../../../../img/arroz.jpeg';


import "./global.css";
import ListaDeCompras from './listadecompras';
import Navbar from './navbar';

export default function Home() {

    const arrayDados = [];
    const [nomeData, setNomeData] = useState('');
    const [nomeProduto, setNomeProduto] = useState('');
    const [nomeQuantidade, setNomeQuantidade] = useState('');

    const [alteraDisplay, setAlteraDisplay] = useState(false);


   

    function mostraFormulario() {

      
      const listadecompras = document.querySelector('.listadecompras_container');

      let mudaEstado;
      if (alteraDisplay) {
        listadecompras.style.display = "none";
        mudaEstado = false;

        window.location = 'http://localhost:8080/principal';

      } else {
        listadecompras.style.display = "block";
        mudaEstado = true;
      }
      setAlteraDisplay(mudaEstado);
      retornarItens();
    }

    

    function retornarItens() {

        fetch('http://localhost:3000/', {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
            credentials: "include"
        })
        .then(res => {
            if(res.ok) return res.json();
            return console.log(res);
        })
        .then(dados => {

                if(dados.length <=0) {
                    dados.map((dados)=> {
                        arrayDados.push(dados);
                    })
                } else {
                    dados.map((dado)=> {
                        let duplicidade = arrayDados.some((valor)=> {
                            return dado.id == valor.id;
                        });

                        if(!duplicidade) {
                            arrayDados.push(dado);
                        }
                    });
                }

                arrayDados.forEach((dado)=> {

                    const tabela_conteudo_div = document.querySelector('.tabela_conteudo-div');
       
            
                    let tabela_produtos = document.createElement('div');
 
                     let dataModificada = dado.dataCriacao;
 
                     let arrayAno = [dataModificada[0]+dataModificada[1]+dataModificada[2]+dataModificada[3]];
                     let arrayMes = [dataModificada[5]+dataModificada[6]];
                     let arrayDia = [dataModificada[8]+dataModificada[9]];
 
                     let novaData = arrayDia.concat(arrayMes.concat(arrayAno));
 
                     let dataFormatada = novaData.join('/');

                     const arrayImg = [];

                     if(dado.produto == 'Pão de queijo') {
                        arrayImg.push(pao_de_queijo);
                     } else if(dado.produto == 'Creme dental') {
                         arrayImg.push(creme_dental);
                     } else if(dado.produto == 'Leite desnatado') {
                        arrayImg.push(leite_desnatado);
                    } else if(dado.produto == 'Café') {
                        arrayImg.push(cafe);
                    } else if(dado.produto == 'Filtro de papel') {
                        arrayImg.push(filtro_papel);
                    } else if(dado.produto == 'Feijão') {
                        arrayImg.push(feijao);
                    } else if(dado.produto == 'Arroz') {
                        arrayImg.push(arroz);
                    }
 
                     let renderTabela = `
                     <div class=linha_tabela>
                        <div>
                            <img class="arrayImgRender" src="${arrayImg[0]}" />
                        </div>   
                         <div>${dataFormatada}</div>
                         <div>${dado.produto}</div>
                         <div>${dado.quantidade}</div>
                         <div class="div_btn">
                             <button id="${dado.id}" class="btn btn-deletar">Deletar</button>
                         </div>
                     </div>
                     `;
 
                     tabela_produtos.innerHTML = renderTabela;
 
                     tabela_conteudo_div.appendChild(tabela_produtos);

                })

        });
    }

    
    return(
        <section className='home'>
            <Navbar/>
            <CriarLista />
            <ListaDeCompras
                mostraFormulario={mostraFormulario}
            />
        </section>
    );
}