const PREFIX = `/home/`;
const SUFFIX = `/:name`;

export const routes = [
  {
    path : `Environment${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./Environment.jsx`).default)
      }, `api/Environment`)
    }
  }
  ,
  {
    path : `Format${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./Format.jsx`).default)
      }, `api/Format`)
    }
  }
  ,
  {
    path : `Layout${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./Layout.jsx`).default)
      }, `api/Layout`)
    }
  }
  ,
  {
    path : `Button${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./ButtonAPI.jsx`).default)
      }, `api/ButtonAPI`)
    }
  }
  ,
  {
    path : `Table${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TableAPI.jsx`).default)
      }, `api/TableAPI`)
    }
  }
  ,
  {
    path : `Checkbox${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./CheckboxAPI.jsx`).default)
      }, `api/CheckboxAPI`)
    }
  }
  ,
  {
    path : `Select${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./SelectAPI.jsx`).default)
      }, `api/SelectAPI`)
    }
  }
  ,
  {
    path : `Input${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./InputAPI.jsx`).default)
      }, `api/InputAPI`)
    }
  }
  ,
  {
    path : `Modal${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./ModalAPI.jsx`).default)
      }, `api/ModalAPI`)
    }
  }
]
