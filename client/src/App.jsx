import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='bg-blue-50 p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
