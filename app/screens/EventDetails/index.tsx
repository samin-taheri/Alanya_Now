import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppEventDetails from '@/components/Common/AppEventDetails';

const EventDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppEventDetails />
        </React.Fragment>
    );
};

export default EventDetails;
