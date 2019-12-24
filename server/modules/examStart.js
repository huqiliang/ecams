
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

export const startExam = (userId,examId) => {
	const data = {
		userId,
		examId
	}
	return request(`${baseURL}/Business/serviceInterface/startExam.json`,data)
}
export const getExamDetail = (userId,examId) => {
	const data = {
		userId,
		examId
	}
	return request(`${baseURL}/Business/serviceInterface/getExamDetail`,data)
}

export default {
	startExam,
	getExamDetail
}