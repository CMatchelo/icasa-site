import './App.css';
import Menu from './components/menu/menu';
import MatchsCaroussel from './components/matchsCaroussel/matchsCaroussel';
import NextMatch from './components/nextMatch/nextMatch';
import Calendar from './components/calendar/calendar';
import BrasileiroSerieD from './components/brasileiroSerieD/champ';
import Campeonatos from './components/campeonatos/campeonatos';


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
          <BrasileiroSerieD />
        </div>
      </div>
      <div id='squadScreen'>
        <div className='pageOff'>
          EM CONSTRUÇÃO
        </div>
      </div>
      <div id='champsScreen'>
        <Campeonatos />
      </div>
      <div id='calendarScreen'>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
