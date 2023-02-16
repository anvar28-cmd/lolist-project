import { useRef } from "react";

function SpellCard({spell, handleSpellsClick}) {
    const {name, image, descritpion} = spell;
    const ref = useRef(null);

    const handkeMouseEnter = (evt) => {

    }

  return (
    <>
    <div className="spell-card" onClick={handleSpellsClick(spell)} onMouseEnter={handkeMouseEnter}>
        <img className="spell-card__image"
          src={image}
          width={64}
          height={64}
          alt={name}
          />
        <h3 className="spell-card__name">{name}</h3>
    </div>
    <div ref={ref} className='spell-card__inner visually-hidden'>
        <p className="spell-card__plaintext">{descritpion}</p>
    </div>
    </>
  )
}

export default SpellCard