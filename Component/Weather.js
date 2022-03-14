import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar } from 'react-native'
import SearchBar from './SearchBar'
// import { haze, rainy, snow, sunny } from '../assets/index';


export default function Weather({ weatherData, fetchWeatherData }) {

    const haze = require('../assets/BackGroundImage/haze.jpg');
    const sunny = require('../assets/BackGroundImage/sunny.jpg');
    const rainy = require('../assets/BackGroundImage/rainy.jpg');
    const snow = require('../assets/BackGroundImage/snow.jpg');


    const [BackgroundImage, setBackgroundImage] = useState(null)

    const { weather,
        name,
        main: { temp, humidity },
        wind: { speed }
    } = weatherData;
    const [{ main }] = weather;
    useEffect(() => {
        setBackgroundImage(getBackgroundImage(main));
    }, [weatherData])

    function getBackgroundImage() {
        if (weather === 'Snow') return snow
        if (weather === 'clear') return sunny
        if (weather === 'Rain') return rainy
        if (weather === 'Haze') return haze
        return sunny;

    }
    let textColor = BackgroundImage !== sunny ? 'white' : 'black';

    return (
        <View style={styles.container}>
            <ImageBackground
                source={BackgroundImage}
                style={styles.background}
                resizeMode='cover'

            >
                <SearchBar fetchWeatherData={fetchWeatherData}/>
                <View style={{ alignItems: 'center', marginTop: '5%' }}>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold', fontSize: '46' }}>{name}</Text>
                    <Text style={{ ...styles.headerText, color: textColor, fontWeight: 'bold' }}>{main}</Text>
                    <Text style={{ ...styles.headerText, color: textColor }}>{temp} °C</Text>
                </View>

                <View style={styles.extrainfor}>
                    <View style={styles.infor}>

                        <Text style={{ fontWeight: 22, color: 'white' }}>Humidity</Text>
                        <Text style={{ fontWeight: 22, color: 'white' }}>{humidity} %</Text>
                    </View>
                    <View style={styles.infor}>

                        <Text style={{ fontWeight: 22, color: 'white' }}>Windspeed</Text>
                        <Text style={{ fontWeight: 22, color: 'white' }}>{speed} m/s</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    background: {
        flex: 1,
        width: Dimensions.get('screen').width,
    },

    headerText: {
        marginTop: 10,
        fontSize: 45,
        color: 'white',
        fontWeight: '100'
    },
    extrainfor:{
        flexDirection:'row',
        marginTop: '5%',
        justifyContent: 'space-Around',
        padding: 10,
    },
    infor:{
        width:Dimensions.get('screen').width/2.5,
        backgroundColor: 'rgba(0,0,0, 0.5)',
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'

    }


});


