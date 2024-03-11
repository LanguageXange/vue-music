# Stack

Vue, Pinia, TailwindCSS, Vite

# Links

https://tailwindcss.com/docs/guides/vite
`content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],`

https://vuejs.org/style-guide/

This template should help get you started developing with Vue 3 in Vite.

Pinia Store
https://pinia.vuejs.org/core-concepts/#Option-Stores

Vue Rules
https://eslint.vuejs.org/rules/multi-word-component-names.html

## Notes

mapState (readonly) vs mapWritableState

getters - think of them as computed properties for your store; accessible in all components; only update if the state changes this can help with performance

Alias

```
 ...mapWritableState(useModalStore, {
      isModelOpen:"isOpen"
    })
```

### Form Validation

- reduce num of reqs sent to the server.

VeeValidate or Vuelidate
https://vee-validate.logaretm.com/v4/
`pnpm add vee-validate`

create a dir `includes` to organize plugin and non-plugins files
https://vuejs.org/guide/components/registration

We will validate more than one form so we can register it at the global level

### Validation components

login and registration forms
switch `form` to `vee-form`

validation process:

1. Use the Field component. (vee-field)
2. Assign a name to the input.
3. Add the rules.
4. Handle the errors

### Defining Rules

`pnpm add @vee-validate/rules`
https://vee-validate.logaretm.com/v4/guide/global-validators#vee-validaterules

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
