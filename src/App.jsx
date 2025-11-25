import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import imageMillenium from './assets/imageMillenium.jpeg'
import imageDeathStar from './assets/imageDeathStar.jpeg'
import './App.css'

const SpaceShips = [
  {
    name: "Millenium Falcon",
    img: imageMillenium,
    URL: "https://en.wikipedia.org/wiki/Millennium_Falcon",
    desc: "Nave do Boba Fett"
  },
  {
    name: "Death Star",
    img: imageDeathStar,
    URL: "https://en.wikipedia.org/wiki/Death_Star",
    desc: "Estrela da morte de Darth Vader",
  }
];
function App() {
  const [count, setCount] = useState(0)

  function addOnCount() {
     if (count == SpaceShips.lenght-1) {
      return;
    }
    return setCount(count + 1);
  }
  function removeCount(){
    if(count == 0){
      return;
    }
    return setCount(count - 1);
  }
  return (
      <div>
        <h2> Página {count + 1}</h2>
        <h1>{SpaceShips[count].name}</h1>
        <a href={SpaceShips[count].URL}>
          <img src={SpaceShips[count].img} alt={SpaceShips[count].desc} />
        </a>
        <br></br>
        <h2>{SpaceShips[count].desc}</h2>
        
        <button onClick={removeCount}>Back</button>
        <button onClick={addOnCount}>Next</button>
      </div>
  );
}

export default App
