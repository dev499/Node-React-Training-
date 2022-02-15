import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{fontFamily:'cursive', color:'#d3d31e'}}>Todo List</h1>
        <AddTodo/>
        <List/>
      </header>
    </div>
  );
}

export default App;
