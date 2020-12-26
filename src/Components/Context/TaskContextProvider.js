import React, { useState, useEffect, createContext } from 'react';

export const TaskContext = React.createContext();

export const TaskContextProvider = (props) => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem('todoStore'))
    if (todoStore) setTodos(todoStore)
  }, []);

  useEffect(() => {
    localStorage.setItem('todoStore', JSON.stringify(todos))
  }, [todos])

  return (
    <TaskContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TaskContext.Provider>
  )
}
