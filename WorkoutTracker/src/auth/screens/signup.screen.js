import React from 'react';
import {View} from 'react-native';
import {ContainerView, ShortTextInput, SubmitButton, LoadingIndicator} from '@components';

export function SignUpScreen(props) {
    const {handleRegistration, usernameError, passwordError, confirmPasswordError, isRegistering} = props;

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <ContainerView>
            <View opacity={isRegistering ? 0.5 : 1}>
                <ShortTextInput
                    label="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    errVisible={usernameError() != null}
                    errMessage={usernameError()}
                />
                <ShortTextInput
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    errVisible={passwordError() != null}
                    errMessage={passwordError()}
                />
                <ShortTextInput
                    label="Username"
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    errVisible={confirmPasswordError() != null}
                    errMessage={confirmPasswordError()}
                />
                <SubmitButton onPress={() => handleRegistration(username, password, confirmPassword)} />
            </View>
            {isRegistering && <LoadingIndicator />}
        </ContainerView>
    );
}
