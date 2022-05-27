import './App.css';
import Navbar from './components/NavBar'
import Button from './components/Button'
import Card from './components/Card'
import Rating from './components/Rating'
import AddIcon from '@mui/icons-material/Add'
import ProfileForm from './forms/ProfileForm'
import LoginForm from './forms/LoginForm'
import apiBooks from './api/apiBookAuth'
import { CancelToken } from 'apisauce'


const handleAPITest= async() =>{
  const source = CancelToken.source();
  const response_object = await apiBooks.getBooks(source.token);
 console.log(response_object)
}

function App() {
  return (
      <Navbar>
        <Button color="success" onClick={handleAPITest}>Test API Call</Button>
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

