import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppLable from "../AppLable";
import AppBackgroundImageCard from "../AppBackgroundImageCard.tsx";

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

interface CochingCardProps {
}
const AppHorizontalChallengeCard: React.FC<CochingCardProps> = ({ }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cardData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <AppBackgroundImageCard
                        imageSource={item.imageSource}
                        title={item.title}
                        id={item.id}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8
    },
});

export default AppHorizontalChallengeCard;
