const assert = require('assert');
const expect = require('expect').expect;

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

			it('passing string as "a" should throw exception', function () {
				const dummy = () => arithmetic('blahblahblah', 10);

				expect(dummy).toThrow('Failed to parse a.');
			});

			it('passing string as "b" should throw exception', function () {
				const dummy = () => arithmetic(10, 'blahblahblah');

				expect(dummy).toThrow('Failed to parse b.');
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

			it('passing string as "a" should throw exception', function () {
				const dummy = () => bitwise('blahblahblah', 10);

				expect(dummy).toThrow('Failed to parse a.');
			});

			it('passing string as "b" should throw exception', function () {
				const dummy = () => bitwise(10, 'blahblahblah');

				expect(dummy).toThrow('Failed to parse b.');
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

			it('should throw exception if string is given', function () {
				const dummy = () => factors('blahblahblah');

				expect(dummy).toThrow('Failed to parse integer.');
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

			it('passing string as "a" should throw exception', function () {
				const dummy = () => compare('blahblahblah', 10);

				expect(dummy).toThrow('Failed to parse a.');
			});

			it('passing string as "b" should throw exception', function () {
				const dummy = () => compare(10, 'blahblahblah');

				expect(dummy).toThrow('Failed to parse b.');
			});
		});
	});
});