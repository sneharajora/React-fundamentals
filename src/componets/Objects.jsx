import { useState } from "react";

function Objects(){
    const [movies,setMovies] = useState([
     {id:1,title:"spiderman",ratings:3},
     {id:2,title:"Superman",ratings:6},
    ]);

    const handleClick =()=>{
        setMovies(
            movies.map((m)=>(m.id===1?{...movies,title:"John Wick 4"}:m))
        );
    };

    return(
         <>
         {movies.map((movie)=>(
             <li>{movie.title}</li>
         ))}
         <button onClick={handleClick}>Change Name</button>
       </>
    );
};

export default Objects;   