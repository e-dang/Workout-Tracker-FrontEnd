import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB, TextInput, Button, Text, withTheme} from 'react-native-paper';

export function _NumericFieldInput(props) {
    const {title, label, labelPress} = props;
    const [num, setNum] = useState(0);

    const decrement = () => {
        if (num > 0) setNum(num - 1);
    };

    const increment = () => {
        setNum(num + 1);
    };

    const convertToInt = (val) => {
        if (!val) setNum(0);
        else setNum(parseInt(val));
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {label && (
                    <Button
                        mode="outlined"
                        compact={true}
                        uppercase={false}
                        labelStyle={styles.buttonLabel}
                        style={styles.button}
                        onPress={labelPress}>
                        {label}
                    </Button>
                )}
            </View>
            <View style={styles.inputContainer}>
                <FAB style={styles.fab} icon="minus" onPress={decrement} />
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        maxLength={3}
                        multiline={false}
                        textAlign="center"
                        value={num.toString()}
                        onChangeText={convertToInt}
                        keyboardType="number-pad"
                        returnKeyType="done"
                    />
                </View>
                <FAB style={styles.fab} icon="plus" onPress={increment} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        maxHeight: 100,
    },
    titleContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        left: 5,
    },
    title: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 25,
    },
    button: {
        width: 50,
        left: 10,
    },
    buttonLabel: {
        fontSize: 25,
    },
    inputContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    fab: {
        flex: 0,
    },
    textInputContainer: {
        flexDirection: 'row',
        maxHeight: 60,
    },
    textInput: {
        width: 75,
        fontSize: 25,
        alignItems: 'center',
    },
});

export const NumericFieldInput = withTheme(_NumericFieldInput);
