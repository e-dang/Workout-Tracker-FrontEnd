import React from 'react';
import Appbar from 'react-native-paper/src/components/Appbar/Appbar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'react-native-paper';
import {logout} from '../auth/auth.action';
import {useDispatch} from 'react-redux';

export default function Home() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title="Hello World" subtitle="This is a test" />
            </Appbar.Header>
            <Button
                mode="outlined"
                onPress={() => {
                    handleLogout();
                }}>
                Logout
            </Button>
        </SafeAreaView>
    );
}
