import Board from '../../components/Board/Board';
import BuildsList from '../../components/BuildsList/BuildsList';

function Builds() {
  return (
    <main className="builds">
      <Board title="Saved Builds" color="rgb(0 0 0 / 24%)">
        <BuildsList />
      </Board>
    </main>
  );
}

export default Builds;