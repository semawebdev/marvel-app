import { useEffect, useState } from 'react';
import './App.css';
import { fetchHeroesData } from './services/fetchHeroesData';
import { Header, PageSelect, FeatureSelect, HeroesTable } from "./components";

function App() {
  const [heroes, setHeroes] = useState([]);
  const [feature, setFeature] = useState("");
  const [pageSize, setPageSize] = useState(20);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

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
    const selectedOption = event.target.value;
    setIsOptionSelected(selectedOption !== "");
    setFeature(selectedOption);
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
      <Header />
      <FeatureSelect heroes={heroes} onChange={handleFeatureSelect} />
      <PageSelect
        isFirstPage={isFirstPage}
        onPrev={handlePrev}
        onNext={handleNext}
        isOptionSelected={isOptionSelected}
      />
      <HeroesTable
        error={error}
        isLoading={isLoading}
        heroes={heroes}
        feature={feature} />
    </div>
  );
}

export default App;
