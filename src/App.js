import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { action, originals } from './urls'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url = {originals} title='Netflix Originals'/>
     <RowPost url = {action} title=' Action' isSmall/>
    </div>
  );
}

export default App;
