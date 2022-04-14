import React, {useState} from "react";

function Poem({poems, setPoems}) {
  const {id, title, content, author} = poems
  const [read, setRead] = useState(false)
  const markRead = () => {
      setRead(!read)
  }

  const deletePoem = async () => {
    let req = await fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE"
  })
    if (req.ok) {
      setPoems((poems) => {
        let list = poems.filter((element) => {
          return element.id !== id
        })
        return list
      })
    }
    
}


  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={markRead}>
      {read ? 'Mark as read' : 'Mark as Unread'}
      </button>
      <button onClick={deletePoem}>
      DELETE
      </button>
    </div>
  );
}

export default Poem;
