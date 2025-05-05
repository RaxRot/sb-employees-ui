
import './App.css'
import HelloWorld from "./HelloWorld.jsx";
import ListEmployeeComponent from "./ListEmployeeComponent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Employee from "./Employee.jsx";

function App() {
  return <>
      <BrowserRouter>
    <Header/>
          <Routes>
              <Route path='/' element={<ListEmployeeComponent/>}></Route>
              <Route path='/employees' element={<ListEmployeeComponent/>}></Route>

              <Route path='/add-employee' element={<Employee/>}></Route>

              <Route path='/edit-employee/:id' element={<Employee/>}></Route>
          </Routes>
    <Footer/>
      </BrowserRouter>
         </>
}

export default App
