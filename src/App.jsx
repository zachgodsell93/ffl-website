import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, Grid, Stack } from '@mui/material';
import { Home } from './views/Home';
import { Navigation } from './components/Navigation';
import { Services } from './views/Services';
import { About } from './views/About';
import { Contact } from './views/Contact';

function App() {
  return (
    <>
    
      <Router>
        <Navigation>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/services' element={<Services />} />

            <Route path='/about' element={<About />} />

            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Navigation>
      </Router>
      
    </>
  );
}

export default App;
