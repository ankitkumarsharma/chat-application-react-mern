import axios from 'axios';
import './App.css';
import Routes from './Routes';
import { UserContextProvider } from './UserContext';

function App() {
  axios.defaults.baseURL = "https://chat-nodejs-mongodb.vercel.app";
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
