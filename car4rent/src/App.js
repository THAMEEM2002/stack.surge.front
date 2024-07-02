import './App.css';
import {BrowserRouter,Route, Link, Routes} from "react-router-dom"
import Login from './components/Login'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
