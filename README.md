# DDing-Fnv
Fowler–Noll–Vo Hash Function ,Versions contains FNV-1 hash and FNV-1a hash.

## Concept
Fowler–Noll–Vo is a non-cryptographic hash function.

The basis of the FNV hash algorithm was taken from an idea sent as reviewer comments to the IEEE POSIX P1003.2 committee by Glenn Fowler and Phong Vo in 1991. In a subsequent ballot round, Landon Curt Noll improved on their algorithm. In an email message to Landon, they named it the Fowler/Noll/Vo or FNV hash.

#### FNV-1 hash
The FNV-1 hash algorithm is as follows:

```bash
  hash = FNV_offset_basis
  for each byte_of_data to be hashed
       hash = hash × FNV_prime
       hash = hash XOR byte_of_data
  return hash
```
   
In the above pseudocode, all variables are unsigned integers. All variables, except for byte_of_data, have the same number of bits as the FNV hash. The variable, byte_of_data, is an 8 bit unsigned integer.

#### FNV-1a hash
The FNV-1a hash differs from the FNV-1 hash by only the order in which the multiply and XOR is performed:

```bash
  hash = FNV_offset_basis
  for each byte_of_data to be hashed
       hash = hash XOR byte_of_data
       hash = hash × FNV_prime
  return hash
```
   
The above pseudocode has the same assumptions that were noted for the FNV-1 pseudocode. The small change in order leads to slightly better avalanche characteristics.


As an example, consider the 64-bit FNV hash:

* All variables, except for byte_of_data, are 64-bit unsigned integers.
* The variable, byte_of_data, is an 8-bit unsigned integer.
* The FNV_offset_basis is the 64-bit FNV offset basis value: 14695981039346656037 (in hex, 0xcbf29ce484222325).
* The FNV_prime is the 64-bit FNV prime value: 1099511628211 (in hex, 0x100000001b3).
* The multiply returns the lower 64-bits of the product.
* The XOR is an 8-bit operation that modifies only the lower 8-bits of the hash value.
* The hash value returned is a 64-bit unsigned integer.

## Installation
Install from NPM.

```bash
  $ npm install dding-fnv --save
```

## Usage
### Hash32 
##### version: fnv-1, Examples:

```javascript
var Fnv = require('dding-fnv');
var hashValue = Fnv.hash32('testString', '1');
console.log('String:', hashValue.toStr());
console.log('Decimal: ', hashValue.toDec());
console.log('Hexadecimal: ', hashValue.toHex());
```
##### version: fnv-1a, Examples:

```javascript
var Fnv = require('dding-fnv');
var hashValue = Fnv.hash32('testString', '1a');
console.log('String:', hashValue.toStr());
console.log('Decimal: ', hashValue.toDec());
console.log('Hexadecimal: ', hashValue.toHex());
```

### Hash64
##### version: fnv-1, Examples:

```javascript
var Fnv = require('dding-fnv');
var hashValue = Fnv.hash64('testString', '1');
console.log('String:', hashValue.toStr());
console.log('Decimal: ', hashValue.toDec());
console.log('Hexadecimal: ', hashValue.toHex());
```
##### version: fnv-1a, Examples:

```javascript
var Fnv = require('dding-fnv');
var hashValue = Fnv.hash64('testString', '1a');
console.log('String:', hashValue.toStr());
console.log('Decimal: ', hashValue.toDec());
console.log('Hexadecimal: ', hashValue.toHex());
```


## License
[MIT](http://sailsjs.com/license). Copyright © 2012-2017 Linan Design & The Yunding-network Company

