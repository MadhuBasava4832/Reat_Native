import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { ActivityIndicator, Button, FlatList, ScrollView, Switch, TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {

  const data = [1,2,3,4,5,6,7,8]


  return (
    <View style={styles.container2} >
      <ScrollView>

      <Text>this is first app . yeah it is working</Text>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBeCmLbPq3t83GPbJkqHm1_QsFTTqqSUF7A&s"}} Style={{width:300,height:300}} />
        <Image source={require("./assets/itachi.jpg")} style={{width:200,height:200}} />
       <StatusBar style="auto" />




        {/* 23-12-2024 */}

    {/* <TextInput placeholder='Enter password' secureTextEntry={} /> */}
    <ScrollView >
    <TextInput placeholder='Enter name' />
    <TextInput placeholder='Enter number' keyboardType='numeric' />
    <TextInput placeholder='Enter password' secureTextEntry={true} />
    </ScrollView>

      <FlatList 
        // data = {data} renderItem = {({item}) => <Text>{item}</Text>}
        data = {data} renderItem = {({item}) => 
        <View style={styles.sizepenchu} >
          <Text>{item}</Text>
        </View>}
        numColumns={3}
      />

      <Button title='click' />
      <TouchableOpacity>
        <Text > click here </Text>
      </TouchableOpacity>
      <Switch value={false} />
      <Switch value={true} />
      <ActivityIndicator size={'large'} color='green' />

      

      








    </ScrollView>
     </View>
   );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    minWidth:300,
    minHeight:200,
    border:"1px solid black",
    fontSize:"32px",
  },
  sizepenchu:{
    // display:"flex",
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:100,
  },
});