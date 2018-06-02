/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */
/// <reference path="object.d.ts" />



/** module Or Internal Object */
/**
	* @brief 对称加密算法对象
	* @detail Cipher 对象属于 crypto 模块，创建：,```JavaScript,var c = new crypto.Cipher(crypto.AES, crypto.ECB, ...);,```
	*/
declare class Cipher extends _object {
	
	/**
		* 
		* @brief Cipher 构造函数，仅用于 ARC4 初始化
		* @param provider 指定加密算法
		* @param key 指定加密解密密码
		* 
		* 
		* 
		*/
	constructor(provider: number, key: Buffer);

	/**
		* 
		* @brief 使用填充模式
		* @param mode 指定填充模式，缺省为 PADDING_PKCS7
		* 
		* 
		* 
		*/
	paddingMode(mode: number): void;

	/**
		* 
		* @brief 使用当前算法密码加密数据
		* @param data 指定要加密的数据
		* @return 返回加密后的数据
		* 
		* 
		* @async
		*/
	encrypt(data: Buffer): Buffer;

	/**
		* 
		* @brief 使用当前算法密码解密数据
		* @param data 指定要解密的数据
		* @return 返回解密后的数据
		* 
		* 
		* @async
		*/
	decrypt(data: Buffer): Buffer;

} /** endof class */

/** } /** endof `module Or Internal Object` */


