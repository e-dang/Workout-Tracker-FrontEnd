import React from 'react';
import {List, Surface, withTheme} from 'react-native-paper';

function _CustomListItem(props) {
    return (
        <Surface>
            <List.Item {...props} />
        </Surface>
    );
}

export const CustomListItem = withTheme(_CustomListItem);
