import './App.css';
import Logo from './static/Logo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Logo />
      <div className='task-list'>
        <h2>My Tasks</h2>
        <TaskList />
      </div>
    </div>
    
  );
}

export default App;
