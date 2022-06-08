const assert = require('assert');

describe('Basic language learning', () => {
	describe('Basic data operations', () => {
		describe('Arithmetic/Integer', () => {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Arithmetic_Integer'
			);

			const arithmetic = require(path);

			it('sum should be equal 15', () => {
				assert.equal(arithmetic(5, 10).sum, 15);
			});

			it('difference should be equal -5', () => {
				assert.equal(arithmetic(5, 10).difference, -5);
			});

			it('product should be equal 50', () => {
				assert.equal(arithmetic(5, 10).product, 50);
			});

			it('division should be equal 0.5', () => {
				assert.equal(arithmetic(5, 10).division, 0.5);
			});

			it('remainder should be equal 5', () => {
				assert.equal(arithmetic(5, 10).remainder, 5);
			});
		});

		describe('Bitwise operations', () => {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Bitwise_operations'
			);

			const bitwise = require(path);

			it('and should be equal 0', () => {
				assert.equal(bitwise(5, 10).and, 0);
			});

			it('or should be equal 15', () => {
				assert.equal(bitwise(5, 10).or, 15);
			});

			it('xor should be equal 15', () => {
				assert.equal(bitwise(5, 10).xor, 15);
			});

			it('not should be equal -6', () => {
				assert.equal(bitwise(5, 10).not, -6);
			});

			it('left shift should be equal 5120', () => {
				assert.equal(bitwise(5, 10).left_shift, 5120);
			});

			it('right shift should be equal 0', () => {
				assert.equal(bitwise(5, 10).right_shift, 0);
			});
		});

		describe('Compare length of two strings (or more)', () => {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Compare_length_of_two_strings'
			);

			const compare = require(path);

			const list = ['a', 'aaa', 'aaaaa'];

			it('string should be "aaaaa"', () => {
				assert.equal(compare(list)[0].string, 'aaaaa');
			});

			it('length should be 5', () => {
				assert.equal(compare(list)[0].length, 5);
			});
		});

		describe('Factors of an integer', () => {
			const path = require('path').join(
				'../',
				'src/',
				'Basic_language_learning/',
				'Basic_data_operations/',
				'Factors_of_an_integer'
			);

			const factors = require(path);

			it('factors should be equal [1, 3, 191, 573]', () => {
				assert.equal(String(factors(573)), String([1, 3, 191, 573]));
			});
		});
	});
});