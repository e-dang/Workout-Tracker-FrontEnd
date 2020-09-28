import React from 'react';
import {FAB, Title} from 'react-native-paper';
import {ContainerView} from '@components';
import {StyleSheet, View} from 'react-native';

export function WelcomeScreen({navigation}) {
    return (
        <ContainerView style={{justifyContent: 'center'}}>
            <View style={styles.title}>
                <Title>Welcome to the Free Workout Tracker!</Title>
            </View>
            <View style={styles.container}>
                <View style={styles.fabContainer}>
                    <FAB style={styles.fab} label={'Sign Up'} onPress={() => navigation.push('SignUp')} />
                </View>
                <View style={styles.fabContainer}>
                    <FAB style={styles.fab} label={'Login'} onPress={() => navigation.push('Login')} />
                </View>
            </View>
        </ContainerView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        alignItems: 'center',
    },
    fabContainer: {
        paddingVertical: 15,
    },
    fab: {
        marginHorizontal: 75,
        paddingVertical: 10,
    },
});
