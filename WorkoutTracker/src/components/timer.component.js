import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Surface, Text} from 'react-native-paper';

const prependZero = (strNum) => {
    if (strNum < 10) {
        return '0' + strNum;
    }

    return strNum;
};

const toHHMMSS = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    seconds = (seconds % 60).toString();
    let hours = Math.floor(minutes / 60).toString();
    minutes = (minutes % 60).toString();

    seconds = prependZero(seconds);
    minutes = prependZero(minutes);
    hours = prependZero(hours);

    return hours + ':' + minutes + ':' + seconds;
};

export function Timer(props) {
    const {time, setTime} = props;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time]);

    return (
        <View style={styles.container}>
            <Surface style={styles.surface}>
                <Text style={styles.text}>{toHHMMSS(time)}</Text>
            </Surface>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    surface: {
        marginHorizontal: 120,
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
    },
});
