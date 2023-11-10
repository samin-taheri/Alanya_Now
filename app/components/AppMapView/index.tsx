import React, { useEffect, useState } from 'react';
import { Dimensions, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AppLable from '../Common/AppLable';

interface Location {
    latitude: number;
    longitude: number;
}

const AppMapView = () => {
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
        <View style={styles.container}>
            <AppLable title="Map" />
            <SafeAreaView style={styles.mapContainer}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 36.54375,
                        longitude: 31.99982,
                        latitudeDelta: 1,
                        longitudeDelta: 1,
                    }}
                    showsUserLocation={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                >
                    <Marker
                        description='Delivery'
                        coordinate={{ latitude: 36.54375, longitude: 31.99982 }} />
                </MapView>
            </SafeAreaView>
            <TouchableOpacity style={{
                marginLeft: '3%',
                marginTop: '2%'
            }}
                onPress={() => Linking.openURL('google.navigation:q=36.54375+31.99982')}>
                <Text style={{ color: '#000', fontSize: 13, fontWeight: 'bold', }}>Open on Maps</Text>
            </TouchableOpacity>
        </View>
    );
};


export default AppMapView;

const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
    },
    mapContainer: {
        height: 230,
        zIndex: -1,
        borderRadius: 12,
        overflow: 'hidden',
        marginLeft: 8,
        marginRight: 8
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

