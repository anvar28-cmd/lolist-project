import Board from '../../components/Board/Board';
import BuildsList from '../../components/BuildsList/BuildsList';

function Builds() {
  return (
    <main className="builds">
      <Board title="Saved Builds">
        <BuildsList />
      </Board>
    </main>
  );
}

export default Builds;