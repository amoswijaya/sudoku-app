import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
const initState = {
  board: [],
  status: '',
  loading: false,
}

function reducer(state = initState, action) {
  const { type, payload } = action

  switch (type) {
    case 'BOARD/SETBOARD':
      return { ...state, board: payload }
    case 'BOARD/SETSTATUS':
      return { ...state, status: payload }
    case 'LOADING/SETLOADING':
      return { ...state, loading: payload }
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(Thunk))

export default store