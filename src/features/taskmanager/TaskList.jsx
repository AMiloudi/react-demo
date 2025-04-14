import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectAllTasks,
  selectActiveTasks,
  selectCompletedTasks,
  selectFilter,
} from './TaskSlice'
import TaskItem from './TaskItem'

const TaskList = () => {
  const filter = useSelector(selectFilter)

  const tasks = useSelector((state) => {
    switch (filter) {
      case 'active':
        return selectActiveTasks(state)
      case 'completed':
        return selectCompletedTasks(state)
      default:
        return selectAllTasks(state)
    }
  })

  return (
    <div className="p-4 border rounded-2xl shadow-xl bg-teal-600 max-w-lg mx-auto mt-4">
      <h2 className="text-lg font-semibold text-white mb-4 text-center">Takenlijst</h2>

      {tasks.length > 0 ? (
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center">
          <span>Er zijn op dit moment geen taken.</span>
        </div>
      )}
    </div>
  )
}

export default TaskList
