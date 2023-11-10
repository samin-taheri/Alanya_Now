import React, { useRef } from 'react';
import { View, ImageBackground, StyleSheet, Animated, Pressable } from 'react-native';
import { ImageSourcePropType } from "react-native";
import { COLORS } from '@/theme';
import { Text } from '@/components';

interface AppCommercialCardProps {
    title: string;
    backgroundImage: ImageSourcePropType;
}
const AppCommercialCard: React.FC<AppCommercialCardProps> = ({ title, backgroundImage }) => {
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
    return (
        <View style={{ padding: 8 }}>
            <Animated.View
                style={[
                    {
                        transform: [{ scale: scaleValue }],
                    },
                ]}
            >
                <Pressable style={styles.cardContainer} onPressIn={handlePressIn}
                    onPressOut={handlePressOut}>

                    <ImageBackground source={backgroundImage} style={styles.cardBackground} imageStyle={{ opacity: 0.8 }}>
                        <View style={styles.backgroundOverlay}></View>
                        <View style={styles.cardContent}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </ImageBackground>
                </Pressable>
            </Animated.View>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
        overflow: 'hidden',
        borderRadius: 12,
        margin: 8,
    },
    cardBackground: {
        width: '100%',
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    backgroundOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    cardContent: {
        padding: 14,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: 95,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingRight: '32%',
        color: 'black',
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 80,
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 'auto',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 1,
        paddingLeft: 20,
    },
});

export default AppCommercialCard;