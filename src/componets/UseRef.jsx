import {useRef} from 'react'

function Ren(){
    const inputElement = useRef(null);
    const focusInput = ()=>{
        inputElement.current.focus();
        inputElement.current.value = "Dev";
    }
    
    return (
    <>
     <input type="text" ref={inputElement}/>
     <button onClick={()=> focusInput()}>Focus & Write Dev</button>
    </>
    );
}

export default Ren;