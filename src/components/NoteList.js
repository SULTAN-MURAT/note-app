import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filteredNotesSelector } from "../redux/noteSlice";

function NoteList() {
  const initialNotes = useSelector(filteredNotesSelector);

  const [notes, setNotes] = useState(initialNotes);
  useEffect(() => {
    setNotes(initialNotes);
    console.log(initialNotes);
  }, [initialNotes]);
  return (
    <div className="note-list">
      {notes &&
        notes.map((item) => (
          <div
            className="note"
            key={Math.random() * Date.now()}
            style={{ backgroundColor: `${item.color}` }}
          >
            <h2>{item.text}</h2>
          </div>
        ))}
    </div>
  );
}

export default NoteList;
