'use strict';
exports.main = async (event, context) => {
const db = uniCloud.database()
	//event为客户端上传的参数
	console.log('event : ', event)
	const collection = db.collection('vk-files') // 获取表'tableImages'的集合对象
	const res = await collection
				.where({
					category_id:event.category_id
				})
				.orderBy('_add_time','desc')  //排序
				.get() //获取数据
	return res

	//返回数据给客户端
};
