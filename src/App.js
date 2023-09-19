

import { useEffect } from "react"
import Body from "./Body"
import Header from "./Header"

function App() {
 
  useEffect(()=>{
     fetchData();

  },[]);

  const fetchData = ()=>{
    
  }
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}

export default App