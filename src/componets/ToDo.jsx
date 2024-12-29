import { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState("");
const [todo, setTodo] = useState([]);

    function generateId(){
        return Math.floor(Math.random()*10);
    }

    const handleInput =()=>{
        setTodo((todo)=>
            todo.concat({
               text: input,
               id: generateId(),
            })
        );
            setInput("");
    
    };

    const removeTodo =(id)=>{
          setTodo((todo)=>todo.filter((t)=>t.id!==id));
    };
    
  return (
    <>
      <input type="text"
       placeholder="Add Your Task" 
       value={input}
       onChange={(e)=>setInput(e.target.value)}
       ></input>

      <div>
        <button onClick={handleInput}> Submit</button>
      </div>
       
       <ul className="todo-list">
          {
            todo.map(({text,id})=>{
              return <li key={id} className="todo">
                 <span>{text}</span>
                 <button className="close" onClick={()=> removeTodo}>X</button>
               </li>;
            })
          }
       </ul>
    </>
  );
};

export default ToDo;
