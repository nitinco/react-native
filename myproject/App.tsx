import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  



} from 'react-native'
function App() {
  return(
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.text} >hello praveen! </Text>
      <Text>hello i am nitin</Text>
    </View>
  </SafeAreaView>
  
  
  );
  



}
const styles =StyleSheet.create(
  {

    container:{
      // flex:1,
      // justifyContent:'center',
      alignItems:'center'
    },
    text:{
      marginTop:54,
      backgroundColor:'blue',
      fontSize:25,
      fontWeight:'bold',
      color:'red',
      textAlign:'center'
    },



  }
);


export default App;