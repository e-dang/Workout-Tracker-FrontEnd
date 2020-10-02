module.exports = function (api) {
    api.cache(false);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['.'],
                    alias: {
                        '@root': './src/root',
                        '@api': './src/api',
                        '@auth': './src/auth',
                        '@components': './src/components',
                        '@entities': './src/entities',
                        '@equipment': './src/equipment',
                        '@movements': './src/movements',
                        '@muscles': './src/muscles',
                        '@pagination': './src/pagination',
                        '@utils': './src/utils',
                        '@workout-templates': './src/workout-templates',
                        '@exercise-templates': './src/exercise-templates',
                        '@workouts': './src/workouts',
                    },
                },
            ],
        ],
    };
};
