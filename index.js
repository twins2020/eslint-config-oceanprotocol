module.exports = {
    extends: [
        'plugin:security/recommended',
        'standard'
    ],

    'plugins': ['security'],

    rules: {
        'indent': [2, 4, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
        'space-before-function-paren': [2, { 'anonymous': 'never', 'named': 'never' }],

        // Prefer destructuring from arrays and objects
        // https://eslint.org/docs/rules/prefer-destructuring
        'prefer-destructuring': ['error', {
            VariableDeclarator: {
                array: false,
                object: true
            },
            AssignmentExpression: {
                array: true,
                object: true
            }
        }, {
            enforceForRenamedProperties: false
        }],

        // Enforce consistent spacing inside braces
        // https://eslint.org/docs/rules/object-curly-spacing
        'object-curly-spacing': ['error', 'always']
    }
}
