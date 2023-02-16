import axios from "axios";
import { useEffect, useState } from "react";
import { AppRoute, ENDPOINT } from "../../const";
import Board from '../../components/Board/Board';
import CardsList from '../../components/CardsList/CardsList';
import { generatePath, useNavigate } from "react-router-dom";

function Heroes() {
  const navigate = useNavigate();
  const [heroes, setHeroes] = useState(null);
  const handleCardsClick = (hero) => () => 
    navigate(generatePath(AppRoute.HEROES_SELECTED, {heroID: hero.id}));
    
  useEffect(() => {
    axios.get(`${ENDPOINT}/hero`)
      .then(({data}) => setHeroes(data))
      .catch((error) => console.log(error));
  }, [])

  return (
    <main className="heroes container">
      <Board 
        title="Champions" 
        color="rgba(106, 222, 228, 24%)"
      >
        <CardsList 
          cards={heroes} 
          handleCardsClick={handleCardsClick}
        />
      </Board>
    </main>
  );
}

export default Heroes;
