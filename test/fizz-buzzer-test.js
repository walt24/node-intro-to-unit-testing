const fizzBuzzer = require('../fizzBuzzer');
const should = require('chai').should();


describe('FizzBuzzer', function(){
	it('FizzBuzzer: multiples of 3 must return fizz',function(){
		let ans = fizzBuzzer(6);
		ans.should.equal('fizz')
	});
	it('FizzBuzzer: multiples of 5 must return buzz',function(){
		let ans = fizzBuzzer(5);
		ans.should.equal('buzz')
	});
	it('FizzBuzzer: multiples of 15 must return fizz-buzz',function(){
		let ans = fizzBuzzer(15);
		ans.should.equal('fizz-buzz')
	})
})
