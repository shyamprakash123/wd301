import TaskCard from './TaskCard'
import './TaskCard.css'
function App() {
  return (
    <div className='temp'>
      <h1 className='ml-5 text-4xl font-semibold '>Smarter Tasks</h1>
      <p className='ml-5 text-sm font-bold mb-5'>Project: <span className='text-sm font-thin'>Garduation Final Year Project (revamp College Website)</span></p>
      <div className='main'>
        <div className='TaskContent'>
          <h1 className='text-2xl font-bold'>Pending</h1>
          <TaskCard title="Build the website with static content" due="10th April" assig="Rohith S" />
          <TaskCard title="Add a blog" due="22nd March" assig="Rohith M" />
          <div className='btn'>+ New task</div>
        </div>

        <div className='TaskContent'>
          <h1 className='text-2xl font-bold'>Done</h1>
          <TaskCard title="Design the mockup" completed="10th April" assig="Rohith M" />
          <TaskCard title="Get the approval from pincipal" completed="20th April" assig="Ajay S" />
        </div>
      </div>
    </div>
  );
}

export default App
