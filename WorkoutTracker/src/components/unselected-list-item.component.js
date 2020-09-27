import React from 'react';
import {withTheme, List} from 'react-native-paper';

function _UnselectedListItem(props) {
    return <List.Item {...props} />;
}

export const UnselectedListItem = withTheme(_UnselectedListItem);
