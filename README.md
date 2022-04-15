# Quasar App (quasar-e2e-component-test-error)

This is a test Quasar Application intended for debugging the `@quasar/testing` app extension.

An issue was find in version 2.0.3 of `@quasar/testing` would fail to mount components containing a `q-page` element. The aim of this repository is to provided reproducibility to this issue to the development team.

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
