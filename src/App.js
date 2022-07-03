import Header from './components/Header';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';

function App() {

  return (
    <div className="App">
      <Header/>
     <NoteForm/>
     <NoteList/>
    </div>
  );
}

export default App;
