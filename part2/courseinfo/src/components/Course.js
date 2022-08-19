const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} part={part} />
        )
      })}
    </>
  )
}


const Course = ({course}) => {
  console.log(course)
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  )
}

export default Course

