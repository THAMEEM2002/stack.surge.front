import './App.css';
import {BrowserRouter,Route, Link, Routes} from "react-router-dom"
import Login from './components/Login'
function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
        <Routes>
      <Route path="/components/Login.js" element={<Login/>}/> 
      <nav>
      <ul>
        <li>
          <Link to = {"/components"}>Login</Link>
        </li>
      </ul>
      </nav>
    </Routes>
    </BrowserRouter>
    </main>
    </div>
  );
}
export default App;
