import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotOtp from '../../../Container/Forgotpassword-OTP/ForgotOtp';
const Stack = createNativeStackNavigator();
const ForgotOtpScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="ForgotOtp" component={ForgotOtp} />
        </Stack.Navigator>
    )
}

export default ForgotOtpScreen