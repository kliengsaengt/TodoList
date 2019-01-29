import { v4 } from 'node-uuid'

export const addTodo = (text, description, date) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
  description,
  date,
})

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id,
})

export const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  id,
})

export const toggleTodo = (id, show) => ({
  type: 'TOGGLE_TODO',
  id,
  show,
})

export const changeTitle = (id, text) => ({
  type: 'CHANGE_TITLE',
  id,
  text,
})

export const changeDesc = (id, description) => ({
  type: 'CHANGE_DESC',
  id,
  description,
})
