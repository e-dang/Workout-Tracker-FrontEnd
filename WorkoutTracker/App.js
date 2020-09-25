import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './root.store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/auth/screens/splash.screen';
import WorkoutTracker from './routes';

const theme = {
    ...DefaultTheme,
};

export default function App() {
    persistor.purge();
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
