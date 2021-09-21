import './App.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Item"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
