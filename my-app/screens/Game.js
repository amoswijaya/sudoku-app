import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux'
import { solveGame, validateImput, SetStatus } from '../store/action';
import Board from '../components/Board';
export default function SugokuGame({ route, navigation }) {
  const dispatch = useDispatch()
  const [loadingBoard, setLoadingBoard] = useState(true)
  const { namePlayer, nameDifficulty } = route.params
  const status = useSelector(state => state.status)
  const loading = useSelector(state => state.loading)
  useEffect(() => {
    if (status === 'solved') {
      dispatch(SetStatus(''))
      navigation.push('Finish', { namePlayer })
    } else if (status === 'broken' || status === 'unsolved') {
      Alert.alert(
        '',
        'salah!! coba lagi',
        [{
          text: 'coba lagi', onPress: () => {
            dispatch(SetStatus(''))
          }
        }]
      )
    }
  }, [status])

  useEffect(() => {
    setInterval(() => {
      setLoadingBoard(false)
    },1500)
  }, [])
  const checkValidate = (board) => {
    dispatch(validateImput(board))
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1, justifyContent:'center', backgroundColor:'#e4fbff'}}>
      <View style={styles.container}>
        {loading?<ActivityIndicator color="#7868e6" size="large" />: <View></View>}
        <Text style={styles.text}>NAME: {namePlayer}</Text>
        <Text style={styles.text}>LEVEL: {nameDifficulty}</Text>
      </View>
      {loadingBoard?<ActivityIndicator color="#7868e6" size="large" />:<Board
        solveGame={board => dispatch(solveGame(board))}
        validateImput={board => checkValidate(board)}
      ></Board>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    marginVertical: 40
  },
  text: {
    fontSize: 20,
    fontWeight:'900',
    color:'#7868e6',
    marginHorizontal:20,
    margin:5
  }
})