import React , {useState,useContext} from "react";
import { StyleSheet, Text,ActivityIndicator, SafeAreaView, Platform, View, StatusBar,FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import RestroInfo from "../components/restro-info";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";


const isAndroid = Platform.OS === "android";

const RestroScreen= ()=>{
    const [search,setSearch]  = useState(null);
    const resturantContext = useContext(RestaurantContext);

    console.log(resturantContext.restro,"here is state")
    return( 
      <SafeAreaView style={[{ flex: 1 },{marginTop:isAndroid?StatusBar.currentHeight:0}]}>
        <View style={styles.container} >
          <Searchbar placeholder='search'
          onChangeText={(data)=>{setSearch(data)}}
          value={search}
          />
        </View>
        <View style={styles.container1}>
       {resturantContext.isLoading?<View style={{flexDirection:"column"}}><ActivityIndicator style={{marginTop:100}}  size="large" color="black"/><Text style={{textAlign:"center",fontSize:15,margin:5}}>Loading</Text></View> : <FlatList 
        data={resturantContext.restro}
        renderItem={()=> (<RestroInfo/>)}
        keyExtractor={item => item.name}
        contentContainerStyle={[{padding:15}]}/> } 
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