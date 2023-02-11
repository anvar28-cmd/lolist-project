import { useRef } from "react";
import { Link, generatePath } from "react-router-dom";
import { AppRoute } from '../../const';

function HeroCard({ hero }) {
  const {id, name, image, title, blurb} = hero;
  const ref = useRef(null);
  const handleMouseEnter = (evt) => {
    ref.current.style.top = `${evt.target.getBoundingClientRect().y}px`;
  };

  return (
    <Link className="hero-card"
      to={generatePath(AppRoute.HEROES_SELECTED, {heroID: id})}
      onMouseEnter={handleMouseEnter}
    >
      <img className="hero-card__image"
        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${image}`}
        width={120}
        height={120}
        alt={name}
      />
      <h3 className="hero-card__name">{name}</h3>

      <div ref={ref} className="hero-card__inner">
        <p className="hero-card__title">{title}</p>
        <p>{blurb}</p>
      </div>
    </Link>
  );
}

export default HeroCard;
