import React from 'react';
import {HelperText} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';
import {ContainerView, ShortTextInput, SubmitButton, LoadingIndicator} from '@components';

export function LoginScreen(props) {
    const {handleLogin, isGettingAuthData, areCredentialsInvalid} = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ContainerView style={styles.container}>
            <View opacity={isGettingAuthData ? 0.5 : 1}>
                <HelperText type="error" visible={areCredentialsInvalid}>
                    Invalid username and/or password.
                </HelperText>
                <ShortTextInput
                    label="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    errVisible={false}
                />
                <ShortTextInput
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    errVisible={false}
                />
                <SubmitButton onPress={() => handleLogin(username, password)} />
            </View>
            {isGettingAuthData && <LoadingIndicator />}
        </ContainerView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
