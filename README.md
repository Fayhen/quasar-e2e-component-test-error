# Quasar App (quasar-e2e-component-test-error)

This is a test Quasar Application originally created for a small team to debug a mounting issue with `q-page` elements when running Cypress Component Tests, added to the application through the `@quasar/testing` app extension.

The used version of `@quasar/testing` was 2.0.3. The application is built with Webpack, TypeScript, Quasar v2 and Vue 3. Installation and configuration, including of the test framework, were made entirely through Quasar Cli version 1.2.2. No CSS preprocessors were selected during installation. No additional features were added other than ESLint with the Standard preset. Only the Cypress E2E Testing harness was selected during installation of the `@quasar/testing` app extension, with TypeScript support.

Files are provided as-is from the installation process, except for `Index.vue` and the views and spec files provided for debugging by the team. These files can all be found in the `src/pages/` directory, with an additional `src/components/TestComponent.vue` file. There are four Vue test files in total, two using the `q-page` element and the other two using a `div` instead.

Finally. because no CSS preprocessors were installed, line 19 in `test/cypress/support/unit.ts` was changed from:

```typescript
import 'src/css/app.scss'
```

To:

```typescript
import 'src/css/app.css'
```

Tests can be ran by installing dependencies as per instructions below and running `yarn run test:unit` or `yarn run test:unit:ci`. Running `test:unit` will open your browser in Component Testing mode.

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
