import { useRef } from "react";

function SpellCard({spell}) {
    const {name, image, descritpion} = spell;
    const ref = useRef(null);

    const handleSubmit = (evt) => {

    };

    const handkeMouseEnter = (evt) => {

    }

  return (
    <>
    <div className="spell-card" onClick={handleSubmit} onMouseEnter={handkeMouseEnter}>
        <img className="spell-card__image"
        src={`http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/${image}`}
        width={64}
        height={64}
        alt={name}
        />
        <h3 className="item-card__name">{name}</h3>
    </div>
    <div ref={ref} className='item-card__inner visually-hidden'>
        <p className="item-card__plaintext">{descritpion}</p>
    </div>
    </>
  )
}

export default SpellCard