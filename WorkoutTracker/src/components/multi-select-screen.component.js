import React, {useState} from 'react';
import {Appbar, withTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SubmitButton} from '@components/submit-button.component';
import {MultiSelectList} from '@components/multi-select-list.component';

function _MultiSelectScreen(props) {
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
            <SubmitButton
                style={{position: 'absolute', left: 75, right: 75, bottom: 20}}
                onPress={() => onSubmit(selectedItems)}
            />
        </SafeAreaView>
    );
}

_MultiSelectScreen.defaultProps = {
    onBackPress: undefined,
    preSelected: [],
};

export const MultiSelectScreen = withTheme(_MultiSelectScreen);
