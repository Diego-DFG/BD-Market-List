import React from 'react';

import './navbar.css';

import img_00 from '../../../../img/img_00.jpeg';

export default function Navbar() {

    function recarregaPagina() {
        window.location = "http://localhost:8080/principal";
    }

    function sair() {

        fetch("http://localhost:3000/logout", {
            method: "GET",
            credentials: "include",
        });

        window.location = "http://localhost:8080";

    }

    return(
        <section className='navbar'>
            <header>
                <nav>
                    <div>
                        <img 
                            onClick={()=> recarregaPagina()}
                            src={img_00} />
                    </div>
                    <h1>BD Market List</h1>
                </nav>
                <div className='btn btn-sair'>
                    <button
                        type='button'
                        onClick={()=> sair()}
                    >
                        Sair
                    </button>
                </div>
            </header>
        </section>
    );
}