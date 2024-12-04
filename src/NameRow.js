import React from 'react';
import didi_1 from './images/didi_1.png';
import babu_1 from './images/babu_1.png';
import anca_1 from './images/anca_1.png';
import paul_1 from './images/paul_1.png';
import aliana_1 from './images/aliana_1.png';
import melanie_1 from './images/melanie_1.png';
import julie_1 from './images/julie_1.png';


const nameToImage = {
  Didi: didi_1,
  Babu: babu_1,
  Anca: anca_1,
  Paul: paul_1,
  Aliana: aliana_1,
  Melanie: melanie_1,
  Julie: julie_1,
}

const NameRow = ({name, onClick}) => {
  return (
        <button className='NameRow' onClick={onClick}>
          <img className='NameImage' src={nameToImage[name]} />
          {name}
          <img className='NameImage RightImage' src={nameToImage[name]} />
        </button>
  );
};

export default NameRow;
