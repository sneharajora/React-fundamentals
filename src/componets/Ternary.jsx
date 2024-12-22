const ValidPas = ()=><h1>Valid Pass</h1>;
const InvalidPas =()=><h1>Invalid pass</h1>;

const Pass =({isValid})=>{
    return isValid ? <ValidPas/>:<InvalidPas/>;
};

function Ternary(){
    return (
        <>
         <Pass isValid={true}/>
        </>
    );
}

export default Ternary;