import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBaackground } from 'react-native';
import Weather from './Component/Weather'
import SearchBar from './Component/SearchBar'


const API_KEY = "b4284048f740d6cda37486a5dd0028e8"


export default function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  async function fetchWeatherData(cityname) {
    setLoaded(false);
  
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`
    try {
      const response = await fetch(API)
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);

      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchWeatherData('Kimberley');
    console.log(weatherData);

  }, [])

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="green" size={36}/> 
        

      </View>
    )
  }
  else if (weatherData === null) {
    return (
      <View>

        <SearchBar fetchWeatherData={fetchWeatherData}/>
        <Text style={styles.primaryText}>No weather data</Text>

      </View>
    )

  }

  return (
    <View style={styles.container}>
      <Weather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  primaryText:{
    margin:20,
    fontSize:28,
  }
});
