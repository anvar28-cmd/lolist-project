import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT } from "../../const";
import SpellCard from "../SpellCard/SpellCard";

function SpellsList() {
    const [spells, setSpells] = useState(null);

    const getSpells = async () => {
        try {
            const { data } = await axios.get(`${ENDPOINT}/spell`);
            setSpells(data);
            console.log(data);
          } catch (error) {
            console.log("Error was found:", error);
          }
    }
    useEffect(() => {
        getSpells();
            }, [])
  return (
    <div className="spells-wrapper">
        <ul className="spells-list">
            {spells && spells.map((spell) => (
                <li key={spell.id} className='spells-list__item'>
                    <SpellCard spell={spell} />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SpellsList