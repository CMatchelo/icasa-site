import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config.js"
import { collection, doc, getDocs, Timestamp } from "firebase/firestore"
import './styles.css'

function Cearense2022() {

    const teamsCollectionRef = collection(db, "cearense2022");
    const [teamsArr, setTeams] = useState([]);
    const realTeams = [];
    useEffect(() => {
        const getTeams = async () => {
            const data = await getDocs(teamsCollectionRef);
            setTeams(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getTeams();
    }, [])

    teamsArr.forEach(function(team) {
        realTeams[team.pos-1] = team;
    });
    return (
        <div className="champs">
            <div className="champTable">
                <div className="topTable">
                    <span className="teamName">Time</span>
                    <span className="stat">P</span>
                    <span className="stat">V</span>
                    <span className="stat">E</span>
                    <span className="stat">D</span>
                    <span className="stat">GP</span>
                    <span className="stat">GC</span>
                </div>
                {realTeams.map((team) => {
                    return (
                        <div className="bodyTable">
                            <span className="teamName">{team.team}</span>
                            <span className="stat">{team.points}</span>
                            <span className="stat">{team.wins}</span>
                            <span className="stat">{team.draws}</span>
                            <span className="stat">{team.losts}</span>
                            <span className="stat">{team.gp}</span>
                            <span className="stat">{team.ga}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Cearense2022;