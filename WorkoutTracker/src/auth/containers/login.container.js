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

    return (
        <LoginScreen
            handleLogin={handleLogin}
            isGettingAuthData={authState.isLoggingIn || authState.isPendingUser}
            areCredentialsInvalid={authState.error != null}
        />
    );
}
