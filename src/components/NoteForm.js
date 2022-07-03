import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNote } from "../redux/noteSlice";

function NoteForm() {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    text: "",
    color: "",
  });

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
    console.log("text", note.text);
    console.log("color", note.color);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
if(note.text===""||note.color===""){
  return alert("Enter text and color");
}
    const newNote = {
      id: nanoid(),
      ...note,
    };
    dispatch(addNote(newNote));
    setNote({
      text: "",
      color: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <div className="note-form">
          <div className="text-area-container">
            <textarea
              cols="40"
              rows="1"
              name="text"
              placeholder="Enter your note here..."
              value={note.text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="note-footer">
            <div>
              <input
                type="radio"
                className="radio-custom"
                name="color"
                id="magenta"
                value="#d85883"
                checked={note.color === "#d85883"}
                onChange={handleChange}
              />
              <input
                type="radio"
                className="radio-custom"
                name="color"
                id="purple"
                value="#ba68c8"
                onChange={handleChange}
                checked={note.color === "#ba68c8"}
              />
              <input
                type="radio"
                className="radio-custom"
                name="color"
                id="yellow"
                value="#ffd54f"
                checked={note.color === "#ffd54f"}
                onChange={handleChange}
              />
              <input
                type="radio"
                className="radio-custom"
                name="color"
                id="seaBlue"
                value="#4fc3f7"
                checked={note.color === "#4fc3f7"}
                onChange={handleChange}
              />
              <input
                type="radio"
                className="radio-custom"
                name="color"
                id="green"
                value="#aed581"
                checked={note.color === "#aed581"}
                onChange={handleChange}
              />
            </div>
            <div>
              <button className="add-button" type="submit">
                ADD NOTE
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default NoteForm;
