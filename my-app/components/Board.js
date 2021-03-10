import { Button } from 'react-native-paper'
import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useSelector } from 'react-redux'
export default function Board({solveGame, validateImput }) {
  const board = useSelector(state => state.board)
  const [localBoard, setBoard] = useState([])
  const changeInput = (input, row, col) => {
    if (input == ''|| input === NaN) {
      input = 0
    }

    const newBoard = JSON.parse(JSON.stringify(localBoard))
    newBoard[row][col] = +input
    setBoard(newBoard)
  }

  useEffect(() => {
    setBoard(board)
  }, [board])
  return (
    <View style={styles.container}>
      {
        localBoard?.map((rows, rowsId) => {
          const row = rows.map((col, colId) =>
            <TextInput
              keyboardType="numeric"
              key={colId}
              style={{ borderWidth: 1, color:'black' , textAlign:'center', width:40, height:40, backgroundColor: board[rowsId][colId] === 0? 'white':'#a6f0c6',  }}
              value={col === 0 ? '' : col.toString()}
              onChangeText={(input) => changeInput(input, rowsId, colId)}
              editable={!board[rowsId][colId]?true:false}
              maxLength={1}
               />
          )
          return (
            <View style={{ flexDirection: 'row' }} key={rowsId}>
              {row}
            </View>
          )
        })
      }
      <View style={styles.buttonGroup}>
        <Button onPress={() => validateImput(localBoard)} >Submit</Button>
        <Button onPress={() => solveGame(board)} >Auto Solve</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    marginTop: 20,
    flexDirection: 'row',
    width: 400,
    justifyContent: 'center'
  }
})