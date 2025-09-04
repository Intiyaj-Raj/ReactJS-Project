import React, { useRef } from 'react'
import Todo from './comp/Todo';

const App = () => {
  const refHeading = useRef();

  return (
    <div>
      <Todo />
  </div>
  )
}

export default App
               