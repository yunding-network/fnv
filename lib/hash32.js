/**
 * create by Linan (linan@dding.cn)
 * Hash Fnv Algorithm 
 * 32 Hash 
 * version: fnv-1 / fnv-1a
 * 
 */

var Fnv = require('./fnv.js');

/**
 * [hash 32 for fnv-1 verions]
 * @param  {[type]} input [hash target]
 * @return {[type]}       [hash value]
 */
function version_1(input){
	var hash = 2166136261; //offset: 2166136261 = 0x811c9dc5 

	for(var i=0; i< input.length; i++){
		hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
		hash ^= input.charCodeAt(i);
	}

	return hash >>> 0;
}

/**
 * [hash 32 for fnv-1a verions]
 * @param  {[type]} input [hash target]
 * @return {[type]}       [hash value]
 */
function version_1a(input){
	var hash = 2166136261; //offset: 2166136261 = 0x811c9dc5 

	for(var i=0; i< input.length; i++){
		hash ^= input.charCodeAt(i);
		hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
	}

	return hash >>> 0;
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

	return new Fnv(value, 32);
}