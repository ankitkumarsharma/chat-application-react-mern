import axios from 'axios';
import './App.css';
import Routes from './Routes';
import { UserContextProvider } from './UserContext';

function App() {
  axios.defaults.baseURL = "https://chat-nodejs-mongodb-ket5atbrj-ankitkumarsharma1s-projects.vercel.app";
  axios.defaults.withCredentials = true;
  return (
    <>
      <UserContextProvider>
        <Routes/>
      </UserContextProvider>
    </>
  );
}

export default App;
