import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config.js"
import { colection, collection, doc, getDoc, getDocs } from "firebase/firestore"
import "./styles.css";


function Calendar() {
    const [matchsArr, setMatchs] = useState([])
    const matchsCollectionRef = collection(db, "calendar")
    const realCal = [];
    useEffect(() => {
        const getMatchs = async () => {
            const data = await getDocs(matchsCollectionRef);
            setMatchs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getMatchs();
    }, [])

    matchsArr.forEach(function(team) {
        realCal[team.pos-1] = team;
    });

    return (
        <div className="calendar">
            <span className="calendarTitle"> Calendário de jogos </span>
            <div className="calendarTable">
                {realCal.map((match) => {
                    return (
                        <div className="calendarMatch">
                            <div className="calendarInfos">
                                <div>
                                    <span className="date">{match.date}</span> 
                                    <span className="stadium">{match.stadium}</span>
                                </div>
                                <div>
                                    <span className="occasion">{match.occasion}</span>
                                </div>
                            </div>
                            <div className="calendarTeams">
                                <img src={match.home}></img>
                                <span className="result">
                                {match.homeres} x {match.awayres}
                                </span>
                                <img src={match.away}></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Calendar