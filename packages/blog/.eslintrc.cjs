module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
    'eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}'
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off'
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off'
  }
}
