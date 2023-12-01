import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '@/theme';
import { Text } from '../..';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppCustomHeader from '../AppCustomHeader';
import { HomeStackNavigationPropsType } from '@/navigation';

const servicesData = [
    { id: '1', title: 'Organizations', icon: 'grid' },
    { id: '2', title: 'Discounts', icon: 'percent' },
    { id: '3', title: 'Events', icon: 'calendar' },
    { id: '4', title: 'Useful Stories', icon: 'star' },
    { id: '5', title: 'Pharmacies', icon: 'plus' },
    { id: '6', title: 'News', icon: 'file-text' },
    { id: '7', title: 'Currency', icon: 'dollar-sign' },
    { id: '8', title: 'Transfer', icon: 'map-pin' },
    { id: '9', title: 'Transactions', icon: 'briefcase' },
    { id: '10', title: 'Photo Reports', icon: 'camera' },
    { id: '11', title: 'Activities', icon: 'sun' },
    { id: '12', title: 'Tours and Trips', icon: 'layers' },
];

const AppServicesDetails: React.FC = ({ }) => {
    const route = useRoute();
    const navigation = useNavigation<HomeStackNavigationPropsType>();
    const { id } = route.params as { id: string };
    const selectedItem = servicesData.find(item => item.id === id);
    if (selectedItem) {
        return (
            <View style={styles.container}>
                <AppCustomHeader title={`Service Detail ${selectedItem.id}`} onBack={() => navigation.goBack()} navigation={navigation} onLogo={false} />
            </View >
        );
    }
    return null;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    copyIcon: {
        marginLeft: 10,
        fontSize: 20,
    },
    buttonContainer: {
        backgroundColor: COLORS.primary,
        width: 80,
        height: 35,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    contentContainer: {
        flex: 1,
        padding: 8,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 8,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 12,
        backgroundColor: 'white',
        color: '#000',
    },
    brandsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        top: '50%'

    },
    cardContainer: {
        width: '47%',
        backgroundColor: 'white',
        padding: 12,
        margin: 4.5,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        elevation: 3,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    titleText: {
        fontWeight: 'bold',
    },
    iconContainer: {
        width: 30,
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: 120,
        height: 60,
    },
});

export default AppServicesDetails;
