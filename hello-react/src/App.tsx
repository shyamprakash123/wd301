import React from 'react';
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
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohith S" />
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohith M" />
          <div className='btn'>+ New task</div>
        </div>

        <div className='TaskContent'>
          <h1 className='text-2xl font-bold'>Done</h1>
          <TaskCard title="Design the mockup" completedAtDate ="10th April" assigneeName="Rohith M" />
          <TaskCard title="Get the approval from pincipal" completedAtDate ="20th April" assigneeName="Ajay S" />
        </div>
      </div>
    </div>
  );
}

export default App
