import './App.css';
import Navbar from './components/NavBar'
import Button from './components/Button'
import Card from './components/Card'
import Rating from './components/Rating'
import AddIcon from '@mui/icons-material/Add'
import ProfileForm from './forms/ProfileForm'
import LoginForm from './LoginForm';

function App() {
  return (
      <Navbar>
        <ProfileForm/>
        <br></br>
        <LoginForm/>
        <br></br>
        <Card/>
        <Button color="success" icon={<AddIcon/>}>Add to reading list</Button>
        <br></br>
        <Rating/>
      </Navbar>
  );
}

export default App;
