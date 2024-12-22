import {useState} from "react";

const Friends =()=>{
    const[friends,setFriends]=useState(["Alex","John"]);

    const addOne =()=>{
        setFriends([...friends,"Sneha"]);
    }
    const removeOne =()=>{
       setFriends(friends.filter((f)=>f!=="John"));
    }
    const updateOne =()=>{
        setFriends(friends.map(f=>f==="Alex"?"Alex Smith":f));
    }
}

return (
    <>
     {friends.map((f)=>{
          <li key={Math.random()}>{f}</li>
     })}
     
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={updateOne}>Update One</button>
    </>
)