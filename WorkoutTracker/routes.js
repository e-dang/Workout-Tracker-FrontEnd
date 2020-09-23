import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/components/Home';
import MovementNavigator from './src/movements/movements.navigator';

const tabNavigator = createBottomTabNavigator();

export default MainNavigator = () => {
    return (
        <tabNavigator.Navigator>
            <tabNavigator.Screen name="Home" component={Home} />
            {/* Even though this works with Movement data, we set the title to Exercises to not confuse the user */}
            <tabNavigator.Screen name="Exercises" component={MovementNavigator} />
        </tabNavigator.Navigator>
    );
};
