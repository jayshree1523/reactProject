// import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout';
import NoPage from './components/NoPage';
import Home from './components/Home';
import DisplayDepartments from './components/department/DisplayDepartments';
import AddDepartment from './components/department/AddDepartment';
// import UpdateDepartment from './components/department/UpdateDepartment';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />}></Route>

            <Route path='/departments' element={<DisplayDepartments/>}/>
            <Route path='/add' element={<AddDepartment/>}></Route>
           
            {/* <Route path="/update-department/:deptName" element={<UpdateDepartment />} /> */}
            <Route path='*' element={<NoPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
