import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUser, login} from '@auth';
import {LoginScreen} from '@auth/screens/login.screen';

export function LoginContainer() {
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    const handleLogin = (username, password) => {
        dispatch(login(username, password))
            .then(() => dispatch(getAuthUser()))
            .catch((err) => {});
    };

    const isGettingAuthData = () => {
        return authState.isLoggingIn || authState.isPendingUser;
    };
    const doesNotHaveAuthData = () => {
        return !authState.isAuthenticated;
    };

    const credentialsAreInvalid = () => {
        return authState.error != null;
    };

    return (
        <LoginScreen
            handleLogin={handleLogin}
            isGettingAuthData={isGettingAuthData}
            doesNotHaveAuthData={doesNotHaveAuthData}
            credentialsAreInvalid={credentialsAreInvalid}
        />
    );
}
