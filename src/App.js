import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting ={'Ingresaste a EcoUrba'}/>
    <ItemCount initial ={1} stock={50} onAdd ={(quantity) => console.log('cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
