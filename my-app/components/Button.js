import React from 'react';
import { Button } from 'react-native-paper';

export default ({ nameDifficulty, choiceLevel, namePlayer, navigation }) => {
  return (
    <Button onPress={() => {
      choiceLevel(nameDifficulty)
      navigation.navigate('Game', {
        namePlayer,
        nameDifficulty
      })
    }}
    color='#7868e6'
    >
      {nameDifficulty}
    </Button>
  )
}