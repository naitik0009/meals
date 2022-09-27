import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const RestroInfo = ({ restaurants = {} }) => {
    let i  = 0;
    const {
        name = "Birta sweets",
        icon = "cafe",
        address = "Birta-6 Birgunj",
        isOpen = true,
        photos = "ffff",
        rating = 2, isClosedTemproraly = true,
    } = restaurants;
    const arr = Array.from(new Array(Math.ceil(rating)));
    return (
        <Card elevation={5} style={styles.card}>

            <Card.Cover style={[{ padding: 15 }, { backgroundColor: "white" }]} source={{ uri: 'https://picsum.photos/700' }} />

            <Card.Content>
                <Text>Some restaurant</Text>

                <View style={[{ justifyContent: "space-between" }, { flexDirection: "row" }]}>
                    <View style={[{ flexDirection: "row" },]}>
                        {arr.map(() => { return <Avatar.Image key={i++} size={15} source={require('../../../assets/star.png')} /> })}

                    </View>
                    <View>
                        <View style={[{ flexDirection: "row" },]}>
                        {isClosedTemproraly?<Text style={[{color:"red"},{fontSize:8},{padding:3}]}>Is Closed Temporarely</Text>:<Text></Text>}
                            <Avatar.Image size={15} source={require('../../../assets/star.png')} />
                           
                        </View>
                    </View>
                </View>
                <Text>{address}</Text>
            </Card.Content>


        </Card>
    );
}


const styles = StyleSheet.create({
    card: { marginLeft: 12, marginRight: 12,marginBottom:20 },
});

export default RestroInfo;