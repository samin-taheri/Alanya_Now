import React, { useRef, useState } from "react";
import { View, StyleSheet, ImageBackground, Pressable, Animated } from "react-native";
import Text from "../Text";
import { useNavigation } from "@react-navigation/native";
import { HomeStackNavigationPropsType, Routes } from "@/navigation";

interface AppBackgroundImageCardProps {
    imageSource: { uri: string };
    title: string;
    id: string;
}
const AppBackgroundImageCard: React.FC<AppBackgroundImageCardProps> = ({
    imageSource,
    title,
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
        width: 150,
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

export default AppBackgroundImageCard;
