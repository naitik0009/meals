import React , {useState} from "react";
import { StyleSheet, Text, SafeAreaView, Platform, View, StatusBar,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestroInfo from "../components/restro-info";
const isAndroid = Platform.OS === "android";
const RestroScreen= ()=>{
    const [search,setSearch]  = useState(null);
    return(  <SafeAreaView style={[{ flex: 1 },{marginTop:isAndroid?StatusBar.currentHeight:0}]}>
        <View style={styles.container} >
          <Searchbar placeholder='search'
          onChangeText={(data)=>{setSearch(data)}}
          value={search}
          />
        </View>
        <View style={styles.container1}>
        <FlatList
        data={[{name:1},{name:2},{name:3},{name:4}]}
        renderItem={()=> (<RestroInfo/>)}
        keyExtractor={item => item.name}
        contentContainerStyle={[{padding:15}]}
      />
          
        </View>
      </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
      padding:15,
      backgroundColor: 'white',
      alignItems: "flex-start",
    },
  
    container1: {
      paddingTop: 10,
      flex: 2,
      backgroundColor: "white",
    }
  
  });
  
  export default RestroScreen;