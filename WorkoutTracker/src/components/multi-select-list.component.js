import React from 'react';
import {Divider, withTheme} from 'react-native-paper';
import {FlatList, View} from 'react-native';
import {UnselectedListItem} from '@components/unselected-list-item.component';
import {SelectedListItem} from '@components/selected-list-item.component';

function _MultiSelectList(props) {
    const {data, onSelect, onUnselect, selectedItems, keyExtractor, onRefresh, refreshing, onEndReached} = props;

    const isSelected = (item) => {
        return selectedItems.some((selectedItem) => keyExtractor(selectedItem) == keyExtractor(item));
    };

    const renderItem = ({item}) => {
        return isSelected(item) ? (
            <SelectedListItem title={item.name} onPress={() => onUnselect(item)} />
        ) : (
            <UnselectedListItem title={item.name} onPress={() => onSelect(item)} />
        );
    };

    return (
        <View>
            <FlatList
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={Divider}
                data={data}
                extraData={selectedItems}
                onRefresh={onRefresh}
                refreshing={refreshing}
                onEndReached={onEndReached}
            />
        </View>
    );
}

_MultiSelectList.defaultProps = {
    keyExtractor: (item) => item.id,
};

export const MultiSelectList = withTheme(_MultiSelectList);
