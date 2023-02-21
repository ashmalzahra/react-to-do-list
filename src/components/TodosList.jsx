import TodoItem from './TodoItem';

const TodosList = ({ todosProps, setToDos, delItem, setUpdate}) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setToDos={setToDos} delItem={delItem} setUpdate={setUpdate}/>
    ))}
  </ul>
);
export default TodosList;
