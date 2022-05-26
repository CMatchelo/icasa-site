import React from "react";
import './styles.css'
import escudo from '../../img/escudo2.png';

function MatchCard(match) {
    return (
        <div className="matchCard">
            <div className="occasionField">
                <span>{match.champ} - {match.round}</span>
            </div>
            <div className="matchField">
                <div className="resultField">
                    <div className="badgeField">
                        <img src={escudo} alt="star" className="homeBadge" />
                        <span> {match.resultH}  </span>
                    </div>
                    <div className="badgeField">
                        <img src={match.badge} alt="star" className="homeBadge" />
                        <span> {match.resultA} </span>
                    </div>
                </div>
                <div className="dateField">
                    <span> {match.date}  </span>
                    <span> {match.hour}  </span>
                </div>

            </div>
            <div className="localField">
                <span>{match.local} - {match.stadium}</span>
            </div>
        </div>
    )
}

export default MatchCard;