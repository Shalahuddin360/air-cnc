import { Outlet } from "react-router-dom"
import Footer from "../components/Shared/Footer/Footer"
import Navbar from "../components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
       <div className="pt-20 min-h-[calc(100vh-68px)]">
         <Outlet/>
       </div>
       <Footer/>
    </div>
  )
}

export default Main
