import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: nanoid(), text: "This is first Note", color: "#ba68c8" },
      { id: nanoid(), text: "This is second Note", color: "#d85883" },
      { id: nanoid(), text: "This is third Note", color: "#4fc3f7" },
    ],
    filteredItems:[
      { id: nanoid(), text: "This is first Note", color: "#ba68c8" },
      { id: nanoid(), text: "This is second Note", color: "#d85883" },
      { id: nanoid(), text: "This is third Note", color: "#4fc3f7" },
    ],
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
      state.filteredItems.push(action.payload);
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
