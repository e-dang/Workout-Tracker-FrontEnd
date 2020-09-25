import React from 'react';
import {Divider, withTheme} from 'react-native-paper';
import {FlatList, View} from 'react-native';
import UnselectedListItem from './unselected-list-item.component';
import SelectedListItem from './selected-list-item.component';

function MultiSelectList(props) {
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

MultiSelectList.defaultProps = {
    keyExtractor: (item) => item.id,
};

export default withTheme(MultiSelectList);
