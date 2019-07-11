import React, { Component } from 'react'
import {  StyleSheet,Text,View ,Button } from 'react-native'

export default class Home extends React.Component {
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View style={styles.MainContainer}>
              <Text style={styles.text}>StartDev</Text>
              <Text style={styles.text}>Star Wars</Text>
              <Text style={styles.text}>EXPLOR</Text>
        <View style={styles.button}>
        <Button 
            color ="#B22222"
          title="Start"
          onPress={() => navigate('Planets')}
        />
        </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#474d44'
    },
    text: {
        marginLeft: 30,
        marginRight: 30,
        fontSize: 35,
        color : "#ffffff" ,

      },
    button: {
        marginLeft: 30,
        marginRight: 30,
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });