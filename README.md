# Quasar App (quasar-e2e-component-test-error)

This is a test Quasar Application intended for debugging the `@quasar/testing` app extension.

An issue was find in version 2.0.3 of `@quasar/testing` would fail to mount components containing a `q-page` element. The aim of this repository is to provided reproducibility to this issue to the development team.

This application is built with Webpack, TypeScript, Quasar v2 and Vue 3. Installation and configuration, including of the `@quasar/testing` app extension, were made entirely through Quasar Cli version 1.2.2. No CSS preprocessors were selected during installation. No additional features were added other than ESLint with the Standard preset. Only the Cypress E2E Testing harness was selected during installation, with TypeScript support.

Files are provided as-is from the installation process, except for `Index.vue` and the views and spec files provided for debugging by the team. These files can all be found in the `src/pages/` directory, with an additional `src/components/TestComponent.vue` file.

Because no CSS preprocessors were installed, line 19 in `test/cypress/support/unit.ts` was changed from:

```typescript
import 'src/css/app.scss'
```

To:

```typescript
import 'src/css/app.css'
```

The error can be reproduced by installing dependencies as per instructions below and running `yarn run test:unit` or `yarn run test:unit:ci`. Running `test:unit` will open your browser in Component Testing mode.

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
