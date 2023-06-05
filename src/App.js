// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Header from './components/header/header';
import Home from './pages/home/home';
import  Portfolio  from './pages/portfolio/portfolio';
import  Skills from './pages/skills/skills';
import EduJourney from './pages/educational_journey/edu_journey';
import Education from './pages/education/education';
import Contact from './pages/contact/contact';
import StarsCanvas from './components/stars/stars';


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<div className='relative'><Home/><StarsCanvas/></div> } />
    <Route path='/portfolio' element={<div className='relative'><Portfolio/><StarsCanvas/></div>} />
    <Route path='/skills' element={<div className='relative'><Skills/><StarsCanvas/></div>} />
    <Route path='/education' element={<div className='relative'><Education/><StarsCanvas/></div>} />
    <Route path='/educational_journey' element={<div className='relative'><EduJourney/><StarsCanvas/></div>} />
    <Route path='/contact' element={<div className='relative'><Contact/><StarsCanvas/></div>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
