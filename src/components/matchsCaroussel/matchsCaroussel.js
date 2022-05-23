import React, { useState, useEffect } from "react";
import './styles.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MatchCard from "../matchCard/matchCard";
import Match from "../Match/match";
import { db } from "../../firebase-config.js"
import { collection, doc, getDocs } from "firebase/firestore"

function MatchsCaroussel() {
  const [matchsArr, setMatchs] = useState([]);
  //var matchsArr = [];
  const matchsCollectionRef = collection(db, "matchs");
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 4 },
  };

  useEffect (() => {
    const getMatchs = async () => {
      const data = await getDocs(matchsCollectionRef);
      setMatchs(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getMatchs();
  }, [])

  const matchOne = Match(
    'Juazeiro do Norte',
    'Sousa',
    '15/05/2022',
    '17h',
    '2',
    '2',
    'https://s.glbimg.com/es/sde/f/organizacoes/2012/01/12/sousa_65.png',
    'Romeirão',
    'Série D - Rodada 5',
  )
  const matchTwo = Match(
    'Recife',
    'Retro',
    '21/05/2022',
    '16h',
    '-',
    '-',
    'https://s.glbimg.com/es/sde/f/organizacoes/2019/07/23/retro_65.png',
    'Arena Pernambuco',
    'Série D - Rodada 6',
  )
  /*
  matchsArr.push(<MatchCard {...matchOne} />);
  var qtde = 9;
  for (var i = 1; i <= qtde; i++) {
    matchsArr.push(<MatchCard {...matchTwo} />);
  }*/
  matchsArr.push(<MatchCard {...matchOne} />);
  matchsArr.push(<MatchCard {...matchTwo} />);
  console.log(matchsArr)
  return (
    <div>
    {matchsArr.map((match) => (
      <AliceCarousel
        mouseTracking
        items={alert(match.local)}
        responsive={responsive}
        disableDotsControls={true}
        disableButtonsControls={true}
      />
    ))}
    </div>
  )
}

export default MatchsCaroussel;