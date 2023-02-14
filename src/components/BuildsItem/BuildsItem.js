function BuildsItem({build}) {
  const ITEMS_COUNT = 6;
  const SPELLS_COUNT = 2;

  return (
    <figure className="builds-item">
      <figcaption className="builds-item__name">Group Name</figcaption>

      <div className="builds-item__inner">
        <ol className="builds-item__cards">
          {Array.from({length: ITEMS_COUNT}, (_, key) => (
            <li key={key} className="builds-item__card">
              <img 
                className="builds-item__card-image" 
                src=""
                width={48}
                height={48}
              />
              <p className="builds-item__card-name">Item {key + 1}</p>
            </li>
          )).reverse()}
        </ol>

        <ol className="builds-item__cards">
          {Array.from({length: SPELLS_COUNT}, (_, key) => (
            <li key={key} className="builds-item__card">
              <img 
                className="builds-item__card-image" 
                src=""
                width={48}
                height={48}
              />
              <p className="builds-item__card-name">Spell {key + 1}</p>
            </li>
          )).reverse()}
        </ol>
      </div>
    </figure>
  );
}

export default BuildsItem;
