import Card from '../Card/Card';

function CardsList({cards, handleCardsClick}) {
  return (
    <ul className="cards-list">
      {cards?.map((card, key) => (
        <li key={key} className="cards-list__item">
          <Card card={card} handleCardClick={handleCardsClick} />
        </li>
      ))}
    </ul>
  );
}

export default CardsList;
