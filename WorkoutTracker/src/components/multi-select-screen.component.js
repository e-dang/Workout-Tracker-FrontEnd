import React, {useState} from 'react';
import {Appbar, Searchbar, withTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import SubmitButton from './submit-button.component';
import MultiSelectList from './multi-select-list.component';

function MultiSelectScreen(props) {
    const {title, onBackPress, data, preSelected, keyExtractor, onRefresh, refreshing, onEndReached, onSubmit} = props;

    const [selectedItems, setSelectedItems] = useState(preSelected);

    const selectItem = (item) => {
        setSelectedItems([...selectedItems, item]);
    };

    const unselectItem = (item) => {
        var temp = [...selectedItems];
        temp.splice(temp.indexOf(item), 1);
        setSelectedItems(temp);
    };

    return (
        <SafeAreaView style={{flex: 1}}>
            <Appbar>
                {onBackPress && <Appbar.BackAction onPress={onBackPress} />}
                <Appbar.Content title={title} />
            </Appbar>
            <MultiSelectList
                data={data}
                selectedItems={selectedItems}
                onSelect={selectItem}
                onUnselect={unselectItem}
                keyExtractor={keyExtractor}
                onRefresh={onRefresh}
                refreshing={refreshing}
                onEndReached={onEndReached}
            />
            <SubmitButton onPress={() => onSubmit(selectedItems)} />
        </SafeAreaView>
    );
}

MultiSelectScreen.defaultProps = {
    onBackPress: undefined,
    preSelected: [],
};

export default withTheme(MultiSelectScreen);
