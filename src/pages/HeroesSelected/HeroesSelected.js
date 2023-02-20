import axios from "axios";
import { useEffect, useState } from "react";
import { generatePath, Link, useNavigate, useParams } from "react-router-dom";
import HeroCard from "../../components/HeroCard/HeroCard";
import BuildsCard from "../../components/BuildsCard/BuildsCard";
import ItemList from "../../components/ItemList/ItemList";
import SpellsList from "../../components/SpellList/SpellsList";
import { AppRoute, ENDPOINT } from "../../const";
import { postWithToken } from "../../token";
import { toast } from "react-toastify";

function HeroesSelected( {setIsAuthorized}) {
  const params = useParams();
  const heroID = params.heroID;
  const navigate = useNavigate();
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


    postWithToken(`${ENDPOINT}/build`, {
      hero_id: heroID,
      description: evt.target.description.value,
      items: selectedItems.map((x) => x.id),
      spells: selectedSpells.map((x) => x.id),
    })
    .then(() => {
      setIsAuthorized(true)
      navigate(generatePath(AppRoute.BUILDS, {heroID: hero.id}))
      toast.success('Build was saved!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  };

  const hanleBuildsCardReset = () => {
    setSelectedItems([]);
    setSelectedSpells([]);
  };

  useEffect(() => {
    axios
      .get(`${ENDPOINT}/hero/${heroID}`)
      .then(({ data }) => {
        setHero(data);
      })
      .catch((error) => {
        console.log(error);
      });
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
          {hero && (
            <Link
              className="button heroes-selected__path-build"
              to={generatePath(AppRoute.BUILDS, { heroID: hero.id })}
            >
              {hero.name}'s Builds
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

export default HeroesSelected;
