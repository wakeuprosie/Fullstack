import React from 'react'

const Course = ({ courses }) => {
  return (
    <div>{courses.map(course => <div key = {course.name}>
      <Header course={course} /><Content course={course} /><Total parts={course.parts} />
      </div>
    )}</div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = (props) => {
  const total = props.parts.reduce(
    (prevValue, currentValue) => prevValue + currentValue.exercises,
    0
  )
  return <p><b>total of {total} exercises</b></p>
}

const Part = (props) => {
  return (<p>{props.part.name} {props.part.exercises}</p>)
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <div key = {part.name}><Part part={part} /></div>)}
    </div>
  )
}

export default Course
