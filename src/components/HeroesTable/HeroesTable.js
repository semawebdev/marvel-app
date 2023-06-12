import { HeroCard } from "./HeroCard"

export const HeroesTable = ({ error, isLoading, heroes, feature }) => {
    if (feature === '' || heroes.length === 0) {
        return null;
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Oops, there is any error when trying to load the data...</div>
    }

    return (
        <div className="HeroesTable">
            {heroes.map((hero) => (
                <HeroCard key={hero.id} hero={hero} feature={feature} />
            ))}
            <div>Number of heroes displayed: {heroes.length}</div>
        </div>
    );
};