import {Header, Content, Total} from '../App'


const Course = (props) => {
  return (
  <>
  <Header course={props.course.name}/>
  <Content parts={props.course.parts}/>
  <Total parts={props.course.parts}/>


  </>
  )
}

export default Course