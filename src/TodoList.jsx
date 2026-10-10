function TodoList() {
  const todoList = [
    {id: 1, title: "Clean the house"}, 
    {id: 2, title: "Do dishes"}, 
    {id: 3, title: "Complete CTD assignment"}
  ];
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;