module.exports = {
    "extends": "airbnb",
    "settings": {
      "import/resolver": {
        "node": {
          "paths": ["src"]
        }
      },
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "padded-blocks": ["error", { "classes": "always" }],
      "react/prop-types": [1, { ignore: ["theme"]}],
    }
};