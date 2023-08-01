import TaskCard from './TaskCard'
import './TaskCard.css'
function App() {
  return (
    <div>
      <div className='TaskItem'>
        <h1>Pending</h1>
        <TaskCard title="Build Website" />
        <TaskCard title="Add Blog" />
      </div>
      <div className='TaskItem'>
        <h1>Done</h1>
        <TaskCard title="Design the mockup" />
        <TaskCard title="Get approval from pincipal" />
      </div>
    </div>
  );
}

export default App
