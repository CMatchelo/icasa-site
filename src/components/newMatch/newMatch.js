import { useState, useEffect } from "react";
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

function Newmatch() {
    const matchCollectionRef = collection(db, "matchs");
    const matchCollectionRef2 = collection(db, "calendar");
    const teamCearaCollection = collection(db, "cearense2022");
    const [newAdv, setNewAdv] = useState("")
    const [newBadge, setNewBadge] = useState("");
    const [newChamp, setNewChamp] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newHour, setNewHour] = useState("");
    const [newLocal, setNewLocal] = useState("");
    const [newPos, setNewPos] = useState("");
    const [newResultA, setNewResultA] = useState("");
    const [newResultH, setNewResultH] = useState("");
    const [newRound, setNewRound] = useState("");
    const [newStadium, setNewStadium] = useState("");
    const [newHome, setNewHome] = useState("");
    const [newAwayBadge, setNewAwayBadge] = useState("");

    const [newTeam, setNewTeam] = useState("");
    const [newPoints, setNewPoints] = useState("");
    const [newgoalP, setNewgoalP] = useState("");
    const [newgoalA, setNewgoalA] = useState("");
    const [newWins, setNewWins] = useState("");
    const [newDraws, setNewDraws] = useState("");
    const [newLosts, setNewLosts] = useState("");
    const [newPosCeara, setNewPosCeara] = useState("");

    const createMatch = async () => {
        await addDoc(matchCollectionRef, { adv: newAdv, badge: newBadge, champ: newChamp, date: newDate, hour: newHour, local: newLocal, pos: Number(newPos), resultA: newResultA, resultH: newResultH, round: newRound, stadium: newStadium });
    }

    const createMatchCalendar = async () => {
        await addDoc(matchCollectionRef2,
            {
                adv: newAdv,
                awayres: newResultA,
                away: newAwayBadge,
                date: newDate,
                home: newHome,
                homeres: newResultH,
                occasion: newChamp,
                pos: Number(newPos),
                stadium: newStadium
            });
    }
    
    const createTeamCeara = async () => {
        await addDoc(teamCearaCollection,
            {
                team: newTeam,
                wins: Number(newWins),
                draws: Number(newDraws),
                losts: Number(newLosts),
                gp: Number(newgoalP),
                ga: Number(newgoalA),
                points: Number(newPoints),
                pos: Number(newPosCeara)
            });
    }

    return (
        <div>
            <div>
                Adiciona time cearense
                <input
                    placeholder='Time'
                    onChange={(event) => {
                        setNewTeam(event.target.value)
                    }}
                />
                <input
                    placeholder='Vitorias'
                    onChange={(event) => {
                        setNewWins(event.target.value)
                    }}
                />
                <input
                    placeholder='Emp'
                    onChange={(event) => {
                        setNewDraws(event.target.value)
                    }}
                />
                <input
                    placeholder='Derrotas'
                    onChange={(event) => {
                        setNewLosts(event.target.value)
                    }}
                />
                <input
                    placeholder='Gols Pro'
                    onChange={(event) => {
                        setNewgoalP(event.target.value)
                    }}
                />
                <input
                    placeholder='Gols Contra'
                    onChange={(event) => {
                        setNewgoalA(event.target.value)
                    }}
                />
                <input
                    placeholder='Pontos'
                    onChange={(event) => {
                        setNewPoints(event.target.value)
                    }}
                />
                <input
                    placeholder='Pos'
                    onChange={(event) => {
                        setNewPosCeara(event.target.value)
                    }}
                />
                <button className="gameRegisterBtn" onClick={createTeamCeara}>Nova partida</button>
            </div>
            <br/><br/>
            <div>
                New match
                <input
                    placeholder='adv'
                    onChange={(event) => {
                        setNewAdv(event.target.value)
                    }}
                />
                <input
                    placeholder='badge'
                    onChange={(event) => {
                        setNewBadge(event.target.value)
                    }}
                />
                <input
                    placeholder='champ'
                    onChange={(event) => {
                        setNewChamp(event.target.value)
                    }}
                />
                <input
                    placeholder='date'
                    onChange={(event) => {
                        setNewDate(event.target.value)
                    }}
                />
                <input
                    placeholder='Hour'
                    onChange={(event) => {
                        setNewHour(event.target.value)
                    }}
                />
                <input
                    placeholder='local'
                    onChange={(event) => {
                        setNewLocal(event.target.value)
                    }}
                />
                <input
                    placeholder='pos'
                    onChange={(event) => {
                        setNewPos(event.target.value)
                    }}
                />
                <input
                    placeholder='result Adv'
                    onChange={(event) => {
                        setNewResultA(event.target.value)
                    }}
                />
                <input
                    placeholder='result Ica'
                    onChange={(event) => {
                        setNewResultH(event.target.value)
                    }}
                />
                <input
                    placeholder='round'
                    onChange={(event) => {
                        setNewRound(event.target.value)
                    }}
                />
                <input
                    placeholder='stadium'
                    onChange={(event) => {
                        setNewStadium(event.target.value)
                    }}
                />
                <button className="gameRegisterBtn" onClick={createMatch}>Nova partida</button>
            </div>
            <br/><br/>
            <div>
                ADICIONAR AO CALENDARIO
                <input
                    placeholder='adv'
                    onChange={(event) => {
                        setNewAdv(event.target.value)
                    }}
                />
                <input
                    placeholder='homebadge'
                    onChange={(event) => {
                        setNewHome(event.target.value)
                    }}
                />
                <input
                    placeholder='awaybadge'
                    onChange={(event) => {
                        setNewAwayBadge(event.target.value)
                    }}
                />
                <input
                    placeholder='champ'
                    onChange={(event) => {
                        setNewChamp(event.target.value)
                    }}
                />
                <input
                    placeholder='date'
                    onChange={(event) => {
                        setNewDate(event.target.value)
                    }}
                />
                <input
                    placeholder='pos'
                    onChange={(event) => {
                        setNewPos(event.target.value)
                    }}
                />
                <input
                    placeholder='result away'
                    onChange={(event) => {
                        setNewResultA(event.target.value)
                    }}
                />
                <input
                    placeholder='result home'
                    onChange={(event) => {
                        setNewResultH(event.target.value)
                    }}
                />
                <input
                    placeholder='stadium'
                    onChange={(event) => {
                        setNewStadium(event.target.value)
                    }}
                />
                <button className="gameRegisterBtn" onClick={createMatchCalendar}>Nova partida</button>
            </div>
        </div>
    )
}

export default Newmatch;

/*
date
hour
local
pos
resultA
resultH
round
stadium
*/