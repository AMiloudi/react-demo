import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter, selectFilter } from './TaskSlice'

const TaskFilter = () => {
  const dispatch = useDispatch()
  const currentFilter = useSelector(selectFilter)

  const buttonBase =
    'text-sm px-4 py-2 rounded-full font-medium border transition duration-300'

  const getClass = (filterType) =>
    currentFilter === filterType
      ? 'bg-teal-600 text-white border-teal-600'
      : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'

  return (
    <div className="flex justify-center gap-4 mt-4">
      <button
        className={`${buttonBase} ${getClass('all')}`}
        onClick={() => dispatch(setFilter('all'))}
      >
        Alle taken
      </button>

      <button
        className={`${buttonBase} ${getClass('active')}`}
        onClick={() => dispatch(setFilter('active'))}
      >
        Actieve taken
      </button>

      <button
        className={`${buttonBase} ${getClass('completed')}`}
        onClick={() => dispatch(setFilter('completed'))}
      >
        Afgeronde taken
      </button>
    </div>
  )
}

export default TaskFilter
