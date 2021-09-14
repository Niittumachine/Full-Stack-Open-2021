import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course={course} /></h1>
      <Content />
      <p>
        <Total number={exercises1 + exercises2 + exercises3}/>
      </p>
    </div>
  );
}

const Header = (props) => {

  return (
    <div>
      {props.course}
    </div>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Part part={part1} exer={exercises1}/>
      <Part part={part2} exer={exercises2}/>
      <Part part={part3} exer={exercises3}/>
    </div>
  )
}

const Total = (props) => {

  return (
    <div>
      <p>Number of exercises {props.number}</p>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
      {props.part} {props.exer} 
    </div>
  )
}

export default App;
