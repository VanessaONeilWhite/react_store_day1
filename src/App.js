import './App.css';
import Navbar from './components/NavBar'
import Button from './components/Button'
import Card from './components/Card'
import Rating from './components/Rating'
import AddIcon from '@mui/icons-material/Add';
function App() {
  return (
      <Navbar>
        <Button color="success" icon={<AddIcon/>}>Add to reading list</Button>
        <br></br>
        <Card/>
        <Rating/>
      </Navbar>
  );
}

export default App;
