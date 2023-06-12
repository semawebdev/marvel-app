import { features } from "../../constants";

export const getFeature = (hero, feature) => {
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