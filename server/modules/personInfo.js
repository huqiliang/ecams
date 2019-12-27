
import config  from "../config.js"

const baseURL = config;

const request  = (url,data,method="post") => {
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			method,
			data
		}).then(data=>{
			var [error, res]  = data;
			if(error) {
				reject(error)
			}
			resolve(res.data);
		});
	})
};

export const userHomePageInfo = (userId,wechatNo) => {
	const data = {
		userId,
		wechatNo
	}
	return request(`${baseURL}/Business/serviceInterface/userHomePageInfo.json`,data)
}

export default {
	userHomePageInfo
}