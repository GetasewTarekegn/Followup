import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import AddFinding from './Components/Followup/AddFinding'
import ViewFinding from './Components/Followup/ViewFinding'
import UpdateFinding from './Components/Followup/UpdateFinding'
import HomePage from './Components/Followup/HomePage'
import Footer from './Components/Followup/Nav/Footer'
import Navbar from './Components/Followup/Nav/Navbar'
function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element ={<HomePage />}></Route>
      <Route path='/addfinding' element= {<AddFinding />}></Route>
      <Route path='/viewfindings' element = {<ViewFinding />}></Route>
      <Route path='/updatefindings/:id' element = {<UpdateFinding />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
