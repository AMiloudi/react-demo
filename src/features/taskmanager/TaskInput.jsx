import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from './TaskSlice'

const TaskInput = () => {
  const [newTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!newTask.trim()) return
    dispatch(addTask(newTask.trim()))
    setNewTask('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="p-4 border rounded-2xl shadow-xl bg-teal-50 max-w-lg mx-auto mt-4">
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-8">
        Taak toevoegen
      </h2>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="Vul hier je taak in..."
        className="w-full mb-4 border-2 border-gray-100 p-4 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-600 transition duration-300"
      />

      <button
        onClick={handleSubmit}
        className="flex w-full items-center bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-2">Voeg taak toe</span>
      </button>
    </div>
  )
}

export default TaskInput
