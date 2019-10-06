module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        //  allow .js extensions for JSX.
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true, // allows strings to use single-quotes or double-quotes so long as the string contains a quote that would have to be escaped otherwise
                "allowTemplateLiterals": true // allows strings to use backticks
            }
        ],
   
    }
};