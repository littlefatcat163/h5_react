const PREFIX = `/home/`;
const SUFFIX = `/:name`;

export const routes = [
  {
    path : `${PREFIX}Environment${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./Environment.jsx`).default)
      }, `api/Environment`)
    }
  }
  ,
  {
    path : `${PREFIX}Format${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./Format.jsx`).default)
      }, `api/Format`)
    }
  }
]
