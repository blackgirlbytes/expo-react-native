// babel.config.js
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ['@babel/plugin-proposal-private-methods', { loose: true }],
            [
                'module-resolver',
                {
                    alias: {
                        crypto: 'react-native-quick-crypto',
                        stream: 'readable-stream',
                        buffer: '@craftzdog/react-native-buffer',
                        'bn.js': 'react-native-bignumber',
                    },
                },
            ],
        ],
    };
};