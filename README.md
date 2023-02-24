# Typescript Node template
[Node.js](https://nodejs.org/en/) with [TypeScript](https://www.typescriptlang.org/) project startup template.

----

## Playground

| Command | Description |
| ------- | ----------- |
| `npm start` | Compile and start project |
| `npm run dev` | Start project in dev mode |
| `npm run build` | Build project |
| `npm run lint` | Run linter |
| `npm run lint:fix` | Fix linter errors |
| `npm run post:install` | Install pre-commit git hook |

## Initial settings

### Typescript

Needed packages:

- [typescript](https://www.typescriptlang.org/)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)

`npm i -D typescript @types/node ts-node-dev`

### Eslint

Needed packages:

- [eslint](https://eslint.org/)
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/)
- [@typescript-eslint/parser](https://typescript-eslint.io/)

`npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`

### Prettier

Needed packages:

- [prettier](https://prettier.io/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)

`npm i -D prettier eslint-config-prettier eslint-plugin-prettier`

## Todo

- [ ] Implement environment global vars
- [ ] Add `nix-shell` configuration
- [ ] Improve eslint rules
- [ ] Improve template scrips
- [ ] Add testing settings
