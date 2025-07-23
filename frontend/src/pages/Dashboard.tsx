import Header from '../components/Header';
import Note from '../components/Note';
import { notes } from '../utils/dummy';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex m-3 justify-center flex-wrap">
        {notes.map((note) => (
          <Note title={note.title} description={note.description} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
