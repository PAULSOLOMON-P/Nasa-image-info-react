import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  const [showModo,setshowModo]=useState(false)

  function handleShowModo(){
    setshowModo(!showModo)
  }
  return (
    <>
      <Main/>
      {showModo && (<Sidebar handleShowModo={handleShowModo}/>)}
      <Footer handleShowModo={handleShowModo}/>
    </>
  )
}

export default App
