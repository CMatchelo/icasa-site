import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import MatchsCaroussel from './components/matchsCaroussel/matchsCaroussel';

function App() {
  return (
    <div className="App">
      <Menu/>
      <MatchsCaroussel />
    </div>
  );
}

export default App;
