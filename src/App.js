import './App.css';
import NameRow from './NameRow.js';
import AppHeader from './AppHeader.js';
import React, { useState } from 'react';
import snowflakes from './images/snowflakes.png'
import tree from './images/tree.png'

const ENGLISH = 'Merry Christmas'
const ROMANIAN = 'Crăciun fericit';


const DRAWN_NAMES = {
  Didi: 'Paul',
  Babu: 'Anca',
  Anca: 'Didi',
  Paul: 'Babu',
  Aliana: 'Julie',
  Melanie: 'Aliana',
  Julie: 'Melanie',
}

function App() {
  const [selectedName, setSelectedName] = useState(null);
  const [confirmReveal, setConfirmReveal] = useState(null);
  const [textLanguage, setTextLanguage] = useState(ENGLISH);

  const onClickName = (name, language) => {
    setSelectedName(name);
    setTextLanguage(language);
  }

  const backButton = (
    <button 
      className="BackButton" 
      onClick={() => {
        setConfirmReveal(false);
        setSelectedName(null);
      }}
    >
      Go Back
    </button>
  )

  const revealButton = (
    <button className="RevealButton" onClick={() => setConfirmReveal(true)}>Draw a Name</button>
  )

  if (selectedName && confirmReveal) {
    return (
      <div className="App">
        <img className='BackgroundImage' src={snowflakes} />
        <AppHeader />
        <p className='MerryChristmasText'>{textLanguage}, {selectedName}!</p>
        <p className='ShoppingText'>You are shopping for</p>
        <p className='DrawnNameText'>{DRAWN_NAMES[selectedName]}</p>
        {backButton}
      </div>
    )
  } else if (selectedName) {
    return (
      <div className="App">
        <img className='BackgroundImage' src={snowflakes} />
        <AppHeader />
        <p className='MerryChristmasText'>{textLanguage}, {selectedName}!</p>
        {revealButton}
        <p className='NotText'>Not {selectedName}?</p>
        {backButton}
      </div>
    )
  } else {
    return (
      <div className="App">
        <img className='BackgroundImage' src={snowflakes} />
        <AppHeader />
        <img className='TreeImage' src={tree} />
        <p className='YourNameText'>What is Your Name?</p>
        <NameRow name="Didi" onClick={() => onClickName('Didi', ROMANIAN)}/>
        <NameRow name="Babu" onClick={() => onClickName('Babu', ROMANIAN)}/>
        <NameRow name="Anca" onClick={() => onClickName('Anca', ENGLISH)}/>
        <NameRow name="Paul" onClick={() => onClickName('Paul', ENGLISH)}/>
        <NameRow name="Aliana" onClick={() => onClickName('Aliana', ENGLISH)}/>
        <NameRow name="Melanie" onClick={() => onClickName('Melanie', ENGLISH)}/>
        <NameRow name="Julie" onClick={() => onClickName('Julie', ENGLISH)}/>
      </div>
    );
  }
}

export default App;
