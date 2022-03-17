import React, { useState } from 'react';
import CriarLista from './criarlista';

import acucar_mascavo from '../../../img/acucar_mascavo.jpeg';
import acucar_refinado from '../../../img/acucar_refinado.jpeg';
import agua_sanitaria from '../../../img/agua_sanitaria.jpeg';
import alho from '../../../img/alho.jpeg';
import alho_poro from '../../../img/alho_poro.jpeg';
import amido_de_milho from '../../../img/amido_de_milho.jpeg';
import arroz from '../../../img/arroz.jpeg';
import assa_facil from '../../../img/assa_facil.jpeg';
import azeite from '../../../img/azeite.jpeg';
import batata_asterix from '../../../img/batata_asterix.jpeg';
import batata_inglesa from '../../../img/batata_inglesa.jpeg';
import berinjela from '../../../img/berinjela.jpeg';
import biscoito_maisena from '../../../img/biscoito_maisena.jpeg';
import biscoito_rosquinha from '../../../img/biscoito_rosquinha.jpeg';
import polvilho from '../../../img/polvilho.jpg';
import cafe from '../../../img/cafe.jpeg';
import carne from '../../../img/carne.jpeg';
import cebola from '../../../img/cebola.jpeg';
import cenoura from '../../../img/cenoura.jpeg';
import coca_cola from '../../../img/coca_cola.jpeg';
import creme_de_leite from '../../../img/creme_de_leite.jpeg';
import pao from '../../../img/pao.jpg';
import preservativo from '../../../img/preservativo.jpg';
import pasta_de_dente from '../../../img/creme_dental.jpeg';
import desinfetante from '../../../img/desinfetante.jpeg';
import detergente from '../../../img/detergente.jpeg';
import esponja from '../../../img/esponja.jpeg';
import farinha_de_trigo from '../../../img/farinha_de_trigo.jpeg';
import filtro_de_papel from '../../../img/filtro_papel.jpeg';
import galao_de_agua from '../../../img/galao.jpeg';
import ice_tea from '../../../img/ice_tea.jpeg';
import leite_desnatado from '../../../img/leite_desnatado.jpeg';
import mate from '../../../img/mate.jpeg';
import manteiga from '../../../img/manteiga.jpg';
import meia from '../../../img/meia.jpg';
import molho_de_tomate from '../../../img/molho_de_tomate.jpeg';
import oleo_de_soja from '../../../img/oleo_de_soja.jpeg';
import ovo from '../../../img/ovo.jpeg';
import pao_australiano from '../../../img/pao_australiano.jpeg';
import pao_forma from '../../../img/pao_de_forma.jpeg';
import pao_de_queijo from '../../../img/pao_de_queijo.jpeg';
import pao_hamburguer from '../../../img/pao_hamburguer.jpeg';
import pao_italiano from '../../../img/pao_italiano.jpeg';
import peito from '../../../img/peito_de_frango.jpeg';
import pizza from '../../../img/pizza.jpeg';
import presunto from '../../../img/presunto.jpeg';
import pringles from '../../../img/pringles.jpeg';
import queijo from '../../../img/queijo.jpeg';
import requeijao from '../../../img/requeijao.jpeg';
import sabao from '../../../img/sabao_em_po.jpeg';
import sabonete from '../../../img/sabonete.jpeg';
import sal from '../../../img/sal.jpeg';
import salsa from '../../../img/salsa.jpeg';
import sorvete from '../../../img/sorvete.jpeg';
import suco from '../../../img/suco.jpeg';



import "./global.css";
import ListaDeCompras from './listadecompras';
import Navbar from './navbar';

