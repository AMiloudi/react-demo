import React from 'react';
import TaskInput from '../features/taskmanager/TaskInput';
import TaskFilter from '../features/taskmanager/TaskFilter';
import TaskList from '../features/taskmanager/TaskList';

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-4 space-y-4">
      <TaskInput/>
      <TaskFilter/>
      <TaskList/>
    </div>
  );
}
