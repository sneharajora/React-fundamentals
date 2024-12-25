import {createContext} from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

// create instance of (createContext)
export const Data = createContext();

function Api(){
    const name = "sneha";

    return (
        // Wrap our component into Provider Component
      <>
         <Data.Provider value={name}>
            <ComponentA/>
            <ComponentB/>
         </Data.Provider>
      </>
    );
}

export default Api;