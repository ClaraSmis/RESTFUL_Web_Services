import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ course }) => {
  const Total_exercises = course.parts.reduce((sum,part) => {return sum+part.exercises}, 0)
return(
<>
<strong> total of {Total_exercises} exercises</strong>
</>
)
}

const Part = ({ part }) =>
  <>
<p>
  {part.name} {part.exercises}
</p>
  </>
  
 

const Content = ({ course }) =>{
  return(
    <>
    {course.parts.map(part => <Part key={part.id} part={part} />)}    
  </>
  )

}

  

  const Course = ({course}) =>{
    return(
        <>
          <Header course={course} />
          <Content course={course} />
          <Total course= {course}/>
        </>

      )
  }
  
  export default Course