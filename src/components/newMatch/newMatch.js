import { useState, useEffect } from "react";
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

function Newmatch() {
    const matchCollectionRef = collection(db, "matchs");
    const matchCollectionRef2 = collection(db, "calendar");
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

    return (
        <div>
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