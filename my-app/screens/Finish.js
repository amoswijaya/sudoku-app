import { Button, View, Text, StyleSheet } from 'react-native'
import React from 'react';
export default function Finiss({route,navigation}) {
  const {namePlayer} = route.params
  return (
    <>
    <View style={styles.container}>
    <View style={{alignItems:'center'}}>
    <Text style={styles.title}> YOU WIN!!</Text>
    <Text style={styles.text}>CONGRATS {namePlayer.toUpperCase()}</Text>
    </View>
      <Button
        title="Back TO Home"
        onPress={() => navigation.navigate('Home')}
        color='#7868e6'
      />
    </View>
    </>
  )    
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    color:'#b8b5ff'
  },
  container: {
    flex:1,
    alignItems:'center',
    justifyContent: 'space-around',
    backgroundColor: '#e4fbff'
  },
  text: {
    fontSize: 20

  }
})