import './App.css';
import Menu from './components/menu/menu';
import MatchsCaroussel from './components/matchsCaroussel/matchsCaroussel';
import NextMatch from './components/nextMatch/nextMatch';
import Champ from './components/champ/champ';
import Newmatch from './components/newMatch/newMatch';
import Calendar from './components/calendar/calendar';


function App() {
  return (
    <div className="App">
      <Menu />
      <MatchsCaroussel />
      <div className='matchAndChamp' id='matchAndChamp'>
        <div className='temp'>
          <NextMatch />
        </div>
        <div className='temp'>
          <Champ />
        </div>
      </div>
      <div id='squadScreen'>
        squad
      </div>
      <div id='champsScreen'>
        champs
      </div>
      <div id='calendarScreen'>
        <Calendar />
      </div>
      <div id='newMatch'>
        <Newmatch />
      </div>
    </div>
  );
}

export default App;
