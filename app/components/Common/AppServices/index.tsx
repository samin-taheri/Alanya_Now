import React, { useRef } from 'react';
import { View, StyleSheet, Pressable, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { COLORS } from '@/theme';
import { Text } from '../..';
import Feather from 'react-native-vector-icons/Feather';
import AppLable from '../AppLable';

interface AppServicesProps {
    style?: any;
    onPress: (id: string) => void;
}

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

const AppServices: React.FC<AppServicesProps> = ({ style, onPress }) => {

    return (
        <View style={{ padding: 8 }}>
            <AppLable title="Services" />
            <View style={styles.contentContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.brandsContainer}>
                        {servicesData.map((data, index) => (
                            <Pressable key={index} style={[styles.cardContainer, style]} onPress={() => onPress(data.id)}>
                                <View style={styles.iconContainer}>
                                    <Feather name={data.icon} size={20} color={COLORS.primary} />
                                </View>
                                <Text style={styles.titleText}>{data.title}</Text>
                            </Pressable>
                        ))}
                    </View>
                </ScrollView>
            </View >
        </View >
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

export default AppServices;
