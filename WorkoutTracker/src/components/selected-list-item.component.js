import React from 'react';
import {withTheme, List, useTheme} from 'react-native-paper';

function SelectedListItem(props) {
    const {colors} = useTheme();
    return (
        <List.Item
            style={{backgroundColor: colors.accent}}
            right={(props) => <List.Icon style={{marginVertical: -4}} icon="check" />}
            {...props}
        />
    );
}

export default withTheme(SelectedListItem);
