'use strict';

var isFunction = require( './../lib' );

console.log( isFunction( function foo(){} ) );
// returns true

console.log( isFunction( {} ) );
// returns false