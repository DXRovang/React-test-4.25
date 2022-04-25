import {Route, Routes} from 'react-router-dom'
import Parent1 from './Parent1'
import Parent2 from './Parent2'
import './App.css';


function App() {
  return (
    <div>
      Hello from App
      <Routes>
        <Route exact path='/parent1' element={<Parent1/>}/>
        <Route exact path='/parent2' element={<Parent2/>}/>
      </Routes>
    </div>
  );
}

export default App;
