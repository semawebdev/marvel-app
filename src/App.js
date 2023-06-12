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

const FeatureSelect = ({ feature, onChange }) => {
  return (
    <>
      <label htmlFor="feature-select">Choose a feature:</label>

      <select
        name="feature"
        id="feature-select"
        onChange={onChange}
        value={feature}
      >
        <option value="">--Please choose an option--</option>
        {Object.entries(features).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
    </>
  );
};


const HeroCard = ({ hero, feature }) => {
  // TODO: improve the layout
  const thumbnailSrcPath = `${hero.thumbnail.path}/portrait_xlarge.jpg`;
  return (
    <div>
      <img alt={hero.name} src={thumbnailSrcPath} />
      <div>{getFeature(hero, feature)}</div>
    </div>
  );
};

const HeroTable = ({ heroes, feature }) => {
  if (feature === '' || heroes.length === 0) {
    return null;
  }

  return (
    <div>
      {heroes.map((hero) => (
        <HeroCard hero={hero} feature={feature} />
      ))}
      <div>Number of heroes displayed: {heroes.length}</div>
    </div>
  );
};


function App() {
  const [heroes, setHeroes] = useState([]);
  const [feature, setFeature] = useState("");
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    // TODO: handle loading state
    fetchHeroesData({ limit: pageSize })
      .then(({ data }) => {
      setHeroes(data.data.results);
    })
}, [pageSize])

const handleFeatureSelect = (event) => {
  setFeature(event.target.value)
}

return (
  <div className="App">
    
    <FeatureSelect heroes={heroes} onChange={handleFeatureSelect}/>
    <HeroTable heroes={heroes} feature={feature} />
  </div>
);
}

export default App;
