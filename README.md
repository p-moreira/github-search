# Github search application

Search users by login name on Github.

## Stack

- Vue.js 3
- Vite
- Typescript
- Vitest
- Storybookjs to develop components in isolation mode
- CSS tokens using figma + Style Dictionary
- Tailwind CSS
- ESLint + Prettier

## 💻 Recommended IDE Setup

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

## Before starting

> This project uses docker and docker compose for development

> Install [docker](https://docs.docker.com/get-docker/)

> Alternatively, if you are working on a macOS computer, [orbstack](https://orbstack.dev/download) can be faster 🚀🚀🚀

## Running the project for the firs time

```sh
docker compose up -d --build
```

## To see the logs

```sh
docker compose logs -f
```

> The app will be available at [localhost:5173](http://localhost:5173)

> The storybook docs will be available at [localhost:6006](http://localhost:6006)

### Running Unit Tests in the watch mode with [Vitest](https://vitest.dev/)

```sh
docker exec -it github-search npm run test
```

## Running test coverage

```sh
docker exec -it github-search npm run coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
docker exec -it github-search npm run lint
```

### To shutdown the project

```sh
docker compose down
```

## If you need to access the containers

> app container

```sh
docker exec -it github-search sh
```

> storybook container

```sh
docker exec -it storybook sh
```

## 🤝 Extras

> If you need to change the look and feel, you can customize the design tokens on this file:

 `src/assets/design-system/tokens/ds-exported-figma-tokens.json`

 > After that, you need to build the css variables files again:

```sh
docker exec -it npm run build:theme
```

## 📫 Contributing

1. Fork this repo
2. Create a branch: `git checkout -b feat/branch-name`.
3. Do commits using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/): `git commit -m 'feat(module): add a feature'`
4. Do a push: `git push origin feat/branch-name`
5. Open a Pull Request
