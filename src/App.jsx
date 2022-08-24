import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, Grid, Stack } from '@mui/material';
import { Home } from './views/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
