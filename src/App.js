import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo,setTodo]=useState([{
    "Title":"Coding ",
    "Content":"Code a React App"
  }]);


  const [text,setText]=useState("")
  const [content,setContent]=useState("")
  const[editable,setEditable]=useState(false)
  const [edit,setEdit]=useState(false)
  const AddText=()=>{
    if(text && content){
      const obj={
        "Title":text,
        "Content":content
      }
      setTodo([...todo,obj]);
    }
  }
  const DeleteTodo=(e)=>{
    
    const removeItem = todo.filter((todo,id1) => {
      return id1 !== e;
    });
  
    setTodo(removeItem)
  
  }
  const MakeEditable=()=>{
    setEditable(!editable)
  }
  const updateTodo=(e)=>{
    
    const updateTodo=[...todo]
    updateTodo[e]={
      "Title":text,
    "Content":content
    }
    
    setTodo(updateTodo)
    setEditable(false)
  }


  console.log(text,content);
  return (
    <div className="App">
      <input type="text" value={text}  onChange={e=>setText(e.target.value)} title="Titl!e" /> 
      <input type="content"  value={content} onChange={e=>setContent(e.target.value)} title="Add Note" />
      <button onClick={AddText}>Add Todo</button> 
      {
        todo.map((todo,id)=>{return (
          <div style={{border:"10px solid black",margin:"20px",padding:"20px" ,width:"30%"}}>
            <h1>{todo.Title}</h1>
          <h2>{todo.Content}</h2>
          <button onClick={MakeEditable}>{editable?"Cancel Edit":"Edit Todo"}</button> 
          {editable?<>
            <input type="text" value={text}  onChange={e=>setText(e.target.value)} title="Titl!e" /> 
          <input type="content"  value={content} onChange={e=>setContent(e.target.value)} title="Add Note" />
          <button onClick={()=>updateTodo(id)}>Edit Todo</button> 
          </>:<></>}
          <button onClick={()=>DeleteTodo(id)}>Delete Todo</button> 

          </div>

          
        )
          
        })
      }
    </div>
  );
}

export default App;
