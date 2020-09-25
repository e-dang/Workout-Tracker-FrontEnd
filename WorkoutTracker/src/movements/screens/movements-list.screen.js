import React from 'react';
import {List, Appbar, Divider} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native';

export function MovementListScreen(props) {
    const {movements, navigation, refreshing, onRefresh, onEndReached} = props;

    return (
        <SafeAreaView>
            <Appbar.Header>
                {/* Even though this works with Movement data, we set the title to Exercises to not confuse the user */}
                <Appbar.Content title="Exercises" />
                <Appbar.Action icon="plus" onPress={() => navigation.push('MovementCreate')} />
            </Appbar.Header>
            <FlatList
                renderItem={({item}) => <List.Item title={item.name} />}
                keyExtractor={(item) => `${item.id}`}
                ItemSeparatorComponent={Divider}
                data={movements}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onEndReached={onEndReached}
            />
        </SafeAreaView>
    );
}
