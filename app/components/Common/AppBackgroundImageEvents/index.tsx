import React, { useRef } from "react";
import { View, StyleSheet, ImageBackground, Pressable, Animated } from "react-native";
import Text from "../Text";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationPropsType, Routes } from "@/navigation";

const cardData = [
    { id: '1', title: 'Welcome to the app', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-13.jpg') },
    { id: '2', title: 'Discounts and promotions', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-6.jpg') },
    { id: '3', title: 'The Alps', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-17.jpg') },
    { id: '4', title: 'FM radio', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-1.jpg') },
    { id: '5', title: 'Organization catalog', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-3.jpg') },
    { id: '6', title: 'Tour and trips', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-7.jpg') },
    { id: '7', title: 'banner', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-8.jpg') },
    { id: '8', title: 'Currency calculator', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-10.jpg') },
    { id: '9', title: 'Favorites', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-11.jpg') },
    { id: '10', title: 'Profile upgrade', intro: 'HIT is the abbrevation of high intenstity interval training. By altering and repeating short-term high-intensity exercise and low-intensity exercise. HIT can achieve high energy consumption in a short time and keep the body burning fat after training. It is very suitable for urban people with fast pace. ', imageSource: require('../../../assets/images/challenge-12.jpg') },
];

interface AppBackgroundImageCardProps {
    imageSource: { uri: string };
    title: string;
    id: string;
    onPress: (id: string) => void;
}
const AppBackgroundImageEvents: React.FC<AppBackgroundImageCardProps> = ({
    imageSource,
    title,
    id,
    onPress
}) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();
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
        <View style={styles.cardContainer}>
            <Pressable
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                style={styles.card}
                onPress={() => onPress(id)}
            >
                <Animated.View
                    style={[
                        {
                            transform: [{ scale: scaleValue }],
                        },
                    ]}
                >
                    <ImageBackground source={imageSource} style={styles.cardBackground}>
                        <View style={styles.card}>
                            <View style={styles.content}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.title}>{title}</Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </Animated.View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        position: "relative",
    },
    cardBackground: {
        width: 300,
        height: 150,
        borderRadius: 12,
        overflow: "hidden",
        margin: 8,
    },
    card: {
        flex: 1,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: "space-between",
    },
    textContainer: {
        justifyContent: "flex-end",
        marginBottom: 10
    },
    iconContainers: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    iconContainer: {
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        flexDirection: "row",
        alignContent: "flex-end",
        padding: 6,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        color: "#fff",
    },
    description: {
        fontSize: 14,
        color: "#fff",
    },
});

export default AppBackgroundImageEvents;
