import { useState } from 'react';
import './App.css';
import Parade from './Parade';
import Sign from './Sign';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [snailSize, setSnailSize] = useState(1);
  const [eagleSize, setEagleSize] = useState(1);
  const [animalArray, setAnimalArray] = useState(['rat', 'hippo', 'penguin']);

  const snailStyle = { fontSize: `${snailSize}rem` };
  const eagleStyle = { fontSize: `${eagleSize}rem` };

  function handleAddRat() {
    setAnimalArray([...animalArray, 'rat']);
  }
  function handleAddHippo() {
    setAnimalArray([...animalArray, 'hippo']);
  }
  function handleAddPenguin() {
    setAnimalArray([...animalArray, 'penguin']);
  }
  function handleAddRooster() {
    setAnimalArray([...animalArray, 'rooster']);
  }
  function handleAddHedgehog() {
    setAnimalArray([...animalArray, 'hedgehog']);
  }
  function handleAddBadger() {
    setAnimalArray([...animalArray, 'badger']);
  }
  function euthenizeAnimal() {
    setAnimalArray(animalArray.slice(0, animalArray.length - 1));
  }

  return (
    <div className="App">
      <div className='fight'>
        <div className='fighter'>
          <p style={snailStyle}>🐌</p>
          <div className='buttons'>
            <button onClick={() => setSnailSize(snailSize + 1)}>The snail is... growing...?</button>
            <button onClick={() => setEagleSize(eagleSize - 1)}>The snail attacked the eagle!</button>
          </div>
        </div>
        <div className='fighter'>
          <p style={eagleStyle}>🦅</p>
          <div className='buttons'>
            <button onClick={() => setEagleSize(eagleSize + 1)}>The eagle is growing!</button>
            <button onClick={() => setSnailSize(snailSize - 1)}>The eagle attacked the snail!</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
