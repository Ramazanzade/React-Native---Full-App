import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Message from '../../assets/imge/ForgotOtp-imge/message-notif.svg'
import { SCREEN_WIDTH } from '../../Utils/common'
const Check_email_modal = ({navigation}:any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(17, 17, 17, 0.3)' }}>
            <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10, width: SCREEN_WIDTH - 40, }}>
                <View style={{ backgroundColor: '#F63D68', alignSelf: 'center', borderRadius: 50, padding: '5%', marginTop: '-18%' }}>
                    <Message />
                </View>
                <View style={{ marginTop: '15%' }}>
                    <Text style={{ color: '#1D2939', textAlign: 'center', fontSize: 23, }}>Check your email</Text>
                    <Text style={{ color: '#98A2B3', textAlign: 'center', fontSize: 15, marginVertical: '5%' }}>We have sent a instructions to recover your password to your email</Text>
                </View>
                <TouchableOpacity
                    style={{ marginTop: '12%', alignSelf: 'center', backgroundColor: '#292929', width: SCREEN_WIDTH / 1.8, borderRadius: 50, marginBottom: '2%' }}
                    onPress={() => navigation.navigate('OTP')}>
                    <Text style={{ color: '#FFFFFF', fontSize: 18, textAlign: 'center', paddingVertical: '4%' }}>Done</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Check_email_modal