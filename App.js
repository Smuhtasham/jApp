import {View, Text, Button} from 'react-native';
import React from 'react';
import UserData from './Components/UserData';

export default function App() {
const fruit =(val)=>{
  console.warn(val)
}

  return (
    <View>
      {/* Functional Component Call */}
      <UserData />
      <Text style={{fontSize: 30}}>Hello Text Component</Text>
      <Text style={{fontSize: 20}}>Syed Muhammad Muhtasham</Text>
      <Button title="Press here"></Button>

      <Button title="Press Me too" color={'blue'} onPress={()=>fruit("Hello")}/>
      <Button title="Press Me too" color={'green'} onPress={fruit}/>

    </View>
  );
}

