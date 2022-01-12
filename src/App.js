//import logo from './logo.svg';
import './App.css';
import SearchField from './Components/SearchField.js'
import GifCard from './Components/GifCard';

function App() {
  return (
    <div className="App">
     <div className="searchField">
     <SearchField/> 
     <GifCard/>
     </div>
     </div>
 
  );
}

export default App;
