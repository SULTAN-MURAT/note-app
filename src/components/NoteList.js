import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { filteredNotesSelector, deleteNote } from "../redux/noteSlice";

function NoteList() {
  const initialNotes = useSelector(filteredNotesSelector);
  const dispatch = useDispatch();
  const [notes, setNotes] = useState(initialNotes);
  
  useEffect(() => {
    setNotes(initialNotes);
    console.log(initialNotes);
  }, [initialNotes]);
  
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };
  return (
    <div className="note-list">
      {notes &&
        notes.map((item) => (
          <div
            className="note"
            key={Math.random() * Date.now()}
            style={{ backgroundColor: `${item.color}` }}
          >
           <div className="deleteBtn-container">
              <button
                className="destroy"
                onClick={() => handleDelete(item.id)}
              ></button>
            </div>
            <div>
              <h2>{item.text}</h2>
            </div>
          </div>
        ))}
    </div>
  );
}

export default NoteList;
