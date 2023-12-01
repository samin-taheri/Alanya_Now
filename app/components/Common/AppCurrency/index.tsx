import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Pressable, Button, Share, Alert, Text } from 'react-native';
import AppCard from '../AppCard';
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '@/theme';

const AppCurrency: React.FC = ({ }) => {

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
        <View style={{ padding: 0 }}>
            <Animated.View
                style={[
                    {
                        transform: [{ scale: scaleValue }],
                    },
                ]}
            >
                <AppCard style={{ width: 170, height: 72 }}>
                    <Pressable style={{ flexDirection: 'row' }} onPressIn={handlePressIn}
                        onPressOut={handlePressOut}>
                        <Feather name="dollar-sign" size={20} color={COLORS.primary} style={{ paddingRight: 10, marginTop: 10 }} />
                        <Text style={{ fontWeight: '600', fontSize: 14, paddingTop: 10 }}>Exchange rates</Text>
                    </Pressable>
                </AppCard>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AppCurrency;
