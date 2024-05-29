import logo from './logo.svg';
import './App.css';
import Register from './Register';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;
  return (
    <>
      <Register/>
    </>
  );
}

export default App;
