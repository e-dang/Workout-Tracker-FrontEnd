import React from 'react';
import {withTheme, List} from 'react-native-paper';

function UnselectedListItem(props) {
    return <List.Item {...props} />;
}

export default withTheme(UnselectedListItem);
