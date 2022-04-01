import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

import Container from './components/layout/Container';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="minHeight">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/newproject" element={<NewProject/>}/>
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
