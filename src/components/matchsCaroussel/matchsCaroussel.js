import React from "react";
import './styles.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MatchCard from "../matchCard/matchCard";

function MatchsCaroussel() {
  const responsive = {
    0: { items: 2 },
    568: { items: 4 },
    1024: { items: 4 },
  };

  const Match = (local, adv, date, hour, resultH, resultA, badge, stadium, occasion) => {
    return {
      local: local,
      adv: adv,
      date: date,
      hour: hour,
      resultH: resultH,
      resultA: resultA,
      badge: badge,
      stadium: stadium,
      occasion: occasion,
    }
  }

  const matchOne = Match(
    'Romeirão - Juazeiro do Norte',
    'Sousa',
    '15/05/2022',
    '17h',
    '2',
    '2',
    'https://s.glbimg.com/es/sde/f/organizacoes/2012/01/12/sousa_65.png',
    'https://www.opovo.com.br/_midias/jpg/2022/03/16/818x460/1_whatsapp_image_2022_03_14_at_17_16_08-18326346.jpeg',
    'Série D - Rodada 5',
  )
  const matchTwo = Match(
    'Arena Pernambuco - Recife',
    'Retro',
    '21/05/2022',
    '16h',
    '-',
    '-',
    'https://s.glbimg.com/es/sde/f/organizacoes/2019/07/23/retro_65.png',
    'https://www.opovo.com.br/_midias/jpg/2022/03/16/818x460/1_whatsapp_image_2022_03_14_at_17_16_08-18326346.jpeg',
    'Série D - Rodada 6',
  )

  var matchs = [];
  matchs.push(<MatchCard {...matchOne} />);
  var qtde = 9;
  for (var i = 1; i <= qtde; i++) {
    matchs.push(<MatchCard {...matchTwo} />);
  }
  return (
    <AliceCarousel
      mouseTracking
      items={matchs}
      responsive={responsive}
      disableDotsControls={true}
      disableButtonsControls={true}
    />
  )
}

export default MatchsCaroussel;