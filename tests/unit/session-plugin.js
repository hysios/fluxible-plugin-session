var sessionPlugin = require('../../lib/session-plugin');
var Fluxible = require('fluxible');
var expect = require('chai').expect;

describe('sessionPlugin', function(){
	var app,
		sessionMock,
		pluginInstance,
		context;

	beforeEach(function() {
		sessionMock = {
			user: {
				name: 'hysios',
				email: 'hysios@gmail.com'
			}
		};
		app = new Fluxible();
		pluginInstance = sessionPlugin();
		app.plug(pluginInstance);

		context = app.createContext({
			session: sessionMock
		});
	});

	describe('actionContext', function() {
		var actionContext;
		beforeEach(function() {
			actionContext = context.getActionContext();
		});

		it('getSession', function() {
			expect(actionContext.getSession).to.be.an('function');
		});

		it('setSesion', function() {
			expect(actionContext.setSession).to.be.an('function');
		});
	});

	describe('componentContext', function() {
		var componentContext;
		beforeEach(function() {
			componentContext = context.getComponentContext();
		});

		it('getSession', function() {
			expect(componentContext.getSession).to.be.an('function');
		});

		it('setSesion', function() {
			expect(componentContext.setSession).to.be.an('function');
		});
	});

	describe('storeContext', function() {
		var storeContext;
		beforeEach(function() {
			storeContext = context.getStoreContext();
		});

		it('getSession', function() {
			expect(storeContext.getSession).to.be.an('function');
		});

		it('setSesion', function() {
			expect(storeContext.setSession).to.be.an('function');
		});
	});

    describe('dehydrate', function () {
        it('should dehydrate its state correctly', function () {
            expect(pluginInstance.dehydrate()).to.deep.equal({
                user: {
                	name: 'hysios',
                	email: 'hysios@gmail.com'
                }
            });
        });
    });

    describe('rehydrate', function () {
        it('should rehydrate the state correctly', function () {
            pluginInstance.rehydrate({
                user: {
                	name: 'bob'
                }
            });
            expect(pluginInstance.dehydrate()).to.deep.equal({
                user: {
                	name: 'bob'
                }
            });
        });
    });

});