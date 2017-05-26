/**
 * [Fnv constructor]
 * @param {[type]} value    [hash value]
 * @param {[type]} keyspace [hash scale]
 */
function Fnv(value, keyspace){
	this.value = value;
	this.keyspace = keyspace;
}

/**
 * [toString]
 * alias: toStr
 * @return {[type]} [description]
 */
Fnv.prototype.toStr = Fnv.prototype.toString = function(){
	return this.value.toString(36);
};

/**
 * [toDecimal]
 * alias: toDec
 * @return {[type]} [description]
 */
Fnv.prototype.toDec = Fnv.prototype.toDecimal = function() {
	return this.value.toString();
};

/**
 * [toHexadecimal]
 * alias: toHex
 * @return {[type]} [description]
 */
Fnv.prototype.toHex = Fnv.prototype.toHexadecimal = function() {
	var str = this.value.toString(16),
    	pad = '';
  	
  	for (var i = 0; i < ((this.keyspace / 4) - str.length); i++) pad += '0';
  	
  	return pad + str;
};


module.exports = Fnv;