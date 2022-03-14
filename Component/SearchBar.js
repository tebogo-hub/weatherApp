import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Dimensions, } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ fetchWeatherData}) {

    const [cityName, setCityName] = useState('')
    return (
        <View style={styles.SearchBar}>
            <TextInput placeholder="  Enter City Name " value={cityName}onChangeText={(text) => setCityName(text)}  style={styles.SearchBar2}/>
            <AntDesign name="search1" size={24} color="black" onPress={() =>fetchWeatherData(cityName)} />
        </View>
    )
}

const styles = StyleSheet.create({
    SearchBar:{
        marginTop:'10%',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width:Dimensions.get('screen').width - 30,
        paddingVertical: 20,
        borderRadius: 25,
        marginHorizontal: 20,
        backgroundColor: 'lightgray',
        bordercolor: 'lightgray', 
    },
    SearchBar2:{
        outlineColor: 'lightgray',
        height: '100%',
       width: '80%',
       outline: 'none',
       borderRadius: 25,
    }
   
})


