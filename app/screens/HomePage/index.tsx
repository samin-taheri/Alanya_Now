import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import Geolocation from '@react-native-community/geolocation';
import AppHorizontalChallengeCard from '@/components/Common/AppHorizontalCard.tsx';
import { ScrollView } from 'react-native-gesture-handler';
import AppMapView from '@/components/AppMapView';
import AppCommercialCard from '@/components/AppCommercialCard';
import AppServices from '@/components/AppServices';

interface Location {
  latitude: number;
  longitude: number;
}

const HomePage = () => {
  const navigation = useNavigation<HomeStackNavigationPropsType>();
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null);
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
      <ScrollView>
        <View style={{ marginBottom: '25%' }}>
          <AppHorizontalChallengeCard />
          <AppCommercialCard title="Location" backgroundImage={require('../../assets/images/challenge-5.jpg')} />
          <AppServices />
          <AppMapView />
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
  },
  copyIcon: {
    marginLeft: 10,
    fontSize: 20,
  },
});

