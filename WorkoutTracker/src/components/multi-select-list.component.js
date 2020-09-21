import React, {useState} from 'react';
import {Divider, Searchbar, withTheme} from 'react-native-paper';
import {FlatList, View} from 'react-native';
import UnselectedListItem from './unselected-list-item.component';
import SelectedListItem from './selected-list-item.component';

function MultiSelectList(props) {
    const {
        data,
        onSelect,
        onUnselect,
        selectedItems,
        keyExtractor,
        enableSearch,
        placeholder,
        filterFieldExtractor,
        queryModifier,
    } = props;
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(data);

    const filterItems = (query) => {
        setQuery(query);
        setFilteredItems(
            data.filter((item) => {
                const filterField = filterFieldExtractor(item);
                const modifiedQuery = queryModifier(query);

                if (Array.isArray(filterField)) {
                    return filterField.some((item) => item.startsWith(modifiedQuery));
                } else {
                    return filterField.startsWith(modifiedQuery);
                }
            }),
        );
    };

    const isSelected = (item) => {
        return selectedItems.includes(item);
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
            {enableSearch && <Searchbar placeholder={placeholder} value={query} onChangeText={filterItems} />}
            <FlatList
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={Divider}
                data={filteredItems}
                extraData={selectedItems}
            />
        </View>
    );
}

MultiSelectList.defaultProps = {
    keyExtractor: (item) => item.id,
    enableSearch: true,
    placeholder: 'Search...',
    filterFieldExtractor: (item) => item.name,
    queryModifier: (query) => query.toLowerCase(),
};

export default withTheme(MultiSelectList);
