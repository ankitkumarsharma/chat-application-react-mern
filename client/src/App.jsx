import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='bg-blue-50 p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp/> */}
      <Home/>
    </div>
  );
}

export default App;
