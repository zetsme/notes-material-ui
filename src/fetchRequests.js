//
export const postNewNote = (data) =>
  fetch('http://localhost:3001/notes', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
//
export const getAllNotes = () => fetch('http://localhost:3001/notes');
//
export const deleteNoteById = (id) =>
  fetch(`http://localhost:3001/notes/${id}`, {
    method: 'DELETE',
  });
