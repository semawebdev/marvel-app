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

export const getFeature = (hero, feature) => {
    switch (feature) {
        case features.name:
            return <div>{hero.name}</div>;

        case features.story:
            return <StoryFeature hero={hero} feature={feature}/>;

        // TODO: implement other features

        default:
            // TODO: throw an error
            return "";
    }
}