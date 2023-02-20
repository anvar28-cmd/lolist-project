import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ENDPOINT } from "../../const";
import ItemCard from "../ItemCard/ItemCard";

function ItemList({handleItemsClick}) {
  const [items, setItems] = useState(null);
  const ref = useRef(null);

  const handleMouseEnter = (evt) => {
    ref.current.style.top = `${evt.target.getBoundingClientRect().y}px`;
  };

  const getItems = async () => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/item`);
      setItems(data);
    } catch (error) {
      console.log("Error was found:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <div className="items-wrapper">
      <ul className="items-list">
        {items && items.map((item) => (
          <li key={item.id} className="items-list__item">
            <ItemCard item={item} handleItemsClick={handleItemsClick} handleMouseEnter={handleMouseEnter} ref={ref} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList