import React from 'react';
import {HelperText} from 'react-native-paper';
import {View} from 'react-native';
import {ContainerView, ShortTextInput, SubmitButton, LoadingIndicator} from '@components';

export function LoginScreen(props) {
    const {handleLogin, isGettingAuthData, areCredentialsInvalid} = props;
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <ContainerView>
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
