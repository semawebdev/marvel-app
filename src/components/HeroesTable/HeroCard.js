import { getFeature } from "./getFeature"

export const HeroCard = ({ hero, feature }) => {
    // TODO: improve the layout
    const thumbnailSrcPath = `${hero.thumbnail.path}/portrait_xlarge.jpg`;
    return (
        <div>
            <img alt={hero.name} src={thumbnailSrcPath} />
            <div>{getFeature(hero, feature)}</div>
        </div>
    );
};
