import TodoItem from './TodoItem';

const TodosList = ({ todosProps, setToDos, delItem }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem key={todo.id} itemProp={todo} setToDos={setToDos} delItem={delItem} />
    ))}
  </ul>
);
export default TodosList;
