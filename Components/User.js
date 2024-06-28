import { View, Text } from 'react-native'
import React from 'react'

export default function User(props) {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  )
}