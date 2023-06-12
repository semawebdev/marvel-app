import { useEffect, useState } from 'react';
import './App.css';
import { fetchHeroesData } from './fetchHeroesData';

function App() {
  const [heroes, setHeroes] = useState([])

  useEffect(()=>{
    fetchHeroesData().then()
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
