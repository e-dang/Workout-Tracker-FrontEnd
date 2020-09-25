import React from 'react';
import {TextInput, HelperText, Button, ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export function SignUpScreen(props) {
    const {handleRegistration, usernameError, passwordError, confirmPasswordError, isRegistering} = props;

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <SafeAreaView>
            <View>
                <TextInput
                    mode="outlined"
                    label="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <HelperText type="error" visible={usernameError() != null}>
                    <Text>{usernameError()}</Text>
                </HelperText>
                <TextInput
                    mode="outlined"
                    label="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <HelperText type="error" visible={passwordError() != null}>
                    <Text>{passwordError()}</Text>
                </HelperText>
                <TextInput
                    mode="outlined"
                    label="Confirm Password"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <HelperText type="error" visible={confirmPasswordError() != null}>
                    <Text>{confirmPasswordError()}</Text>
                </HelperText>
                <Button
                    mode="outlined"
                    onPress={() => {
                        handleRegistration(username, password, confirmPassword);
                    }}>
                    Submit
                </Button>
            </View>
            {isRegistering && (
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
