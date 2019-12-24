
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
export const getMyExam = (userId) => {
	const data = {
		userId
	}
	return request(`${baseURL}/Business/serviceInterface/getMyExam.json`,data)
}
export const getExamInfo = (examId) => {
	const data = {
		examId
	}
	return request(`${baseURL}/Business/serviceInterface/getExamInfo.json`,data)
}


export default {
	getMyExam,
	getExamInfo
}