import React, { useState, useEffect } from "react";
import escudo from '../../img/escudo2.png';
import Match from "../Match/match";
import { db } from "../../firebase-config.js"
import { collection, doc, getDocs } from "firebase/firestore"
import './styles.css'

function NextMatch() {

    const matchsCollectionRef = collection(db, "matchs");
    const [matchsArr, setMatchs] = useState([]);

    useEffect(() => {
        const getMatchs = async () => {
            const data = await getDocs(matchsCollectionRef);
            setMatchs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getMatchs();
    }, [])

    const match = Match(
        'Juazeiro do Norte',
        'America-RN',
        '28/05/2022',
        '17h',
        '-',
        '-',
        'https://s.glbimg.com/es/sde/f/organizacoes/2012/01/12/sousa_65.png',
        'Romeirão',
        'Campeonato Brasileiro Série D 2022',
        'Rodada 6',
    )

    return (
        <div className="nextGame">
            <div className="occasionInfo">
                <div className="title">
                    <span>Próximo Jogo</span>
                </div>
            </div>
            <div className="teamsInfo">
                <div className="champ">
                    <span className="champSpan">{match.champ}</span>
                </div>
                <img src={escudo} alt="star" className="homeBadge" />
                <img src={match.badge} />
            </div>
            <div className="matchInfo">
                <span> {match.date} - {match.hour} </span>
                <br />
                <span>{match.stadium} - {match.local}</span>
            </div>

        </div>
    )
}

export default NextMatch;