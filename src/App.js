import { useEffect, useState } from 'react';
import './App.css';
import { fetchHeroesData } from './fetchHeroesData';
import { HeroesTable } from "./components";
import { features } from './constants';

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

const PageSelect = ({ isFirstPage, onPrev, onNext }) => {
  return (
    <div>
      <button onClick={onPrev} disabled={isFirstPage}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

function App() {
  const [heroes, setHeroes] = useState([]);
  const [feature, setFeature] = useState("");
  const [pageSize, setPageSize] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetchHeroesData({ limit: pageSize, offset })
      .then(({ data }) => {
        setHeroes(data.data.results);
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  },
    [offset, pageSize]);

  const handleFeatureSelect = (event) => {
    setFeature(event.target.value)
  };

  const handlePrev = () => {
    setOffset((curr) => Math.max(0, curr - pageSize));
  };

  const handleNext = () => {
    setOffset((curr) => curr + pageSize);
  };

  const isFirstPage = offset === 0;

  return (
    <div className="App">

      <FeatureSelect heroes={heroes} onChange={handleFeatureSelect} />
      <PageSelect
        isFirstPage={isFirstPage}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <HeroesTable error={error} isLoading={isLoading} heroes={heroes} feature={feature} />
    </div>
  );
}

export default App;
