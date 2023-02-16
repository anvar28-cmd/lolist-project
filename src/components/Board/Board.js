function Board({title, color, children}) {
  document.documentElement.style.setProperty('--board-color', color);

  return (
    <section className="board">
      <h2 className="board__title">{title}</h2>

      <div className="board__inner">
        {children}
      </div>
    </section>
  );
}

export default Board;
