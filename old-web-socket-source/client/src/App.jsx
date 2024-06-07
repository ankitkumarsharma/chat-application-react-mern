import axios from 'axios';
import './App.css';
import Routes from './Routes';
import { UserContextProvider } from './UserContext';

function App() {
  // axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.baseURL = "https://chat-application-react-mern.onrender.com";
  // Set default headers for all axios requests
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_TOKEN_HERE';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  axios.defaults.withCredentials = true;
  return (
    <>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>
    </>
  );
}

export default App;
