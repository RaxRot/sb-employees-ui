
import './App.css'
import ListEmployeeComponent from "./ListEmployeeComponent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Employee from "./Employee.jsx";
import ListDepartmentComponent from "./ListDepartmentComponent.jsx";
import Department from "./Department.jsx";

function App() {
  return <>
      <BrowserRouter>
    <Header/>
          <Routes>
              <Route path='/' element={<ListEmployeeComponent/>}></Route>
              <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

              <Route path='/add-employee' element={<Employee/>}></Route>

              <Route path='/edit-employee/:id' element={<Employee/>}></Route>

              <Route path="/departments" element={<ListDepartmentComponent />} />

              <Route path="/add-department" element={<Department />} />

              <Route path="/edit-department/:id" element={<Department />} />
          </Routes>
    <Footer/>
      </BrowserRouter>
         </>
}

export default App
