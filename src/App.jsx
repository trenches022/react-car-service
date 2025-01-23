import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}>Główna</Route>
          <Route path='/services' element={<Services />}>Usługi</Route>
          <Route path='/contact' element={<Contact />}>Kontakty</Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
