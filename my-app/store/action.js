const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? '' : '%2C'}`, '')

const encodeParams = (params) =>
  Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

export function SetBoard(payload) {
  return { type: 'BOARD/SETBOARD', payload }
}

export function SetStatus(payload) {
  return { type: 'BOARD/SETSTATUS', payload }
}

export function SetLoading(payload) {
  return { type: 'LOADING/SETLOADING', payload }
}



export function fetchBoard(difficulty) {
  return async dispatch => {
    try {
      const res = await fetch(`https://sugoku.herokuapp.com/board?difficulty=${difficulty}`)
      const data = await res.json()
      dispatch(SetBoard(data.board))
    } catch (err) {
      console.log(err)
    }
  }
}

export function solveGame(payload) {
  const obj = { board: payload }
  return async dispatch => {
    dispatch(SetLoading(true))
    try {
      const res = await fetch('https://sugoku.herokuapp.com/solve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodeParams(obj)
      })
      const data = await res.json()
      dispatch(SetLoading(false))
      dispatch(SetBoard(data.solution))
    } catch (err) {
      console.log(err)
    }
  }
}

export function validateImput(payload) {
  const obj = { board: payload }
  return async dispatch => {
    try {
      dispatch(SetLoading(true))
      const res = await fetch('https://sugoku.herokuapp.com/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodeParams(obj)
      })
      const data = await res.json()
      dispatch(SetLoading(false))
      dispatch(SetStatus(data.status))
    } catch (err) {
      console.log(err)
    }
  }
}