import React from 'react';
import { StyleSheet, FlatList, Text, View , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading: true,
      FlatListItems: [],
    };
  }
  componentDidMount() {
    
    return fetch('https://swapi.co/api/planets/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          FlatListItems: responseJson.results
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  GetItem(item) {
    //Function for click on an item
    this.props.navigation.navigate('Details',{planet : item})
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.FlatListItems}
          //data defined in constructor

          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.item}>
            <View  style={styles.icon1}>
              <Icon name="globe" color='white' size={30} />
              </View>
              <View style={{ flex : 3}}>
              <Text
                style={styles.text}
                >
                {item.name}
              </Text>
              <Text style={{color : "#ffffff" ,}}>Population : </Text><Text style={{color : "#ffffff" ,fontWeight : 'bold'}}>{item.population}</Text>
              <Text style={{color : "#ffffff" ,}}>Diameter : </Text><Text style={{color : "#ffffff" ,fontWeight : 'bold'}}>{item.diameter}</Text>
              </View>
              <View  style={styles.icon}
              
              
              >
                  <TouchableOpacity onPress={() => this.GetItem(item)}>
              <Icon name="angle-right" color='white' size={30} 
              />
              </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    height : 50 ,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },
  item: {
      flex : 1,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#474d44'
  },
  text: {
    fontSize: 18,
    color : "#ffffff",
  },
  icon1: {
    justifyContent: 'center',
      flex : 1,
    marginLeft : 10
  },
  icon: {
    justifyContent: 'center',
      flex : 1,
    
  },
});