import { Feature } from "./Feature"

export const HeroCard = ({ hero, feature }) => {
    const thumbnailSrcPath = `${hero.thumbnail.path}/portrait_xlarge.jpg`;
    return (
        <div className="heroCard">
            <img alt={hero.name} src={thumbnailSrcPath} />
            <Feature hero={hero} feature={feature}/>
        </div>
    );
};
