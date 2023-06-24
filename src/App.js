
import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import CrudOperation from './components/CrudOperation';
import EditUser from './components/EditUser';

import NavBar from './components/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<CrudOperation />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
