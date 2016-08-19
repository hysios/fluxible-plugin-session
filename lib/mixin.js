module.exports = function(session) {
	return {
		/**
		 * get session 
		 * @param {String} key [session key]
		 * returns {Object|String|Array|Number|null} 
		 */
		getSession: function (key) {
			if(!session)  throw 'Must to join session to FluxibleContext first.';
			return  key !== undefined ? session[key] : session;
		},
		/**
		 * set session
		 * @param {Object|String} key [session key or a object]
		 * @param {Object|*} value [when session key is a string then set the value to key]
		 * @returns {Object}
		 */
		setSession: function(key, value) {
			if(!session)  throw 'Must to join session to FluxibleContext first.';
			if(key === undefined || value === undefined) throw 'Key and value is must';
			session[key] = value;
			return session[key];
		}		
	};
}