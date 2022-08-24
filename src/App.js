import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>

      <div>
        <li>
          <Link to = '/'>Home</Link>
        </li>
        <li>
        <Link to = '/About'>About</Link>
        </li>
        <li>
        <Link to = '/Contact'>Contact</Link>
        </li>
      </div>

      <Routes>
        <Route exact path="/" element={< Home />}></Route>
        <Route exact path="/About" element={< About />}></Route>
        <Route exact path="/Contact" element={< Contact />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
 