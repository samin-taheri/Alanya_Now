import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HomeStackNavigationPropsType, Routes } from '@/navigation';
import AppServicesDetails from '@/components/Common/AppServicesDetails';

const ServicesDetails = () => {
    const navigation = useNavigation<HomeStackNavigationPropsType>();

    return (
        <React.Fragment>
            <AppServicesDetails />
        </React.Fragment>
    );
};

export default ServicesDetails;
