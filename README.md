# Github search application

Search by users on Github.

- Vue.js 3
- Vite
- Typescript
- Vitest
- Storybookjs to develop components in isolation mode
- CSS tokens using figma + Style Dictionary
- Tailwind CSS

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup using docker and docker compose for development

```sh
docker compose up -d --build
```

- The app wil be available at localhost:5173

- The storybook docs wil be available at localhost:6006

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
docker exec -it github-search npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
docker exec -it github-search npm run lint
```

### Shutdown the project

```sh
docker compose down
```
