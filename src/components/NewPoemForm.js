import React, {useState} from "react";

function NewPoemForm({setPoems}) {
  const [poemTitle, setpoemTitle] = useState('')
  console.log(poemTitle)
  const [poemAuthor, setpoemAuthor] = useState('')
  console.log(poemAuthor)
  const [poemContent, setpoemContent] = useState('')
  console.log(poemContent)
  
  const createPoem = async (e) => {
    e.preventDefault()
    let req = await fetch('http://localhost:8004/poems', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: poemTitle,
        author: poemAuthor,
        content: poemContent
      }
      )
    })
    let res= await req.json()
    setPoems((prevState) => {return [...prevState, res]})
  }
    

  return (
    <form className="new-poem-form" onSubmit={createPoem}>
      <input placeholder="Title" onChange={(e) => {setpoemTitle(e.target.value)}}  value={poemTitle} />
      <input placeholder="Author" onChange={(e) => {setpoemAuthor(e.target.value)}}  value={poemAuthor}  />
      <textarea placeholder="Write your masterpiece here..." rows={10} onChange={(e) => {setpoemContent(e.target.value)}}  value={poemContent}/>
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
