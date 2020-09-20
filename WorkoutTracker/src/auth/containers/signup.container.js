import React from 'react';
import SignUpScreen from '../screens/signup.screen';
import {useSelector, useDispatch} from 'react-redux';
import {register, getAuthUser} from '../auth.action';

export default function SignUpContainer() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const handleRegistration = (username, password, confirmPassword) => {
        dispatch(register(username, password, confirmPassword))
            .then(() => dispatch(getAuthUser()))
            .catch((err) => {});
    };

    const usernameError = () => {
        try {
            return authState.error.username;
        } catch (TypeError) {
            return null;
        }
    };

    const passwordError = () => {
        try {
            return authState.error.password1;
        } catch (TypeError) {
            return null;
        }
    };

    const confirmPasswordError = () => {
        try {
            return authState.error.password2;
        } catch (TypeError) {
            return null;
        }
    };

    return (
        <SignUpScreen
            handleRegistration={handleRegistration}
            usernameError={usernameError}
            passwordError={passwordError}
            confirmPasswordError={confirmPasswordError}
            isRegistering={authState.isRegistering}
        />
    );
}
