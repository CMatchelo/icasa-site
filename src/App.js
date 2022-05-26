import './App.css';
import Menu from './components/menu/menu';
import MatchsCaroussel from './components/matchsCaroussel/matchsCaroussel';
import NextMatch from './components/nextMatch/nextMatch';
import Champ from './components/champ/champ';


function App() {
  return (
    <div className="App">
      <Menu />
      <MatchsCaroussel />
      <div className='matchAndChamp'>
        <div className='temp'>
          <NextMatch />
        </div>
        <div className='temp'>
          <Champ />
        </div>
      </div>
    </div>
  );
}

export default App;
