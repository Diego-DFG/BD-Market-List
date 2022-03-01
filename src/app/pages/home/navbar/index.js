import React from 'react';

import './navbar.css';

import img_00 from '../../../../../img/img_00.jpeg';

export default function Navbar() {
    return(
        <section className='navbar'>
            <header>
                <nav>
                    <div>
                        <img src={img_00} />
                    </div>
                    <h1>BD Market List</h1>
                </nav>
            </header>
        </section>
    );
}