function buildssCard({selectedItems, selectedSpells, hanleBuildsCardSubmit, hanleBuildsCardReset}) {
  return (
    <form className="builds-card" onSubmit={hanleBuildsCardSubmit}>
      <div className="builds-card__container">
        <input className="builds-card__name"
          type="text"
          name="description"
          placeholder="Build Name"
          autoComplete="off"
          required
        />

        <ul className="builds-card__list">
          {Array.from({length: 6}, (_, index) => {
            if (selectedItems[index]) {
              return (
                <li key={index} className="builds-card__list-item">
                  <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/item/${selectedItems[index].image}`}
                    width={40}
                    height={40} 
                  />
                  <p>{selectedItems[index].name}</p>
                </li>
              );
            }

            return (
              <li key={index} className="builds-card__list-item">
                <img src="" width={40} height={40} />
                <p>Item {index + 1}</p>
              </li>
            );
          })}
        </ul>

        <ul className="builds-card__list">
          {Array.from({length: 2}, (_, index) => {
            if (selectedSpells[index]) {
              return (
                <li key={index} className="builds-card__list-item">
                  <img 
                    src={`http://ddragon.leagueoflegends.com/cdn/13.3.1/img/spell/${selectedSpells[index].image}`}
                    width={40}
                    height={40} 
                  />
                  <p>{selectedSpells[index].name}</p>
                </li>
              );
            }

            return (
              <li key={index} className="builds-card__list-item">
                <img src="" width={40} height={40} />
                <p>Item {index + 1}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="builds-card__buttons">
        <button 
          className="builds-card__button" 
          type="reset"
          onClick={hanleBuildsCardReset}
        >
          Cancel
        </button>
        <button 
          className="builds-card__button" 
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default buildssCard