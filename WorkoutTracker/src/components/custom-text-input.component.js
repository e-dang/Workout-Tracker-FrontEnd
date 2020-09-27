import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HelperText, TextInput, withTheme} from 'react-native-paper';

function _CustomTextInput(props) {
    const {style, label, value, onChangeText, errVisible, errMessage} = props;

    return (
        <View style={styles.container}>
            <TextInput style={style} mode="outlined" label={label} value={value} onChangeText={onChangeText} />
            <HelperText type="error" visible={errVisible}>
                {errMessage}
            </HelperText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export const CustomTextInput = withTheme(_CustomTextInput);
