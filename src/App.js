import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import FoodDetails from './component/FoodDetails/FoodDetails';
import NavBar from './component/NavBar/NavBar';
import NotFound from './component/NotFound/NotFound';
import Restaurant from './component/Restaurant/Restaurant';
import Service from './component/Service/Service';
function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>
      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/restaurant/:foodId' element={<FoodDetails></FoodDetails>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
