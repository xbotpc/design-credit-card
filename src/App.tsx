import { ChangeEvent, useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import './App.scss';
import CardFront from './components/cardFront/cardFront';
import actions from './state/actions';
import store from './state/store';
import InitialState from './types/initialState';

function App() {
  // const [patternColor, setPatternColor] = useState<string>('#999999');
  const [bgImageSize, setSliderValue] = useState<string>('1');
  const [opacityValue, setOpacityValue] = useState<string>('100');

  // const onPatternColorChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPatternColor(e.target.value)
  // }

  const onSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(e.target.value);
  }

  const onOpacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOpacityValue(e.target.value);
  }

  console.log('store.getState().bgColor', store.getState().bgColor)

  return (
    <Provider store={store}>
      <div className="App">
        <div className="cards">
          <CardFront
            bgImageSize={bgImageSize}
            opacity={opacityValue}
          // patternColor={patternColor}
          />
          {/* <CardBack
            cardBGColor={cardFrontBGColor}
            bgImageSize={bgImageSize}
            opacity={opacityValue}
          /> */}
        </div>
        <input
          type="color"
          onChange={(e) => {
            store.dispatch({
              type: actions.CHANGE_BG_COLOR,
              payload: e.target.value,
            })
          }} />
        <input type="range" name="" id="" value={bgImageSize} onChange={onSizeChange} min="1" max="100" />
        <input type="range" name="" id="" value={opacityValue} onChange={onOpacityChange} min="10" max="100" />
        {/* <input type="color" onChange={onPatternColorChange} value={patternColor} /> */}
      </div>
    </Provider>
  );
}

export default App;
