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
	* @brief XmlNode 对象是整个 DOM 的基础数据类型
	* @detail 
	*/

declare class XmlNode_Classbase extends _object_Classbase {
	
	/**
		* 
		* @brief 查询是否存在子节点
		* @return 存在任何子节点时返回 true，否则返回 false
		* 
		* 
		* 
		*/
	hasChildNodes(): boolean;

	/**
		* 
		* @brief 合并相邻的 Text 节点并删除空的 Text 节点
		* 
		* 这个方法将遍历当前节点的所有子孙节点，通过删除空的 Text 节点，已经合并所有相邻的 Text 节点来规范化文档。该方法在进行节点的插入或删除操作后，对于简化文档树的结构很有用。
		* 
		* 
		* 
		*/
	normalize(): void;

	/**
		* 
		* @brief 创建指定的节点的精确拷贝
		* 
		* 该方法将复制并返回调用它的节点的副本。如果传递给它的参数是 true，它还将递归复制当前节点的所有子孙节点。 否则，它只复制当前节点。返回的节点不属于文档树，它的 parentNode 属性为 null。当复制的是 Element 节点时，它的所有属性都将被复制。
		* @param deep 是否深度拷贝，为 true 时，被克隆的节点会克隆原节点的所有子节点
		* @return 返回所复制的节点
		* 
		* 
		* 
		*/
	cloneNode(deep?: boolean/** = true*/): XmlNode_Classbase;

	/**
		* 
		* @brief 返回在当前节点上匹配指定的命名空间 URI 的前缀
		* @param namespaceURI 指定匹配的命名空间 URI
		* @return 返回匹配的前缀，未匹配到返回 null
		* 
		* 
		* 
		*/
	lookupPrefix(namespaceURI: string): string;

	/**
		* 
		* @brief 返回在当前节点上匹配指定的前缀的命名空间 URI
		* @param prefix 指定匹配的前缀
		* @return 返回匹配的命名空间 URI，未匹配到返回 null
		* 
		* 
		* 
		*/
	lookupNamespaceURI(prefix: string): string;

	/**
		* 
		* @brief 在已有的子节点前插入一个新的子节点
		* 
		* 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
		* @param newChild 插入新的节点
		* @param refChild 在此节点前插入新节点
		* @return 返回新的子节点
		* 
		* 
		* 
		*/
	insertBefore(newChild: XmlNode_Classbase, refChild: XmlNode_Classbase): XmlNode_Classbase;

	/**
		* 
		* @brief 在已有的子节点后插入一个新的子节点
		* 
		* 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
		* @param newChild 插入新的节点
		* @param refChild 在此节点后插入新节点
		* @return 返回新的子节点
		* 
		* 
		* 
		*/
	insertAfter(newChild: XmlNode_Classbase, refChild: XmlNode_Classbase): XmlNode_Classbase;

	/**
		* 
		* @brief 向节点的子节点列表的末尾添加新的子节点
		* 
		* 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
		* @param newChild 指定添加的节点
		* @return 返回这个新的子节点
		* 
		* 
		* 
		*/
	appendChild(newChild: XmlNode_Classbase): XmlNode_Classbase;

	/**
		* 
		* @brief 将某个子节点替换为另一个
		* 
		* 如果文档树中已经存在了 newChild，它将从文档树中删除，然后重新插入它的新位置。来自一个文档的节点（或由一个文档创建的节点）不能插入另一个文档。也就是说，newChild 的 ownerDocument 属性必须与当前节点的 ownerDocument 属性相同。
		* @param newChild 指定新的节点
		* @param oldChild 指定被替换的节点
		* @return 如替换成功，此方法可返回被替换的节点，如替换失败，则返回 null
		* 
		* 
		* 
		*/
	replaceChild(newChild: XmlNode_Classbase, oldChild: XmlNode_Classbase): XmlNode_Classbase;

	/**
		* 
		* @brief 从子节点列表中删除某个节点
		* @param oldChild 指定被删除的节点
		* @return 如删除成功，此方法可返回被删除的节点，如失败，则返回 null
		* 
		* 
		* 
		*/
	removeChild(oldChild: XmlNode_Classbase): XmlNode_Classbase;

} /** endof class */

/** } /** endof `module Or Internal Object` */


