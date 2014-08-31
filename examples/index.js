var isFunction = require( './../lib' );

console.log( isFunction( function foo(){} ) );
// Returns true

console.log( isFunction( {} ) );
// Returns false