
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isFunction = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-function', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isFunction ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isFunction( function(){} ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				true,
				'5',
				null,
				{},
				NaN,
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isFunction( values[i] ) );
		}
	});

});