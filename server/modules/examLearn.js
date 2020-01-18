
import {baseURL,request}  from "../config.js"

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
export const getExamDetail = (data) => {
	return request(`${baseURL}/Business/serviceInterface/getExamDetail.json`,data)
}
export const updateUserExam = (data) => {
	return request(`${baseURL}/Business/serviceInterface/updateUserExam.json`,data)
}

export default {
	getMyExam,
	getExamInfo,
	getExamDetail,
	updateUserExam
}