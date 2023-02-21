import { v4 as uuidv4 } from 'uuid';

import { useState } from 'react';
import InputToDo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setToDos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },

  ]);
  const delItem = (id) => {
    setToDos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };
  const addItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setToDos([...todos, newToDo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setToDos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <InputToDo addItem={addItem} />
      <TodosList todosProps={todos} setToDos={setToDos} delItem={delItem} setUpdate={setUpdate}/>
    </div>
  );
};

export default TodosLogic;
