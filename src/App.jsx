import './App.css'

function App() {
  const todoList = [
    {id: 1, title: "Clean the house"}, 
    {id: 2, title: "Do dishes"}, 
    {id: 3, title: "Complete CTD assignment"}
  ];
  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
