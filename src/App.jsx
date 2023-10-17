import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Outlet></Outlet>
    </>
  )
}

export default App
