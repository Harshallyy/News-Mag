import { useState } from "react"
import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import Newsitem from "./Components/Newsitem"

const App = () => {
  const[category,setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
      <Newsitem/>
    </div>
  )
}

export default App
