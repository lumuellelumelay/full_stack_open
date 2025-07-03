import { React } from 'react'

const Header = (course) => {
  return (
    <h1>{course.course}</h1>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  );
};

const Content = (parts) => {
  const partsArr = Object.entries(parts.parts).map(([key, value]) => {
    return <Part key={key}  part={value.name} exercise={value.exercises} />
  });
  return (
    <div>
      {partsArr}
    </div>
  );
}

const Total = (parts) => {
  return (
    <p>Number of exercises {parts.parts.reduce((acc, curr) => acc + curr.exercises, 0)}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App
