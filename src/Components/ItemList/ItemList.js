
import React, { useContext } from 'react';
import Item from '../Item/Item';
import { TaskContext } from '../Context/TaskContextProvider';
import styles from './ItemList.module.css';


const ItemList = () => {
  const [todos, setTodos] = useContext(TaskContext);

  const switchComplete = (id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.complete = !todo.complete
      }
    })
    setTodos(newTodos)
  }

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos]
    newTodos.forEach((todo, index) => {
      if (index === id) {
        todo.name = editValue
      }
    })
    setTodos(newTodos)
  }

  const handleOnDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul>
      {todos.map((todo, index) => (
        <Item
          key={index}
          todo={todo}
          id={index}
          checkComplete={switchComplete}
          handleEditTodos={handleEditTodos}
          handleOnDelete={handleOnDelete}
        />
      ))}
    </ul>
  )
}

export default ItemList;
