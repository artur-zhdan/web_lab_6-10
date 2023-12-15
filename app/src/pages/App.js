import Animal from '../components/Animal';
import Header from '../components/Header';
import ExpenseCounter from '../components/ExpenseCounter';
import '../styles/App.css';
import SortButton from '../components/SortButton';
import Footer from '../components/Footer';

import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {

  const [animalIndex, setAnimalIndex] = useState(0);

  const [animals, setAnimals] = useState([]);
  const [maxAmount, setMaxAmount] = useState(3);


  function loadMore() {
    setMaxAmount(maxAmount + 3);
  }
  function showLess() {
    setMaxAmount(3);
  }


  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3047/animals?filter1=all&filter2=all&filter3=');
      const response_json = await response.json();

      console.log(response_json);

      setAnimals(response_json.animals);
    })()
  });

  return (
    <div className="App">
      <Header />

      <div class="container">
        <div class="animal-one">
          {animals.length > 0 && Animal({ animal: animals[animalIndex], showMini: true, showRow: true })}
        </div>
        <div class="animal-grid">
          {animals.length > 0 && animals.map((animal, index) => {
            if (index > maxAmount - 1) {
              return;
            }
            return <div style={{ width: "30%" }} onClick={() => { setAnimalIndex(index) }}>{Animal({ animal, showMini: true })}</div>
          })}
        </div>
        {animals.length > maxAmount ? <button class="load-more" onClick={loadMore}>Load more</button> : <button class="load-more" onClick={showLess}>Show less</button>}
      </div>

      <Footer />

    </div>
  );
}

export default App;
