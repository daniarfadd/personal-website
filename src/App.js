import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDetail from './pages/ProjectDetail';
import Prayer from './components/Prayer';



function App() {
  return (
    <div className='App'>
      <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetail />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/prayer' element={<Prayer />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
