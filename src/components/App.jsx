
import './App.css'
import HelloWorld from "./HelloWorld.jsx";
import ListEmployeeComponent from "./ListEmployeeComponent.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return <>
      <BrowserRouter>
    <Header/>
          <Routes>
              <Route path='/' element={<ListEmployeeComponent/>}></Route>
              <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
          </Routes>
    <Footer/>
      </BrowserRouter>
         </>
}

export default App
