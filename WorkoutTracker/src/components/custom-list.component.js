import React from 'react';
import {Title, Divider, withTheme, Surface} from 'react-native-paper';
import {FlatList, StyleSheet} from 'react-native';
import {CustomListItem} from '@components/custom-list-item.component';

function _CustomList(props) {
    const {title, itemStyle, titleStyle = null, onItemPress = () => null, itemTitle = () => null} = props;

    return (
        <Surface style={styles.container}>
            <FlatList
                ItemSeparatorComponent={Divider}
                renderItem={({item}) => (
                    <CustomListItem style={itemStyle} onPress={() => onItemPress(item)} title={itemTitle(item)} />
                )}
                ListHeaderComponent={<Title style={titleStyle}>{title}</Title>}
                {...props}
            />
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export const CustomList = withTheme(_CustomList);
