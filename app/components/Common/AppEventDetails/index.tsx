import React from 'react';
import { View, StyleSheet, ImageBackground, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { COLORS } from '@/theme';
import { Text } from '../..';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppCustomHeader from '../AppCustomHeader';
import { HomeStackNavigationPropsType } from '@/navigation';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import AppMapView from '../AppMapView';
import AppCard from '../AppCard';

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
interface DataItem {
    id: string;
    imageSource: ImageSourcePropType;
}

const AppEventDetails: React.FC = ({ }) => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();
    const route = useRoute();
    const { id } = route.params as { id: string };
    const selectedItem = cardData.find(item => item.id === id);
    if (selectedItem) {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={selectedItem.imageSource} style={styles.image}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                            <Feather name="arrow-left" size={30} color={'#fff'} />
                        </TouchableOpacity>

                    </ImageBackground>
                </View>
                <ScrollView>
                    <View style={{ padding: 8 }}>
                        <AppCard>
                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{selectedItem.title}</Text>
                                <Text style={styles.title2}>{selectedItem.intro}</Text>
                            </View>
                        </AppCard>
                    </View>
                    <AppMapView />
                </ScrollView>
            </View>
        )
    }
    return null;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textContainer: {
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 10
    },
    backButton: {
        position: 'absolute',
        top: '14%',
        left: '2%',
        zIndex: 1,
        padding: 16,
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    cardContent: {
        padding: 10,
        width: '93%',
        marginLeft: '3.5%',
        marginTop: 150,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    introTitle: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'left',
    },
    title2: {
        fontSize: 14,
        padding: 10,
        textAlign: 'left',
        paddingTop: 10
    },
    cardContainer: {
        overflow: 'hidden',
        borderRadius: 12,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        alignContent: 'center',
        marginTop: 5,
        padding: 0,
        width: 120,
    },
});

export default AppEventDetails;


