const ValidPass = () =><h1>Valid Password</h1>;
const InvalidPass = () => <h1>Invalid Password</h1>;


const Password =({isValid})=>{
    if(isValid){
        return <ValidPass/>;
    }
    return <InvalidPass/>;
}

function ConditionalRender(){
   return (
     <>
        <Password isValid={true}/>
     </>
   )
}