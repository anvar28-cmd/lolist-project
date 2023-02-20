import GoldIcon from '../Icons/GoldIcon'

function Card({card, handleCardClick}) {
  const { image, name } = card;

  return (
    <div className="card" onClick={handleCardClick(card)}>
      <img
        className="card__image"
        src={image ? image : ''}
        width={120}
        height={120}
        alt={name}
      />
      <h3 className="card__title">{name}</h3>

      <dialog className="card__modal">
        <p className="card__modal-info">
          {card.title}
          {card.gold && 
            <>
              Price: {card.gold} <GoldIcon />
            </>
          }
        </p>
        <p className="card__modal-text">
          {card.blurb}
        </p>
      </dialog>
    </div>
  );
}
export default Card;