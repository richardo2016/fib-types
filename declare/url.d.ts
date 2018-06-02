/***************************************************************************
 *                                                                         *
 *   This file was automatically generated with idlc.js                   *
 *                                                                         *
 ***************************************************************************/

/** 
 * @author Richard <richardo2016@gmail.com>
 *
 */




/** module Or Internal Object */
/**
	* @brief url 处理模块
	* @detail 
	*/
declare module "url" {
	
	
	
	/**
		* 
		* @brief 参数构造 UrlObject 对象
		* @param args 指定构造参数的字典对象，支持的字段有：protocol, slashes, username, password, hostname, port, pathname, query, hash
		* @return 返回构造成功的字符串
		* 
		* 
		* 
		*/
	export function format(args: Object): string;

	/**
		* 
		* @brief 解析一个 url 字符串
		* @param url 指定需要解析的 url 字符串
		* @param parseQueryString 指定是否解析 query
		* @param slashesDenoteHost  默认为false, 如果设置为true，则从字符串'//'之后到下一个'/'之前的字符串会被解析为host，例如'//foo/bar', 结果应该是{host: 'foo', pathname: '/bar'}而不是{pathname: '//foo/bar'}
		* @return 返回包含解析数据的对象
		* 
		* 
		* 
		*/
	export function parse(url: string, parseQueryString?: boolean/** = false*/, slashesDenoteHost?: boolean/** = false*/): UrlObject;

}

/** } /** endof `module Or Internal Object` */


