import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
  items: JSON.parse(localStorage.getItem("note-local"))|| [
    { id: nanoid(), text: "This is first Note", color: "#ba68c8" },
    { id: nanoid(), text: "This is second Note", color: "#d85883" },
    { id: nanoid(), text: "This is third Note", color: "#4fc3f7" },
  ],
  filteredItems:JSON.parse(localStorage.getItem("filtered-local"))||[
    { id: nanoid(), text: "This is first Note", color: "#ba68c8" },
    { id: nanoid(), text: "This is second Note", color: "#d85883" },
    { id: nanoid(), text: "This is third Note", color: "#4fc3f7" },
  ],
};
export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("note-local",JSON.stringify(state.items));
      state.filteredItems.push(action.payload);
      localStorage.setItem("filtered-local",JSON.stringify(state.filteredItems));
    },
    filterNotes: (state, action) => {
      const filteredItems = state.items.filter((item) =>
      item.text.toLowerCase().includes(action.payload.toLowerCase())
    );
    return {
      ...state,
      filteredItems:
        action.payload.length > 0 ? filteredItems : [...state.items]
    };
 },
}
});
export const noteSelector = (state) => state.notes.items;
export const filteredNotesSelector=(state) => state.notes.filteredItems;
export const { listNotes, addNote, filterNotes } = notesSlice.actions;

export default notesSlice.reducer;
