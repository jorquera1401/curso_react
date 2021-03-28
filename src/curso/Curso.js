import Header from './Header';  

const Curso = ({course})=>{
  console.log(course);
  return(
    <div>
      <Header course={course}/>
    </div>
  )
}

export default Curso;
