import React from 'react';
import { StyleSheet
        , Text
        , View
        , StatusBar
        , TextInput
        , Dimensions
        , Platform
        , ScrollView
         } from 'react-native';

import ToDo from "./ToDo.js";

const{ height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: ""
  };

  render() {

  const { newToDo } = this.state;
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "light-content" />
      <Text style={styles.title}>myPlanner</Text>
      <View style={styles.card}>
        <TextInput 
        style={styles.input} 
        placeholder={"New To Do"} 
        value={newToDo}
        onChangeText={this._controlNewToDo} 
        placeholderTextColor={"#999"}
        returnKeyType = {"done"}
        autoCorrect={false}
        />
        <ScrollView>
          <ToDo />
        </ScrollView> 
      </View> 
    </View>
  );
 }
  _controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }

}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
  },
  title: {
    color: "black",
    fontSize : 30,
    marginTop: 50,
    marginBottom : 50,
    fontWeight: "400"
  },
  card: {
    backgroundColor : "white",
    flew : 1,
    width: width - 25,
    hegith : height - 5,
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    ...Platform.select ({
      ios: {
        shadowColor : "rgb(50,50,50)",
        shadowOpactity: 0.5,
        shadowRadius:5,
        shawdowOffset: {
          height :-1,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding : 18,
    borderBottomColor : "#bbb",
    borderBottomWidth: 1,
    fontSize: 15
  }
});
