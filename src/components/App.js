import React, {useEffect, useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [loadForm, setLoadForm] = useState(false)
  const [poems, setPoems] = useState([])
  const request = async () => {
    let req = await fetch('http://localhost:8004/poems')
    let res = await req.json()
    setPoems(res)
  }
  useEffect(request, [])

  const toggleForm = () => {
    setLoadForm(!loadForm)
  }
  console.log(poems)
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={toggleForm}>Show/hide new poem form</button>
        {loadForm ? <NewPoemForm setPoems={setPoems}/> : null}
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems} />
    </div>
  );
}

export default App;
