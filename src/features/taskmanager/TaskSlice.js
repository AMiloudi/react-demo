import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  filter: 'all',
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newId = state.tasks.length ? Math.max(...state.tasks.map(t => t.id)) + 1 : 1
      const newTask = {
        id: newId,
        name: action.payload,
        isDone: false,
      }
      state.tasks.push(newTask)
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload)
      if (task) task.isDone = !task.isDone
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(t => t.id !== action.payload)
    },

    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const {
  addTask,
  toggleTask,
  deleteTask,
  setFilter,
} = taskSlice.actions


export const selectAllTasks = (state) => state.task.tasks
export const selectActiveTasks = (state) => state.task.tasks.filter(t => !t.isDone)
export const selectCompletedTasks = (state) => state.task.tasks.filter(t => t.isDone)
export const selectFilter = (state) => state.task.filter

export default taskSlice.reducer
