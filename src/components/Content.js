
const Targeta=(props)=>{
  return(
    <>
      <h3>{props.name}</h3>
      <p>Ejercicio N° {props.exercises} </p>
    </>

  );
}
const Hello =({age,name})=>{
  
  const bornYear=()=>{
    const yearNow=new Date().getFullYear();
    return yearNow - age
  }
  return (
    <div>
      <p>
        Hola {name} tu tienes {age} de edad
      </p>
      <p>Tu naciste en {bornYear()}</p>
    </div>
  )
}

const Content =(props)=>{
  const cuorse = "Medio Desarrollo Aplicacion";
  const part1={
    name:'Fundamentos de REACT',
    exercises:10
  }
  const part2={
    name:'Usando props para el envio de datos',
    exercises:7
  }
  const part3={
    name:'Estado del componente',
    exercises:14
  }
  const parts=[
    {
      name:'Funamentos de ALgoritmos',
      exercises:33
    },
    {
      name:'Gestion de Base de Datos',
      exercises:12
    },
    {
      name:'Arquitectura de Computadoras',
      exercises:10
    }
  ]
  const name='Pedro';
  const age=10;

  const lista = parts.map(p=><Targeta name={p.name} exercises={p.exercises}/>)
  return( 
  <>
    <p>Este es el contenido de la pagina</p>
    <p>Hora: {props.date}</p>
    <Hello name={name} age={age}/>
    <Targeta name={part2.name} exercises={part2.exercises}/>

    <Targeta name={part1.name} exercises={part1.exercises}/>

    <Targeta name={part3.name} exercises={part3.exercises}/>
    {lista}
 
    
  </>
  );
}

export default Content;
