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
                    src={selectedItems[index].image}
                    width={40}
                    height={40} 
                    alt=''
                  />
                  <p className="builds-card__p-text">{selectedItems[index].name}</p>
                </li>
              );
            }

            return (
              <li key={index} className="builds-card__list-item">
                <img src="" width={40} height={40} alt=''/>
                <p className="builds-card__p-text">Item {index + 1}</p>
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
                    src={selectedSpells[index].image}
                    width={40}
                    height={40}
                    alt={selectedSpells[index].name} 
                  />
                  <p className="builds-card__p-text">{selectedSpells[index].name}</p>
                </li>
              );
            }

            return (
              <li key={index} className="builds-card__list-item">
                <img src="" width={40} height={40} alt='' />
                <p className="builds-card__p-text">Item {index + 1}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="builds-card__buttons">
        <button 
          className="button builds-card__button" 
          type="reset"
          onClick={hanleBuildsCardReset}
        >
          Clear
        </button>
        <button 
          className="button builds-card__button" 
          type="submit"
        >
          Save Build
        </button>
      </div>
    </form>
  )
}

export default buildssCard