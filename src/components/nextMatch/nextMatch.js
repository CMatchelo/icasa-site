import React, { useState, useEffect } from "react";
import escudo from '../../img/escudo2.png';
import Match from "../Match/match";
import { db } from "../../firebase-config.js"
import { collection, doc, getDocs } from "firebase/firestore"
import './styles.css'

function NextMatch() {

    const matchsCollectionRef = collection(db, "matchs");
    const [matchsArr, setMatchs] = useState([]);
    var nextMatch;

    useEffect(() => {
        const getMatchs = async () => {
            const data = await getDocs(matchsCollectionRef);
            setMatchs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getMatchs();
    }, [])
    matchsArr.forEach(function (match) {
        if (match.nextMatch === true) {
            nextMatch = match;
        }
    })
    if (nextMatch) {
        return (
            <div className="nextGame">
                <div className="occasionInfo">
                    <div className="title">
                        <span>Próximo Jogo</span>
                    </div>
                </div>

                <div className="teamsInfo">

                    <div className="champ">
                        <span className="champSpan">{nextMatch.champ} - {nextMatch.round}</span>
                    </div>
                    <div className="teamsBadge">
                        <img src={escudo} alt="star" className="nextBadge" />
                        <img src={nextMatch.badge} className="nextAdvBadge" />
                    </div>
                </div>
                <div className="matchInfo">
                    <span> {nextMatch.date} - {nextMatch.hour} </span>
                    <br />
                    <span>{nextMatch.stadium} - {nextMatch.local}</span>
                </div>
            </div>
        )
    }
}

export default NextMatch;