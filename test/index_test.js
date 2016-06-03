var expect = require('chai').expect;
var sinon = require('sinon');
var envvar = require('../index.js');

describe('envVar', function() {
    var sandbox;
    var mockConsoleWarning;

    beforeEach(function() {
        sandbox = sinon.sandbox.create();
        mockConsoleWarning = sandbox.stub(console, 'warn');
    });

    afterEach(function() {
        sandbox.restore();
    });

    it('should return environment variable value when set', function() {
        process.env.TEST = '123';
        var sut = envvar.getValue('TEST', 'abc');
        
        expect(sut).to.equal('123');
        
        delete process.env.TEST;
    });

    it('should return the default value when environment variable is not set', function() {
        var sut = envvar.getValue('TEST', 'abc');

        expect(sut).to.equal('abc');
    });

    it('should output a warning message to the console when using the default value', function() {
        var sut = envvar.getValue('TEST', 'abc');

        expect(mockConsoleWarning.calledOnce).to.be.true;
        expect(mockConsoleWarning.args[0][0]).to.equal('Environment variable TEST not specified, using default value: abc');
    });
});
