'use strict';

exports.getValue = function(variableName, defaultValue) {
    if (process.env[variableName]) {
        return process.env[variableName];
    }
    console.warn(`Environment variable ${variableName} not specified, using default value: ${defaultValue}`);
    return defaultValue;}
}
