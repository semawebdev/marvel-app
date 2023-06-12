import { useEffect, useState } from 'react';
import './App.css';
import { fetchHeroesData } from './fetchHeroesData';

const features = {
  name: "Name",
  story: "Story",
}

const getFeature = (hero, feature) => {
  switch (feature) {
    case features.name:
      return hero.name;

    case features.story:
      return hero.stories.items.map((story) => story.name).join(", ");

    // TODO: implement other features

    default:
      // TODO: throw an error
      return "";
  }
}

const HeroCard = ({hero, feature}) => {
  // TODO: improve the layout
  return <div>
    <img alt={hero.name} src={hero.thumbnail.path} />
    <div>{getFeature(hero, feature)}</div>
  </div>
}

const HeroTable = ({heroes, feature}) => {
  if (feature === '' || heroes.length === 0) {
    return null;
  }

  return <div>
    {heroes.map(hero => <HeroCard hero={hero} feature={feature} />)}
  </div>
}

function App() {
  const [heroes, setHeroes] = useState([]);
  const [feature, setFeature] = useState("");

  useEffect(() => {
    fetchHeroesData().then()
  }, [])

  const handleSelect = (event) => {
    setFeature(event.target.value)
  }

  return (
    <div className="App">
      
      <label htmlFor="feature-select">Choose a feature of Marvel heroes: </label>

      <select
        name="feature"
        id="feature-select"
        onChange={handleSelect}
        value={feature}
      >
        <option value="">Please choose an option below</option>
        {Object.entries(features).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>

      <HeroTable heroes={heroes} feature={feature} />
    </div>
  );
}

export default App;
