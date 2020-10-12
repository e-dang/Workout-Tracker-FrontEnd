import React from 'react';
import {List, Appbar, Divider, withTheme} from 'react-native-paper';
import {ContainerView} from '@components/container-view.component';
import {FlatList} from 'react-native';

function _ListScreen(props) {
    const {title, onCreate, titleExtractor, keyExtractor, data, refreshing, onRefresh, onEndReached} = props;

    return (
        <ContainerView>
            <Appbar.Header>
                <Appbar.Content title={title} />
                <Appbar.Action icon="plus" onPress={onCreate} />
            </Appbar.Header>
            <FlatList
                renderItem={({item}) => <List.Item title={titleExtractor(item)} />}
                keyExtractor={keyExtractor}
                ItemSeparatorComponent={Divider}
                data={data}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onEndReached={onEndReached}
            />
        </ContainerView>
    );
}

_ListScreen.defaultProps = {
    titleExtractor: (item) => item.name,
    keyExtractor: (item) => `${item.id}`,
};

export const ListScreen = withTheme(_ListScreen);
