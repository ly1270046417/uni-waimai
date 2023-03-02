'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database()
	let res
	if (event.index==='index') {
		res=db.collection('systeme-store').get()
	}
	if(event.index==='storeBar'){
		res=db.collection('system-store-category')
			.where({
				parent_id:event.parent_id
			})
			.get()
	}
	if (event.category_id){
		res=db.collection('system-store-commodity').where({
			category_id:event.category_id
		}).get()
	}
	//event为客户端上传的参数
	console.log('event : ', event)
	
	//返回数据给客户端
	return res
};
