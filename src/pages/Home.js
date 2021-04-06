import { useEffect, useState } from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import NoteCard from '../components/NoteCard';
import { deleteNoteById, getAllNotes } from '../fetchRequests';
const useStyles = makeStyles({
  'my-masonry-grid': {
    display: 'flex',
    marginLeft: '-30px',
    width: 'auto',
    marginTop: '30px',
  },
  'my-masonry-grid_column': {
    paddingLeft: '30px',
    backgroundClip: 'padding-box',
    '& > div': {
      marginBottom: '30px',
    },
  },
});
const Home = () => {
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      const res = await getAllNotes();
      const data = await res.json();
      setNotes(data);
    };
    getNotes();
  }, []);
  const handleNoteDelete = async (id) => {
    await deleteNoteById(id);
    setNotes((prev) => prev.filter((i) => i.id !== id));
  };
  const breakpoints = {
    default: 4,
    1100: 3,
    800: 2,
    500: 1,
  };
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className={classes['my-masonry-grid']}
        columnClassName={classes['my-masonry-grid_column']}
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard handleNoteDelete={handleNoteDelete} note={note} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Home;
