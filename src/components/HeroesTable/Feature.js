import { features } from "../../constants";

const StoryFeature = ({ hero, feature }) => {
  return (
    <ul>
      {hero.stories.items.map((story) => (
        <li key={story.name}>{story.name}</li>
      ))}
    </ul>
  );
};

const ComicsFeature = ({ hero, feature }) => {
  return (
    <ul>
      {hero.comics.items.map((story) => (
        <li key={story.name}>{story.name}</li>
      ))}
    </ul>
  );
};

const SeriesFeature = ({ hero, feature }) => {
  return (
    <ul>
      {hero.series.items.map((story) => (
        <li key={story.name}>{story.name}</li>
      ))}
    </ul>
  );
};

export const Feature = ({ hero, feature }) => {
  switch (feature) {
    case features.name:
      return <div>{hero.name}</div>;

    case features.stories:
      return <StoryFeature hero={hero} feature={feature} />;

    case features.comics:
      return <ComicsFeature hero={hero} feature={feature} />;

    case features.series:
      return <SeriesFeature hero={hero} feature={feature} />;

    default:
      // TODO: throw an error
      return "";
  }
};