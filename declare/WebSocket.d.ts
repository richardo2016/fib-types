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
	* @brief WebSocket 包协议转换处理器
	* @detail 用以将 Http 协议转换为 WebSocket 包协议消息。创建方式：,```JavaScript,var ws = require('ws');,var http = require('http');,,var serv = new http.Server(8811, ws.upgrade((conn) => {,conn.onmessage = msg => {,    conn.send(new Date());,};,}));,,serv.run(r => 0);,,var sock = new ws.Socket('ws://127.0.0.1:8811');,sock.on('open', () => {,    setInterval(() => {,        sock.send('get date');,    }, 1000);,});,,sock.onmessage = evt => {,  console.log(evt.data);,},```
	*/
declare class WebSocket extends EventEmitter {
	
	/**
		* 
		* @brief WebSocket 构造函数
		* @param url 指定连接的服务器
		* @param protocol 指定握手协议，缺省为 ""
		* @param origin 指定握手时模拟的源
		* 
		* 
		* 
		*/
	constructor(url: string, protocol?: string/** = ""*/, origin?: string/** = ""*/);

	/**
		* 
		* @brief 关闭当前连接，此操作会向对方发送 CLOSE 数据包，并等待对方响应
		* @param code 指定关闭的代码，允许值为 3000-4999 或者 1000，缺省为 1000
		* @param reason 指定关闭的原因，缺省为 ""
		* 
		* 
		* 
		*/
	close(code?: number/** = 1000*/, reason?: string/** = ""*/): void;

	/**
		* 
		* @brief 向对方发送一段文本
		* @param data 指定发送的文本
		* 
		* 
		* 
		*/
	send(data: string): void;

	/**
		* 
		* @brief 维持 fibjs 进程不退出，在对象绑定期间阻止 fibjs 进程退出
		* @return 返回当前对象
		* 
		* 
		* 
		*/
	ref(): WebSocket;

	/**
		* 
		* @brief 允许 fibjs 进程退出，在对象绑定期间允许 fibjs 进程退出
		* @return 返回当前对象
		* 
		* 
		* 
		*/
	unref(): WebSocket;

} /** endof class */

/** } /** endof `module Or Internal Object` */


