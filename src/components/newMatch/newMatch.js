import { useState, useEffect } from "react";
import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

function Newmatch() {
    const matchCollectionRef = collection(db, "matchs");
    const [newAdv, setNewAdv] = useState("")
    const [newBadge, setNewBadge] = useState("");
    const [newChamp, setNewChamp] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newHour, setNewHour] = useState("");

    return (
        <div>
            New match
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