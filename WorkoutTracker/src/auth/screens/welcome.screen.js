import React from 'react';
import {Button} from 'react-native-paper';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView>
            <View>
                <Button
                    mode="outlined"
                    onPress={() => {
                        navigation.push('SignUp');
                    }}>
                    Sign Up
                </Button>
                <Button
                    mode="outlined"
                    onPress={() => {
                        navigation.push('Login');
                    }}>
                    Login
                </Button>
            </View>
        </SafeAreaView>
    );
}
