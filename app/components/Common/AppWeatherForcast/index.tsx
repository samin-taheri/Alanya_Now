import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, Animated, Pressable, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppLable from '../AppLable';
import AppSocialShare from '../AppSocialShare';
import AppCurrency from '../AppCurrency';
import moment from 'moment';

const apiKey = 'e18b37f861714f979df122635233011';

const AppWeatherForecast: React.FC = ({ }) => {
    const [weatherData, setWeatherData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const scaleValue = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.9,
            friction: 5,
            tension: 40,
            useNativeDriver: false,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: false,
        }).start();
    };

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Alanya&aqi=no`
                );

                if (response.ok) {
                    const data = await response.json();
                    setWeatherData(data);
                } else {
                    console.error('Error fetching weather data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (!weatherData) {
        return (
            <View style={styles.container}>
                <Text>Error fetching weather data</Text>
            </View>
        );
    }

    const { location, current } = weatherData;
    // const localDateTime = moment().utcOffset(current.last_updated_epoch / 60).format('LL');
    const formattedDate = moment(location.localtime).format('MMMM D');

    return (
        <View style={{ padding: 8 }}>
            <AppLable title="Weather" />
            <View style={{ flexDirection: 'row' }}>
                <Animated.View
                    style={[
                        {
                            transform: [{ scale: scaleValue }],
                        },
                    ]}
                >
                    <Pressable onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <LinearGradient
                            colors={['#3498db', 'white']}
                            style={styles.cardContainer}
                            start={{ x: 0.4, y: 1 }}
                            end={{ x: 1.7, y: 0 }}
                        >
                            {/* <Text style={styles.text3}>{location.name}, {location.country}</Text> */}
                            <Text style={styles.text3}>{formattedDate}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>{Math.round(current.temp_c)}°</Text>
                                <Image
                                    source={{ uri: `https:${current.condition.icon}` }}
                                    style={styles.weatherIcon}
                                />
                            </View>
                            <Text style={styles.text2}>{current.condition.text}</Text>
                        </LinearGradient>
                    </Pressable>
                </Animated.View>
                <View style={{ flexDirection: 'column', flex: 1 }}>
                    <AppSocialShare />
                    <AppCurrency />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        padding: 16,
        backgroundColor: '#3498db',
        borderRadius: 12,
        margin: 10,
        width: 200,
        height: 160
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white'
    },
    weatherIcon: {
        width: 80,
        height: 80,
        top: 0,
        left: 20
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        paddingTop: 20
    },
    text2: {
        color: 'white',
        fontSize: 18,
    },
    text3: {
        color: 'white',
        fontSize: 18,
    }
});

export default AppWeatherForecast;
