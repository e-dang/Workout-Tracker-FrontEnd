import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SplashScreen} from '@auth/screens/splash.screen';
import {store, persistor, WorkoutTracker} from '@root';

const theme = {
    ...DefaultTheme,
};

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <PersistGate loading={<SplashScreen />} persistor={persistor}>
                    <SafeAreaProvider>
                        <WorkoutTracker />
                    </SafeAreaProvider>
                </PersistGate>
            </PaperProvider>
        </Provider>
    );
}
