import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Details extends React.Component {
    render() {
        const planet = this.props.navigation.state.params.planet;
      return (
          
        <View style ={styles.MainContainer}>
            <View style ={styles.Container}>
            <Text style ={{fontSize : 25 , marginBottom : 15 , marginTop :15 ,  color : "#ffffff" ,}}>{planet.name}</Text>
            <View style={styles.containers}><Text style={styles.title}>Rotation Period : </Text><Text style={styles.value}>{planet.rotation_period}</Text></View>
            <View style={styles.containers}><Text style={styles.title}>Orbital Period : </Text><Text  style={styles.value}>{planet.orbital_period}</Text></View>
            <View style={styles.containers}><Text style={styles.title}>diameter : </Text><Text style={styles.value}>{planet.diameter}</Text></View>
            <View style={styles.containers}><Text style={styles.title}>climate : </Text><Text style={styles.value}>{planet.climate}</Text></View>
            </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      backgroundColor: '#474d44'
    },
    Container: {
        flex: 1,
        marginLeft : 10
      },
      containers: {
        flexDirection: 'row',
      },
    title: {
        fontWeight : 'bold',
        fontSize : 15 ,
        color : "#ffffff" ,

      },
      value: {
        fontSize : 13 ,
        color : "#ffffff" ,

      },

  });