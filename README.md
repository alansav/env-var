# env-var
Small wrapper class for retrieving environment variable values.

This module has no dependencies.

## How to install:
npm i @alansav/env-var

## How to use:

Create a file called index.js:

```javascript
var env = require('@alansav/env-var');
var value = env.getValue('PORT', 3000);
console.log('PORT: ' + value );
```

execute index.js using node by using: 

`PORT=8000 node index.js`

This sets an environment variable named PORT with the value of 8000 and this will output:
`PORT: 8000`

If you execute index using node by using:

`node index.js`

This will use the default value of 3000 since no environment variable is set and will output:
`PORT: 3000`

If the default value is logged then a warning will be logged to the console:

Environment variable PORT not specified, using default value: 3000
