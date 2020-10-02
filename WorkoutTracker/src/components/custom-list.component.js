import React from 'react';
import {Title, Divider, withTheme, Surface} from 'react-native-paper';
import {FlatList} from 'react-native';
import {CustomListItem} from '@components/custom-list-item.component';

function _CustomList(props) {
    const {title, onItemPress = () => null, itemTitle = () => null} = props;

    return (
        <Surface>
            <FlatList
                ItemSeparatorComponent={Divider}
                renderItem={({item}) => <CustomListItem onPress={onItemPress(item)} title={itemTitle(item)} />}
                ListHeaderComponent={<Title>{title}</Title>}
                {...props}
            />
        </Surface>
    );
}

export const CustomList = withTheme(_CustomList);
