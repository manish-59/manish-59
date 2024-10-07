import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './styles.css';


function App() {
  return (
      <Router basename="/manish-59">
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
  );
}

export default App;
