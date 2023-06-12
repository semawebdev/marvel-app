import { getFeature } from "./getFeature"

export const HeroCard = ({ hero, feature }) => {
    const thumbnailSrcPath = `${hero.thumbnail.path}/portrait_xlarge.jpg`;
    return (
        <div>
            <img alt={hero.name} src={thumbnailSrcPath} />
            <>{getFeature(hero, feature)}</>
        </div>
    );
};
