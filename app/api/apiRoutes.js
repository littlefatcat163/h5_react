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
    path : `Desc${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./DescAPI.jsx`).default)
      }, `api/DescAPI`)
    }
  }
  ,
  {
    path : `Test${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TestAPI.jsx`).default)
      }, `api/TestAPI`)
    }
  }
  ,
  {
    path : `Tool${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./ToolAPI.jsx`).default)
      }, `api/ToolAPI`)
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
  ,
  {
    path : `Loading${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./LoadingAPI.jsx`).default)
      }, `api/LoadingAPI`)
    }
  }
  ,
  {
    path : `Tag${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TagAPI.jsx`).default)
      }, `api/TagAPI`)
    }
  }
  ,
  {
    path : `Timeline${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TimelineAPI.jsx`).default)
      }, `api/TimelineAPI`)
    }
  }
  ,
  {
    path : `Date${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./DateAPI.jsx`).default)
      }, `api/DateAPI`)
    }
  }
  ,
  {
    path : `Tabs${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TabsAPI.jsx`).default)
      }, `api/TabsAPI`)
    }
  }
  ,
  {
    path : `Carousel${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./CarouselAPI.jsx`).default)
      }, `api/CarouselAPI`)
    }
  }
  ,
  {
    path : `Pager${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./PagerAPI.jsx`).default)
      }, `api/PagerAPI`)
    }
  }
  ,
  {
    path : `Tree${SUFFIX}`,
    getComponent(nextState, callback) {
      require.ensure([], (require) => {
        callback(null, require(`./TreeAPI.jsx`).default)
      }, `api/TreeAPI`)
    }
  }
]
