module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "camelcase": "error",
       "quotes": ["error", "double"], 
    }
}
