import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINT } from "../../const";
import HeroCard from "../HeroCard/HeroCard";

function HeroesList() {
  const [heroes, setHeroes] = useState(null);

  const getHeroes = async () => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/hero`);
      setHeroes(data);
    } catch (error) {
      console.log("Error was found:", error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, [])

  return (
    <div className="heroes-wrapper">
      <ul className="heroes-list">
        {heroes && heroes.map((hero) => (
          <li key={hero.id} className="heroes-list__item">
            <HeroCard hero={hero} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeroesList;