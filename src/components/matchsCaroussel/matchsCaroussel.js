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
  const test = [];
  const matchsCollectionRef = collection(db, "matchs");
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 4 },
  };

  useEffect(() => {
    const getMatchs = async () => {
      const data = await getDocs(matchsCollectionRef);
      setMatchs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getMatchs();
  }, [])

  const matchOne = Match(
    'Juazeiro do Norte',
    'America-RN',
    '28/05/2022',
    '17h',
    '-',
    '-',
    'https://s.glbimg.com/es/sde/f/organizacoes/2012/01/12/sousa_65.png',
    'Romeirão',
    'Série D' ,
    'Rodada 7',
  )
  const matchTwo = Match(
    'Recife',
    'Retro',
    '21/05/2022',
    '16h',
    '0',
    '3',
    'https://s.glbimg.com/es/sde/f/organizacoes/2019/07/23/retro_65.png',
    'Arena Pernambuco',
    'Série D' ,
    'Rodada 6',
  )
  /*
  test.push(<MatchCard {...matchOne} />);
  var qtde = 9;
  for (var i = 1; i <= qtde; i++) {
    test.push(<MatchCard {...matchTwo} />);
  }
*/
matchsArr.forEach(function(number) {
  const match = number;
  test.push(<MatchCard {...match} />);
});
  test.push(<MatchCard {...matchOne} />);
  test.push(<MatchCard {...matchTwo} />);
  test.push(<MatchCard {...matchTwo} />);
  test.push(<MatchCard {...matchTwo} />);
  test.push(<MatchCard {...matchTwo} />);
  test.push(<MatchCard {...matchTwo} />);

  return (
    <div>
        <AliceCarousel
          mouseTracking
          items={test}
          responsive={responsive}
          disableDotsControls={true}
          disableButtonsControls={true}
          activeIndex={2}
        />
    </div>
  )
}

export default MatchsCaroussel;