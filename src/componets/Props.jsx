const Props =(props)=>{
  return (
     <section>
         <h1>Name:{props.name}</h1>
         <h3>Hobbies:{props.hobbies}</h3>
         <p>{props.realData}</p>
     </section>
  );
};

export default Props;