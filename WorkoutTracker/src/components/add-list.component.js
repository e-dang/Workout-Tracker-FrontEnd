import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Divider, FAB, List, withTheme} from 'react-native-paper';

export function _AddList(props) {
    const {onAdd} = props;

    return (
        <View>
            <FlatList
                renderItem={({item}) => <List.Item title={props.titleExtractor(item)} />}
                ItemSeparatorComponent={Divider}
                {...props}
            />
            <FAB icon="plus" label="Add" onPress={onAdd} />
        </View>
    );
}

_AddList.defaultProps = {
    titleExtractor: (item) => `${item.name}`,
};

export const AddList = withTheme(_AddList);
