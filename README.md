# ocs-vue-app
This repository has been created with Vue.js, Vuex, Vue Router and Vuetify.
### Example of stack:
- Node version: 12.13.0
- NPM version: 6.12.0
- Vue CLI: 4.3.1
## How to run
### Install
```
npm install
```
### Environment Variable
There has been defined an environment variable called *VUE_APP_BASE_URL* into *.env* file in order to define API URL.
By default It is pointing to [API on HEROKU](https://ocs-express-api.herokuapp.com), please change It in case You would like to define It by yourself.
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
## Testing
There have been created different cases as example in order to define *Unit* and *E2E tests*.
### Run your unit tests
```
npm run test:unit
```
### Run your end-to-end tests
```
npm run test:e2e
```
## LINT and Syntax
Lint has been used as static code analyzer in order to provide a clear methodology, identifying potential problematic patterns and to ensure same code style and code quality.
### Lints and fixes files
```
npm run lint
```
## Example
There has been deployed to Github Pages a prod example for this app, that could be checked here:
[APP on Github Pages](https://ztryx.github.io/ocs-vue-app)
