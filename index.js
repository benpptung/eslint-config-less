module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "mocha": true
  },
  "extends": [
    "eslint:recommended", "plugin:node/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "globals": {
    "window": false,
    "document": false,
    "navigator": false
  },
  "plugins": [ "node" ],
  "rules": {
    "indent": [ 0, 2, { "SwitchCase": 1 }],
    "indent-legacy": [ 1, 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ 1, "unix" ],
    "quotes": [ 1, "single", { "allowTemplateLiterals": true } ],
    "semi": [0],
    "no-unused-vars": [ 1, {
        "caughtErrors:": "all",
        "varsIgnorePattern": "(colors|React)",
        "argsIgnorePattern": "^_"
      }
    ],
    "no-console": [1],
    "no-process-exit": [0],
    "no-use-before-define": [ 2, { "functions": false, "classes": false }],
    "getter-return": [ 1, { "allowImplicit": true }],
    "callback-return": [ 1, ["callback", "cb", "next", "done"]],
    "no-buffer-constructor": [1],
    "no-unmodified-loop-condition": [2],
    "no-unused-expressions": [1],
    "node/no-unpublished-require": [0],
    "node/no-missing-require": [ 2, { "allowModules": ["electron", "tunnel"] }],
    "node/no-extraneous-require": [1],
    "no-ex-assign": [2],

    "semi": [ 1, "never"],

    // evaluating for added
    "operator-linebreak": [1, "before"],
    "curly": [2, "multi-line"],
    "brace-style": [1, "stroustrup", { "allowSingleLine": true }],
    "no-multi-spaces": [1, { "ignoreEOLComments": true }],
    "no-multiple-empty-lines": [1, { "max": 6, "maxEOF": 1 }],
    "space-before-function-paren": [1, {
      "anonymous": "never", "named": "never", "asyncArrow": "always"
    }],
    "object-property-newline": [1, { "allowMultiplePropertiesPerLine": true }],

    "comma-dangle": [2, {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "semi-spacing": [1, { "before": false, "after": true }],
    "keyword-spacing": [1],
    "handle-callback-err": [1, "^(er|err|error)$" ],
    "unicode-bom": [2, "never"],
    "template-tag-spacing": [1, "never"],
    "template-curly-spacing": [1, "never"],
    "no-unneeded-ternary": [1, { "defaultAssignment": false }],
    "no-useless-escape": [1],
    "node/no-unsupported-features": [2, {
      ignores: ["destructuring"]
    }],

    // evaluating -- not happened but reasonable
    "comma-spacing": [1, { "before": false, "after": true }],
    "comma-style": [1, "last"],
    "constructor-super": [2],
    "func-call-spacing": [2, "never"],
    "new-cap": [1, { "newIsCap": true, "capIsNew": false }],
    "no-class-assign": [2],
    "no-cond-assign": [1],
    "no-const-assign": [2],
    "generator-star-spacing": [2, { "before": true, "after": true }],
    "no-caller": [2],
    "no-compare-neg-zero": [2],
    "node/no-deprecated-api": [2],
    "node/process-exit-as-throw": [2],
    "use-isnan": [2],
    "one-var": [1, { "initialized": "never" }],
    "yield-star-spacing": [1, "both"],
    "wrap-iife": [1, "any", { "functionPrototypeMethods": true }],
    "valid-typeof": [2, { "requireStringLiterals": true }],
    "symbol-description": [1],

    // experimental rules
    "no-constant-condition": [2, { "checkLoops": false }],
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-implied-eval": 2,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],
    "no-lone-blocks": 2,
    "no-mixed-operators": [2, {
      "groups": [
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": true
    }],
    "no-mixed-spaces-and-tabs": 2,

    "no-multi-str": 2,
    "no-negated-in-lhs": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-symbol": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-return-await": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-sparse-arrays": 2,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-useless-call": 2,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-useless-rename": 2,
    "no-whitespace-before-property": 2,
    "prefer-promise-reject-errors": 2,
    "rest-spread-spacing": [2, "never"],
    "space-unary-ops": [2, { "words": true, "nonwords": false }]
  }
};
