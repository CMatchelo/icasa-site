import React from 'react';
import escudo from '../../img/escudo.png';
import './styles.css'
import './menuStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu() {


    /*const updateGame = async (id, rate) => {
        const userDoc = doc(db, "games", id)
        const newFields = { rate: rate + 1 }
        await updateDoc(userDoc, newFields)
    }*/


    return (
        <div className="menuArea">
            <img src={escudo} alt="star" className="escudo" />
            <div className='upperMenu'>
                <a className='linkTitle' target="_blank" href='https://www.youtube.com/channel/UCSAz7UawY-3tQ-lAKX7W-Mg'>Icasa TV <FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                <span className='menuTitle'>O que importa é te amar</span>
            </div>
            <div className='bottomMenu'>
                <nav>
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Elenco</a></li>
                        <li><a href="#">Campeonatos</a>
                            <ul>
                                <li><a href="#">Cearense 2022</a></li>
                                <li><a href="#">Copa do Brasil 2022</a></li>
                                <li><a href="#">Série D 2022</a></li>
                            </ul>
                        </li>
                        <li><a href="#">História</a></li>
                        <li><a href="#">Arena Romeirão</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Menu;