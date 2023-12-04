import React, { useRef } from 'react';
import { View, StyleSheet, Animated, Pressable, Button, Share, Alert, Text } from 'react-native';
import AppCard from '../AppCard';
import Feather from 'react-native-vector-icons/Feather'
import { COLORS } from '@/theme';

const AppSocialShare: React.FC = ({ }) => {

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

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };

    return (
        <View style={{}}>
            <Animated.View
                style={[
                    {
                        transform: [{ scale: scaleValue }],
                    },
                ]}
            >
                <AppCard style={{ width: '90%', height: 72 }}>
                    <Pressable style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPressIn={handlePressIn}
                        onPressOut={handlePressOut} onPress={onShare}>
                        <Feather name="share-2" size={20} color={COLORS.primary} style={{ paddingRight: 10, marginTop: 10, marginLeft: 0 }} />
                        <Text style={{ fontWeight: '600', fontSize: 14, marginTop: 10, color: '#000' }}>Share the App</Text>
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

export default AppSocialShare;
