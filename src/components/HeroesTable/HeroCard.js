import { Feature } from "./Feature"

export const HeroCard = ({ hero, feature }) => {
    const thumbnailSrcPath = `${hero.thumbnail.path}/portrait_xlarge.jpg`;
    return (
        <div className="heroCard">
            <img 
            alt={hero.name} 
            src={thumbnailSrcPath} 
            data-testid="heroImage"
            />
            <Feature hero={hero} feature={feature}/>
        </div>
    );
};
