import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT } from "../../const";
import ItemCard from "../ItemCard/ItemCard";

function ItemList() {
    const [items, setItems] = useState(null);

    const getItems = async () => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/item`);
            setItems(data);
            console.log(data);
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
                <li key={item.id} className='items-list__item'>
                    <ItemCard item={item} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ItemList