
'use strict';
var debug = require('debug')('Fluxible:SessionPlugin');
var merge = require('merge-descriptors');
var SessionMixin = require('./mixin');

/**
 * Creates a new fetchr plugin instance with options
 * @param {Object} options
 * @param {String} options.req The path to serve session from
 * @returns {SessionPlugin}
 */
module.exports = function sessionPlugin(options) {
  // var plugin = this;
  options = options || {};
  var session;

  /**
   * @class SessionPlugin
   */
  return {

    /**
     * @property {String} name Name of the plugin
     */
    name: 'SessionPlugin',

    /**
     * Called to plug the FluxContext
     * @method plugContext
     * @param {Object} contextOptions options passed to the createContext method
     * @param {Object} contextOptions.session The server session object (only supplied if on server)*
     * @returns {Object}
     */
    plugContext: function plugContext(contextOptions) {
      if (contextOptions.session) {
        session = contextOptions.session;
      }

      return {

      plugActionContext: function plugActionContext(actionContext) {
        merge(actionContext, SessionMixin(session));
      },

      plugComponentContext: function plugComponentContext(componentContext) {
        merge(componentContext, SessionMixin(session));
      },

      plugStoreContext: function plugStoreContext(storeContext) {
        merge(storeContext, SessionMixin(session));
      }
      };
    },
    /**
     * Called to dehydrate plugin options
     * @method dehydrate
     * @returns {Object}
     */
    dehydrate: function dehydrate() {
      return session
    },
    /**
     * Called to rehydrate plugin options
     * @method rehydrate
     * @returns {Object}
     */
    rehydrate: function rehydrate(state) {
      session = state
    }
  };
};
