# React-Takengotchi app:

## What does it do?

You can add tasks, mark them as done, filter them on status and delete tasks.

## Explanation of code

### Redux

I created one Redux file TaskSlice and it also contains some filter logic. It's a small app at the moment so that's why I think that's fine for now.
If the app grows and filtering becomes more complex, I’d split that logic into a separate "filter" slice.
Since everything is still handled on a single screen, keeping it all in one redux file works fine for now.

### Unit test

I have created this project in Vue.js and in React.js. I have written some unit-tests in the Vue.js version of this app, because I am familiar with writing Vue.js code. Currently just googling my way into React.js and currently studying it it with my subscription of Frontendmasters. Please check out my vue.js version to see how I structure unit-tests: https://github.com/AMiloudi/todo-app .

### Directory structure

I put all the feature logic together. If I would have components like buttons for example that would be used all over the app. I would create a button-component in a components folder.

## Setup and running the code

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
