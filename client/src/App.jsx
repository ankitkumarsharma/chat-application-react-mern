import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from './context/AuthContext';
import useMobileDevice from './hooks/useMobileDevice';

function App() {
  useMobileDevice();
  const {authUser} = useAuthContext()
  return (
    <div className='bg-blue-50 p-4 h-screen flex items-center justify-center'>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={authUser ? <Navigate to='/'/> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> : <SignUp /> } />
        <Route path="/" element={authUser ? <Home/> : <Navigate to={'/login'}/>} />
      </Routes>
    </div>
  );
}

export default App;
