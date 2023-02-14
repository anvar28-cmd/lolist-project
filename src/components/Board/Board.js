function Board({title, children}) {
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
