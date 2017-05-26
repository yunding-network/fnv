/**
 * create by Linan (linan@dding.cn)
 * Hash Fnv Algorithm 
 * 64 Hash 
 * version: fnv-1 / fnv-1a
 * 
 */

var Fnv = require('./fnv.js');
var BigInteger = require("big-integer")

/**
 * [getPrime create]
 * @return {[type]} [bigInteger]
 *
 * 2^40 + 2^8 + 0xb3 = 1099511628211
 */
function getPrime(){
	var bi1 = BigInteger(2).pow(BigInteger(40));
	var bi2 = BigInteger(2).pow(BigInteger(8));
	var bi3 = BigInteger('b3', 16);

	return bi1.add(bi2).add(bi3);
}


/**
 * [getMask create]
 * @return {[type]} [bigInteger]
 *
 * 16 max
 */
function getMask(){
	return BigInteger('FFFFFFFFFFFFFFFF', 16);
}


/**
 * [hash 64 for fnv-1 verions]
 * @param  {[type]} input [hash target]
 * @return {[type]}       [hash value]
 */
function version_1(input){
	var hash = BigInteger('14695981039346656037', 10); //offset: 14695981039346656037=0xcbf29ce484222325

	for(var i=0; i< input.length; i++){
		hash = hash.multiply(getPrime())
			.xor(BigInteger(input.charCodeAt(i)))
			.and(getMask());
	}

	return hash;
}

/**
 * [hash 64 for fnv-1a verions]
 * @param  {[type]} input [hash target]
 * @return {[type]}       [hash value]
 */
function version_1a(input){
	var hash = BigInteger('14695981039346656037', 10); //offset: 14695981039346656037=0xcbf29ce484222325
	for(var i=0; i< input.length; i++){
		hash = hash.xor(BigInteger(input.charCodeAt(i)))
			.multiply(getPrime())
			.and(getMask());
	}	
	
	return hash;
}


module.exports = function(input, version){
	input = (typeof input == 'object')? JSON.stringify(input) : input;

	version = version || '1a';
	
	var value;
	if(version == '1a'){
		value = version_1a(input);
	}else{
		value = version_1(input);
	}

	return new Fnv(value, 64);
}