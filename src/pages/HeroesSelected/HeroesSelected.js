import ItemBuild from "../../components/ItemBuild/ItemBuild";
import ItemList from "../../components/ItemList/ItemList";
import SpellsList from "../../components/SpellList/SpellsList";

function HeroesSelected() {
  return (
    <main className="heroes-selected">
      <ItemList />
      <div className="heroes-selected__wrap">
      <SpellsList />
      <ItemBuild />
      </div>
    </main>
  );
}

export default HeroesSelected;