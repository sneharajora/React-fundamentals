import React from 'react'
import {Data} from "./ContexApi";

 const ComponentB = () => {
  return (
    <>
     <Data.Consumer>
        {(name)=>{
         return <h1>My name is:{name}</h1>;
        }}
     </Data.Consumer>
     </>
  )
};

export default ComponentB;
