import React, { useEffect, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import AppCustomHeader from '@/components/Common/AppCustomHeader';
import Geolocation from '@react-native-community/geolocation';
import AppHorizontalChallengeCard from '@/components/Common/AppHorizontalCard.tsx';
import { ScrollView } from 'react-native-gesture-handler';
import AppMapView from '@/components/AppMapView';

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
        <AppHorizontalChallengeCard />
        <AppMapView />
      </ScrollView>
    </React.Fragment>
  );
};


export default HomePage;

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  mapContainer: {
    height: 230,
    zIndex: -1,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  scrollContainer: {
    padding: 16,
  },
  map: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderRadius: 12,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  scanButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  scanButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  noDevicesText: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
  },
  deviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deviceItem: {
    marginBottom: 10,
  },
  deviceName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  deviceInfo: {
    fontSize: 14,
  },
  deviceButton: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  listHeader: {
    padding: 8,
    color: 'black',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
    padding: 8,
    textAlign: 'center',
    color: 'black',
  },
  btnContainer: {
    marginTop: 10,
    marginHorizontal: 16,
    bottom: 10,
    alignItems: 'flex-end',
  },
  divider: {
    height: 1,
    width: '100%',
    marginHorizontal: 8,
    backgroundColor: '#1A1A1A',
  },
});

