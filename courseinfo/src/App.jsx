const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  )
}

const Part = ({ excercise }) => {
  return (
    <>
      <p>
        {excercise.name} {excercise.exercises}
      </p>
    </>
  );
};


const Content = ({ content }) => {
  return (
    <div>
      <Part excercise={content[0]} />
      <Part excercise={content[1]} />
      <Part excercise={content[2]} />
    </div>
  )
}

const Total = ({ total }) => {
  return (
    <div>
      <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
    </div>
  )
}


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
      <Header course={course} />
      <Content content={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}


export default App