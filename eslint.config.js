const js = require('@eslint/js');
const globals = require('globals');
const prettier = require('eslint-config-prettier');

module.exports = [
    {
        // The Gauges symlink is maintained and checked in its own repository.
        ignores: [
            'jci/**',
            'node_modules/**',
            'server/data/user-settings.json',
            'client/ndgauges.js'
        ]
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'commonjs',
            globals: globals.node
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
        }
    },
    {
        // Runs in the browser next to the firmware GUI (see client/ui-polyfills.html).
        files: ['client/*.js'],
        languageOptions: {
            sourceType: 'script',
            globals: {
                ...globals.browser,
                VideoDecoder: 'readonly',
                EncodedVideoChunk: 'readonly'
            }
        }
    },
    prettier
];
