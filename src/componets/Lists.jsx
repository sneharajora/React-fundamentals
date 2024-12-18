function Lists(){
    const numbers = [1,2,3,4,5];
     
    return(
        <>
        {numbers.map((number)=>{
             <ul key={Math.random()}>
                <li>{number}</li>
             </ul>
        })}
        </>
    );
}
export default Lists ;