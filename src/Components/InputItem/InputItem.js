
import React, { useState, useContext } from 'react';
import { TaskContext } from '../Context/TaskContextProvider'
import styles from './InputItem.module.css';

const InputItem = () => {
  const [todos, setTodos] = useContext(TaskContext);
  const [todoName, setTodoName] = useState(' ');

  const handleChange = (e) => {
    setTodoName(e.target.value.toLowerCase())
  };

  const addTodo = (e) => {
    e.preventDefault();

    setTodoName('');
    setTodos([...todos, { name: todoName, complete: false }])
  };

  return (
    <form autoComplete='off' onSubmit={addTodo} className={styles.form}>
      <input className={styles.input}
        type='text'
        name='todos'
        id='todos'
        placeholder={'Напиши и сделай'}
        required
        value={todoName}
        onChange={handleChange}
      />
      <button className={styles.button} type='submit'>Создать</button>
    </form>
  );
}

export default InputItem;
