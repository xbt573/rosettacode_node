const assert = require('assert');

describe('Basic language learning', function () {
	describe('Basic data operations', function () {
		describe('Arithmetic/Integer', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Arithmetic_Integer'
			);

			const arithmetic = require(path);

			it('sum should be equal 15', function () {
				assert.equal(arithmetic(5, 10).sum, 15);
			});

			it('difference should be equal -5', function () {
				assert.equal(arithmetic(5, 10).difference, -5);
			});

			it('product should be equal 50', function () {
				assert.equal(arithmetic(5, 10).product, 50);
			});

			it('division should be equal 0.5', function () {
				assert.equal(arithmetic(5, 10).division, 0.5);
			});

			it('remainder should be equal 5', function () {
				assert.equal(arithmetic(5, 10).remainder, 5);
			});
		});

		describe('Bitwise operations', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Bitwise_operations'
			);

			const bitwise = require(path);

			it('and should be equal 0', function () {
				assert.equal(bitwise(5, 10).and, 0);
			});

			it('or should be equal 15', function () {
				assert.equal(bitwise(5, 10).or, 15);
			});

			it('xor should be equal 15', function () {
				assert.equal(bitwise(5, 10).xor, 15);
			});

			it('not should be equal -6', function () {
				assert.equal(bitwise(5, 10).not, -6);
			});

			it('left shift should be equal 5120', function () {
				assert.equal(bitwise(5, 10).left_shift, 5120);
			});

			it('right shift should be equal 0', function () {
				assert.equal(bitwise(5, 10).right_shift, 0);
			});
		});

		describe('Compare length of two strings (or more)', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Compare_length_of_two_strings'
			);

			const compare = require(path);

			const list = ['a', 'aaa', 'aaaaa'];

			it('string should be "aaaaa"', function () {
				assert.equal(compare(list)[0].string, 'aaaaa');
			});

			it('length should be 5', function () {
				assert.equal(compare(list)[0].length, 5);
			});
		});

		describe('Factors of an integer', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Factors_of_an_integer'
			);

			const factors = require(path);

			it('factors should be equal [1, 3, 191, 573]', function () {
				assert.equal(String(factors(573)), String([1, 3, 191, 573]));
			});
		});

		describe('Integer comparison', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Integer_comparison'
			);

			const compare = require(path);

			it('5 should be smaller than 10', function () {
				assert.equal(compare(5, 10), 'smaller');
			});

			it('10 should be bigger than 5', function () {
				assert.equal(compare(10, 5), 'bigger');
			});

			it('10 should be equal 10', function () {
				assert.equal(compare(10, 10), 'equal');
			});
		});

		describe('Logical operations', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Logical_operations'
			);

			const logic = require(path);

			it('5 and 10 should be equal 10', function () {
				assert.equal(logic(5, 10).and, 10);
			});

			it('5 or 10 should be equal 5', function () {
				assert.equal(logic(5, 10).or, 5);
			});

			it('not 5 should be equal false', function () {
				assert.equal(logic(5, 10).not, false);
			});
		});

		describe('String append', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'String_append'
			);

			const append = require(path);

			it('should be equal "foobar"', function () {
				assert.equal(append('foo'), 'foobar');
			});
		});

		describe('String comparison', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'String_comparison'
			);

			const compare = require(path);

			it('foo should be equal foo', function () {
				assert.equal(compare('foo', 'foo').equal, true);
			});

			it('foo should not be equal bar', function () {
				assert.equal(compare('foo', 'bar').not_equal, true);
			});

			it('foo should be greater than bar', function () {
				assert.equal(compare('foo', 'bar').greater, true);
			});

			it('bar should be less than foo', function () {
				assert.equal(compare('foo', 'bar').less, false);
			});
		});

		describe('String interpolation', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'String_interpolation'
			);

			const interpolate = require(path);

			it('should be equal to "foobar"', function () {
				assert.equal(interpolate('bar'), 'foobar');
			});
		});

		describe('String matching', function () {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'String_matching'
			);

			const match = require(path);

			it('"hello world" should start with "hello"', function () {
				assert.equal(match('hello world', 'hello').starts, true);
			});

			it('"hello world" should contain "hello"', function () {
				assert.equal(match('hello world', 'hello').contains, true);
			});

			it('"hello world" should end with "world"', function () {
				assert.equal(match('hello world', 'world').ends, true);
			});
		});
	});
});