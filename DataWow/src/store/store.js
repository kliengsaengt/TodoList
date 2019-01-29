import { createStore } from 'redux'
import allReducers from '../reducer'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()
const store = createStore(
  allReducers,
  persistedState,
)

store.subscribe(() => {
  saveState(
    store.getState()
  )
})

export { store }
