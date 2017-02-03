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
]
