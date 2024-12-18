const PropsD = ({img,name,hobbies,children})=>{
    return (
        <section>
            <h1>Image:{img}</h1>
            <h2>Name:{name}</h2>
            <h3>Hobbies:{hobbies}</h3>
            {children}
        </section>
    );              
};

export default PropsD;