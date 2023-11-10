import React from 'react';
import { View, StyleSheet, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@/theme';
import { Text } from '../Common';
import Feather from 'react-native-vector-icons/Feather';
import AppLable from '../Common/AppLable';

interface AppServicesProps {
    style?: any;
}

const servicesData = [
    { title: 'Organizations', onPress: () => console.log('Service 1 pressed'), icon: 'grid' },
    { title: 'Discounts', onPress: () => console.log('Service 2 pressed'), icon: 'percent' },
    { title: 'Events', onPress: () => console.log('Service 3 pressed'), icon: 'calendar' },
    { title: 'Useful Stories', onPress: () => console.log('Service 4 pressed'), icon: 'star' },
    { title: 'Pharmacies', onPress: () => console.log('Service 5 pressed'), icon: 'plus' },
    { title: 'News', onPress: () => console.log('Service 6 pressed'), icon: 'file-text' },
    { title: 'Currency', onPress: () => console.log('Service 7 pressed'), icon: 'dollar-sign' },
    { title: 'Transfer', onPress: () => console.log('Service 8 pressed'), icon: 'map-pin' },
    { title: 'Transactions', onPress: () => console.log('Service 9 pressed'), icon: 'briefcase' },
    { title: 'Photo Reports', onPress: () => console.log('Service 10 pressed'), icon: 'camera' },
    { title: 'Activities', onPress: () => console.log('Service 11 pressed'), icon: 'sun' },
    { title: 'Tours and Trips', onPress: () => console.log('Service 12 pressed'), icon: 'layers' },
];

const AppServices: React.FC<AppServicesProps> = ({ style }) => {

    return (
        <View style={{ padding: 8 }}>
            <AppLable title="Services" />
            <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.brandsContainer}>
                        {servicesData.map((data, index) => (
                            <Pressable onPress={data.onPress} key={index} style={[styles.cardContainer, style]}>
                                <View style={styles.iconContainer}>
                                    <Feather name={data.icon} size={20} color={COLORS.primary} />
                                </View>
                                <Text style={styles.titleText}>{data.title}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
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
        justifyContent: 'space-between',
    },
    cardContainer: {
        width: '47.5%',
        backgroundColor: 'white',
        padding: 12,
        margin: 4.5,
        borderRadius: 8,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleText: {
        fontWeight: 'bold',
    },
    iconContainer: {
        width: 40, // Set a fixed width for the icon container
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: 120,
        height: 60,
    },
});

export default AppServices;
