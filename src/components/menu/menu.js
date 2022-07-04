import React from 'react';
import escudo from '../../img/escudo.png';
import './styles.css'
import './menuStyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Menu() {

    var currentScreen = "matchAndChamp";
    /*const updateGame = async (id, rate) => {
        const userDoc = doc(db, "games", id)
        const newFields = { rate: rate + 1 }
        await updateDoc(userDoc, newFields)
    }*/
    function changeStyle(newScreen) {
        document.getElementById(currentScreen).style.display = "none";
        document.getElementById(newScreen).style.display = "flex";
        currentScreen = newScreen;
    };

    return (
        <div className="menuArea">
            <img src={escudo} alt="star" className="escudo" />
            <div className='upperMenu'>
                <a className='linkTitle' target="_blank" href='https://www.youtube.com/channel/UCSAz7UawY-3tQ-lAKX7W-Mg'>Icasa TV <FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                <span className='menuTitle'>O que importa é te amar!</span>
            </div>
            <div className='bottomMenu'>
                <nav>
                    <ul class="menu">
                        <li><a href="#" onClick={() => changeStyle("matchAndChamp")}>Home</a></li>
                        <li><a href="#" onClick={() => changeStyle("squadScreen")}>Elenco</a></li>
                        <li><a href="#" onClick={() => changeStyle("champsScreen")}>Campeonatos</a></li>
                        <li><a href="#" onClick={() => changeStyle("calendarScreen")}>Calendário</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

/*
                            <ul>
                                <li><a href="#">Cearense 2022</a></li>
                                <li><a href="#">Copa do Brasil 2022</a></li>
                                <li><a href="#">Série D 2022</a></li>
                            </ul>
*/

export default Menu;