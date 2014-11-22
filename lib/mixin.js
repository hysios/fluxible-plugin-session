module.exports = function(session) {
	return {
		getSession: function (key) {
			return session ? session[key] : null;
		},

		setSession: function(key, value) {
			if (session) {
				session[key] = value;
			} 
		}		
	};
}