import { Provider } from 'react-redux';
import './App.scss';
import CardBack from './components/cardBack/cardBack';
import CardFront from './components/cardFront/cardFront';
import Menu from './components/menu/menu';
import store from './state/store';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className="cards">
          <div className="container">
            <CardFront />
            <CardBack />
          </div>
        </div>
        <Menu />
      </div>
    </Provider>
  );
}

export default App;
