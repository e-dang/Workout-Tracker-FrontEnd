import React from 'react';
import {Chip, withTheme, useTheme} from 'react-native-paper';

function _SelectedChip(props) {
    const {title, onClose, key} = props;
    const {colors} = useTheme();

    return (
        <Chip selected={true} selectedColor={colors.text} key={key} onClose={onClose}>
            {title}
        </Chip>
    );
}

export const SelectedChip = withTheme(_SelectedChip);
