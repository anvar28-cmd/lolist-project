import GoldIcon from "../Icons/GoldIcon";

function ItemCard({item, ref, handleItemsClick, handleMouseEnter}) {
  const {name, image, plaintext, gold} = item;

  return (
    <>
      <div className="item-card" onClick={handleItemsClick(item)} onMouseEnter={handleMouseEnter}>
        <img className="item-card__image"
          src={image}
          width={64}
          height={64}
          alt={name}
        />
        <h3 className="item-card__name">{name}</h3>
      </div>
      <div ref={ref} className='item-card__inner'>
        <p className="item-card__plaintext">{plaintext}</p>
        <p className="item-card__price">Price:{gold}<GoldIcon /></p>
      </div>
    </>
  )
}

export default ItemCard