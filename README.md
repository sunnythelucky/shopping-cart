# Shopping-cart

### Summary

E-comm is an app created using React, React Hooks, React Router, and Context API. The Routes were setup for two default pages and a store page. Also, the products were displayed using the JSON placeholder API and axios to fetch data.

### Motivation

The purpose of this project was to get familiar with React Hooks, Context API and TypeScript.

### Getting Started

Click the demo link or clone/download the repository on your local machine.
Create a config.js file in api folder inside src folders. In config.js file write
`export const apiKey = "YOUR_FLIKR_API_KEY";`

##### Install dependencies

`yarn install`

##### Run Snap Shot from the root directory.

`yarn start`

### Built With

- React ts
- React Router
- React Hooks
- Context API

### Features

**1. Responsive Design.**

**2. Add / Remove products to the cart on the store page. **

**2. Handle products quantity in the cart. **

### Coming Soon

- [ ] Cypress E2E Tests

### Contributing

Everyone is welcome to contribute to this project. You can contribute either by submitting bugs or suggesting improvements by opening an issue on GitHub.

This project was bootstrapped with [Create Vite](https://vitejs.dev/guide/).



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
