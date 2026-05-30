import Course from './components/Course'

export const Header = (props) => <h1>{props.course}</h1>

export const Content = (props) => (
  <div>

    {props.parts.map(part => <Part key={part.id} part={part}/>)}

  </div>
)

export const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

export const Total = (props) => {
  const count = props.parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <div>
      total of {count} exercises
    </div>

  )
}




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course course={course} key={course.id}/>)}
    </div>
  )
}
export default App