export default function Home() {

    const arrayImg = [
        { nome: 'Açúcar mascavo', img: acucar_mascavo },
        { nome: 'Açúcar refinado', img: acucar_refinado },
        { nome: 'Água sanitária', img: agua_sanitaria },
        { nome: 'Alho', img: alho },
        { nome: 'Alho poró', img: alho_poro },
        { nome: 'Amido de milho', img: amido_de_milho },
        { nome: 'Arroz', img: arroz },
        { nome: 'Assa fácil', img: assa_facil },
        { nome: 'Azeite', img: azeite },
        { nome: 'Batata asterix', img: batata_asterix },
        { nome: 'Batata inglesa', img: batata_inglesa },
        { nome: 'Berinjela', img: berinjela },
        { nome: 'Biscoito maisena', img: biscoito_maisena },
        { nome: 'Biscoito rosquinha', img: biscoito_rosquinha },
        { nome: 'Biscoito polvilho', img: polvilho },
        { nome: 'Café', img: cafe },
        { nome: 'Carne', img: carne },
        { nome: 'Cebola', img: cebola },
        { nome: 'Cenoura', img: cenoura },
        { nome: 'Coca cola', img: coca_cola },
        { nome: 'Creme de leite', img: creme_de_leite },
        { nome: 'Preservativo', img: preservativo },
        { nome: 'Pasta de dente', img: pasta_de_dente },
        { nome: 'Desinfetante', img: desinfetante },
        { nome: 'Detergente', img: detergente },
        { nome: 'Esponja', img: esponja },
        { nome: 'Farinha de trigo', img: farinha_de_trigo },
        { nome: 'Filtro de papel', img: filtro_de_papel },
        { nome: 'Galão de água', img: galao_de_agua },
        { nome: 'Ice tea', img: ice_tea },
        { nome: 'Leite desnatado', img: leite_desnatado },
        { nome: 'Mate', img: mate },
        { nome: 'Manteiga', img: manteiga },
        { nome: 'Meia', img: meia },
        { nome: 'Molho de tomate', img: molho_de_tomate },
        { nome: 'Oleo de soja', img: oleo_de_soja },
        { nome: 'Ovo', img: ovo },
        { nome: 'Pão', img: pao },
        { nome: 'Pão Australiano', img: pao_australiano },
        { nome: 'Pão de forma', img: pao_forma },
        { nome: 'Pão de queijo', img: pao_de_queijo },
        { nome: 'Queijo', img: queijo },
        { nome: 'Pão de hamburguer', img: pao_hamburguer },
        { nome: 'Pão italiano', img: pao_italiano },
        { nome: 'Peito de frango', img: peito },
        { nome: 'Pizza', img: pizza },
        { nome: 'Presunto', img: presunto },
        { nome: 'Pringles', img: pringles },
        { nome: 'Requeijão', img: requeijao },
        { nome: 'Sabão', img: sabao },
        { nome: 'Sabonete', img: sabonete },
        { nome: 'Sal', img: sal },
        { nome: 'Salsa', img: salsa },
        { nome: 'Sorvete', img: sorvete },
        { nome: 'Suco', img: suco }
    ]

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

        window.location.reload();

      } else {
        listadecompras.style.display = "block";
        mudaEstado = true;
      }
      setAlteraDisplay(mudaEstado);
      retornarItens();
    }

    

    function retornarItens() {

        

        fetch('https://bdmarketlist.herokuapp.com/', {
            method: "GET",
            credentials: "include",
            headers: {
                "Origin": "https://diego-dfg.github.io",
                "Content-Type": "application/json",
            },
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

                    arrayImg.forEach(img => {
                        if(dado.produto == img.nome) {
                            const tabela_conteudo_div = document.querySelector('.tabela_conteudo-div');
       
            
                            let tabela_produtos = document.createElement('div');
         
                             let dataModificada = dado.dataCriacao;
         
                             let arrayAno = [dataModificada[0]+dataModificada[1]+dataModificada[2]+dataModificada[3]];
                             let arrayMes = [dataModificada[5]+dataModificada[6]];
                             let arrayDia = [dataModificada[8]+dataModificada[9]];
         
                             let novaData = arrayDia.concat(arrayMes.concat(arrayAno));
         
                             let dataFormatada = novaData.join('/');
         
                             let renderTabela = `
                             <div class=linha_tabela>
                                <div>
                                    <img class="arrayImgRender" src="${img.img}" />
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

                        }
                    });

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