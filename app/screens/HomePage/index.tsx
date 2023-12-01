import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, Share, Alert, Button, ScrollView } from 'react-native';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import Geolocation from '@react-native-community/geolocation';
import AppHorizontalChallengeCard from '@/components/Common/AppHorizontalCard.tsx';
import AppMapView from '@/components/Common/AppMapView';
import AppCommercialCard from '@/components/Common/AppCommercialCard';
import AppServices from '@/components/Common/AppServices';
import AppWeatherForecast from '@/components/Common/AppWeatherForcast';
import AppEventsCard from '@/components/Common/AppEventsCard';

interface Location {
  latitude: number;
  longitude: number;
}

const HomePage = () => {
  const navigation = useNavigation<HomeStackNavigationPropsType>();
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
  const [data, setData] = useState([]);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setCurrentLocation({ latitude, longitude })
    },
      error => {
        console.log(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )
  }

  useEffect(() => {
    getCurrentLocation();
  }, [])


  return (
    <React.Fragment>
      <StatusBar />
      <AppCustomHeader navigation={navigation} onLogo={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: '25%' }}>
          <AppHorizontalChallengeCard />
          <AppCommercialCard title="Alanya Now" backgroundImage={require('../../assets/images/challenge-5.jpg')} />
          <AppWeatherForecast />
          <AppMapView />
          <AppServices onPress={(id) => navigation.navigate(Routes.SERVICES_DETAILS, { id })} />
          <AppEventsCard />
        </View>
      </ScrollView>
    </React.Fragment>
  );
};


export default HomePage;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  copyIcon: {
    marginLeft: 10,
    fontSize: 20,
  },
});

