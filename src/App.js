import Add from './componets/Add.jsx';
import Props from './componets/Props.jsx';
import PropsD from './componets/PropsD.jsx';
import Cart from './componets/Cart.jsx';
import Ternary from './componets/Ternary.jsx';
import Button from './componets/Button.jsx';
import './index.css';
import State from './componets/State.jsx';
import Objects from './componets/Objects.jsx';


function App() {
  const myName = "huXn WebDev";
  const multiply = (a,b) => a*b;
  const specialClass = "simple-class";
  const numbers =[1,2,3,4,5];

  return (
    /*
    <>
    <p>hello</p>
      {numbers.map((number)=>{
         <ul key={Math.random()*10}>
          <li>{number}</li>
         </ul>
      })}
    </>
    */
     <> 
       <Props
          name="Sneha Rajora"
          hobbies={["Coding","Recording","Sleeping"]}
          realData = {18}
       />
       <PropsD
         img="Onetimne"
         name="sneha"
         hobbies="Basketball"
       >
        <p>Hy there !Q!</p>
       </PropsD>
       <Cart/>
       <Ternary></Ternary>
       <Button ></Button>
       <State></State>
       <Objects></Objects>
     </>
  );
}

export default App;
