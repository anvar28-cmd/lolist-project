function HeroCard({ hero }) {
  const {name, image, title, blurb} = hero;
  console.log(hero);
  return (
    <div className="hero-card">
      <img className="hero-card__image"
        src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${image}`}
        width={120}
        height={120}
        alt={name}
      />
      <h3 className="hero-card__name">{name}</h3>

      <div className="hero-card__inner">
        <p className="hero-card__title">{title}</p>
        <p className="hero-card__blurb">{blurb}</p>
      </div>
    </div>
  );
}

export default HeroCard;
