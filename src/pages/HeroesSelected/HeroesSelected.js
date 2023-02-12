import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroCard from "../../components/HeroCard/HeroCard";
import BuildsCard from "../../components/BuildsCard/BuildsCard";
import ItemList from "../../components/ItemList/ItemList";
import SpellsList from "../../components/SpellList/SpellsList";
import { ENDPOINT } from "../../const";

function HeroesSelected() {
  const params = useParams();
  const heroID = params.heroID;
  const [hero, setHero] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedSpells, setSelectedSpells] = useState([]);

  const handleItemsClick = (item) => () => {
    if (selectedItems.length < 6) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSpellsClick = (spell) => () => {
    if (selectedSpells.length < 2) {
      setSelectedSpells([...selectedSpells, spell]);
    }
  };

  const hanleBuildsCardSubmit = (evt) => {
    evt.preventDefault();
console.log({
      champion_id: heroID,
      description: evt.target.description.value,
      item1: selectedItems[0]?.name ?? '',
      img1: selectedItems[0]?.image ?? '',
      item2: selectedItems[1]?.name ?? '',
      img2: selectedItems[1]?.image ?? '',
      item3: selectedItems[2]?.name ?? '',
      img3: selectedItems[2]?.image ?? '',
      item4: selectedItems[3]?.name ?? '',
      img4: selectedItems[3]?.image ?? '',
      item5: selectedItems[4]?.name ?? '',
      img5: selectedItems[4]?.image ?? '',
      item6: selectedItems[5]?.name ?? '',
      img6: selectedItems[5]?.image ?? '',
      spell1: selectedSpells[0]?.name ?? '',
      img7: selectedSpells[0]?.image ?? '',
      spell2: selectedSpells[1]?.name ?? '',
      img8: selectedSpells[1]?.image ?? '',
    });
    // axios.post('url', {
    //   champion_id: heroID,
    //   description: evt.target.description.value,
    //   item1: selectedItems[0] ?? selectedItems[0].name,
    //   img1: selectedItems[0] ?? selectedItems[0].image,
    //   item2: selectedItems[1] ?? selectedItems[1].name,
    //   img2: selectedItems[1] ?? selectedItems[1].image,
    //   item3: selectedItems[2] ?? selectedItems[3].name,
    //   img3: selectedItems[2] ?? selectedItems[3].image,
    //   item4: selectedItems[3] ?? selectedItems[4].name,
    //   img4: selectedItems[3] ?? selectedItems[4].image,
    //   item5: selectedItems[4] ?? selectedItems[5].name,
    //   img5: selectedItems[4] ?? selectedItems[5].image,
    //   item6: selectedItems[5] ?? selectedItems[6].name,
    //   img6: selectedItems[5] ?? selectedItems[6].image,
    //   spell1: selectedSpells[0] ?? selectedSpells[0].name,
    //   img7: selectedSpells[0] ?? selectedSpells[0].image,
    //   spell2: selectedSpells[1] ?? selectedSpells[1].name,
    //   img8: selectedSpells[1] ?? selectedSpells[1].image,
    // })
    // .then(({data}) => console.log(data));
  };

  const hanleBuildsCardReset = () => {
    setSelectedItems([]);
    setSelectedSpells([]);
  };

  useEffect(() => {
    axios.get(`${ENDPOINT}/hero/${heroID}`)
    .then(({data}) => {
      setHero(data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [heroID]);

  return (
    <main className="heroes-selected">
      <div className="heroes-selected__container">
        {hero && <HeroCard hero={hero} />}

        <ItemList handleItemsClick={handleItemsClick} />

        <div className="heroes-selected__right">
          <SpellsList handleSpellsClick={handleSpellsClick} />
          <BuildsCard 
            selectedItems={selectedItems} 
            selectedSpells={selectedSpells} 
            hanleBuildsCardSubmit={hanleBuildsCardSubmit}
            hanleBuildsCardReset={hanleBuildsCardReset}
          />
        </div>
      </div>
    </main>
  );
}

export default HeroesSelected;