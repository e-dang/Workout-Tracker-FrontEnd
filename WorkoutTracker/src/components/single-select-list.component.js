import React from 'react';
import {FlatList} from 'react-native';
import {Divider, List, withTheme} from 'react-native-paper';

function _SingleSelectList(props) {
    const {onPress} = props;

    return (
        <FlatList
            renderItem={({item}) => <List.Item title={item.name} onPress={() => onPress(item)} />}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={Divider}
            {...props}
        />
    );
}

export const SingleSelectList = withTheme(_SingleSelectList);
