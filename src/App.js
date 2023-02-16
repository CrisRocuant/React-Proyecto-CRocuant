
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { products } from './data/products';
import ItemListContainer from './page/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='hola mundo'/>
    </>
  );

}

export default App;


