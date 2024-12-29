import React from 'react'
import UseRef from './componets/UseRef.jsx'
import './index.css';
import useFetch from './componets/useFetch.jsx'
import Counter from './componets/Counter.jsx'

const Current = () => {
    
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
     <>
      <UseRef></UseRef>
    
      {data && 
         data.map((item)=>{
          return <p key={item.id}>{item.title}</p>
         })}  
        <Counter></Counter> 
     </>
     );
    }

export default Current;