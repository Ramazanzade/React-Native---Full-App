import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Accont_Headr from '../../Component/AccountSetupComponents/Accont_Headr/Accont_Headr';
import Accses_Button from '../../Component/AccountSetupComponents/Accses_Button/Accses_Button';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Utils/common';
import Google_entry from '../../Component/AccountSetupComponents/Google_entry/Google_entry';
import Facebook_entry from '../../Component/AccountSetupComponents/Facebook_entry/Facebook_entry';
import Apple_entry from '../../Component/AccountSetupComponents/Apple_entry/Apple_entry';
import Star from '../../assets/imge/Accountsetup-imge/Star 1.svg';
import Vector from '../../assets/imge/Accountsetup-imge/Vector-a.svg';
import Footer from '../../Component/AccountSetupComponents/Footer/Footer';
import LoadingPage from '../../Contance/Loading-Page/LoadingPage';

const AccountSetup = ({ navigation }: any) => {
    const [loading, setloading] = useState(false);

    return (
        <View style={{flex:1}}>
            {loading ? (
                <LoadingPage />
            ) : (
                <View style={{ backgroundColor: '#FFFFFF', height: SCREEN_HEIGHT }}>
                    <Accont_Headr />
                    <Accses_Button navigation={navigation} setloading={setloading} />
                    <View style={{ width: SCREEN_WIDTH - 40, alignSelf: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%' }}>
                        <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50 }}></View>
                        <View><Text style={{ color: '#D0D5DD', fontSize: 15, fontWeight: '600' }}>Or</Text></View>
                        <View style={{ height: 1, backgroundColor: '#D0D5DD', width: SCREEN_WIDTH / 2.6, borderRadius: 50 }}></View>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between' }}>
                            <View style={{ marginTop: '3%' }}>
                                <Star />
                            </View>
                            <View style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-between', flex: 1 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '12%', marginTop: '7%' }}>
                                    <Google_entry />
                                    <Apple_entry />
                                    <Facebook_entry />
                                </View>
                                <View style={{ alignSelf: 'center', marginTop: '25%' }}>
                                    <Footer />
                                </View>
                            </View>
                            <View style={{ marginTop: '-7%' }}>
                                <Vector />
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </View>
    );
};

export default AccountSetup;
