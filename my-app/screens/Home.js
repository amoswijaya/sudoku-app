import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import { fetchBoard } from '../store/action';
import { useDispatch } from 'react-redux'
import { TextInput, Title } from 'react-native-paper';
import React, { useState } from 'react';

export default function Home({ navigation }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [difficultyOp] = useState(['hard', 'medium', 'easy', 'random'])
  const choiceLevel = (level) => {
    dispatch(fetchBoard(level))
  }
  if(!name) {
    setName('anonymouse')
  }
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#e4fbff' }}>
        <Title style={styles.title}>SUGOKU</Title>
        <TextInput
          style={{  width: 250, height: 40, backgroundColor:'#e4fbff', textAlign: 'center' }}
          placeholder='Enter your name'
          onChangeText={name => setName(name)}
        />
        {difficultyOp.map((difficulty, i) =>
          <Button
            key={i}
            nameDifficulty={difficulty}
            choiceLevel={level => choiceLevel(level)}
            namePlayer={name}
            navigation={navigation}
          />)}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    marginBottom:50,
    color: '#b8b5ff',
    fontSize: 30
  }
})