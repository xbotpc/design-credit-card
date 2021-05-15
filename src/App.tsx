import { Provider } from 'react-redux';
import './App.scss';
import CardBack from './components/cardBack/cardBack';
import CardFront from './components/cardFront/cardFront';
import Menu from './components/menu/menu';
import store from './state/store';
import HexPattern from './images/hex-pattern.png';
import LineHexPattern from './images/line-hex-pattern.png';
import LineSwastikaPattern from './images/line-swastika-pattern.png';
import SquareLinePattern from './images/square-line-pattern.png';
import TriHexPattern from './images/tri-hex-pattern.png';

function App() {
  const images = [HexPattern, LineHexPattern,
    LineSwastikaPattern,
    SquareLinePattern,
    TriHexPattern];

  return (
    <Provider store={store}>
      <div className="App">
        <div className="cards">
          <div className="container">
            <CardFront />
            <CardBack />
          </div>
        </div>
        <Menu patterns={images} />
      </div>
    </Provider>
  );
}

export default App;
