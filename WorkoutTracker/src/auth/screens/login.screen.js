import React from 'react';
import {TextInput, HelperText, Button, ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function LoginScreen(props) {
    const {handleLogin, isGettingAuthData, doesNotHaveAuthData, credentialsAreInvalid} = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <SafeAreaView>
            {doesNotHaveAuthData() && (
                <View>
                    <HelperText type="error" visible={credentialsAreInvalid()}>
                        Invalid username and/or password.
                    </HelperText>
                    <TextInput
                        mode="outlined"
                        label="Username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        mode="outlined"
                        label="Password"
                        secureTextEntry
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button
                        mode="outlined"
                        onPress={() => {
                            handleLogin(username, password);
                        }}>
                        Submit
                    </Button>
                </View>
            )}
            {isGettingAuthData() && (
                <View style={styles.indicator}>
                    <ActivityIndicator animating={true} size="large" />
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
