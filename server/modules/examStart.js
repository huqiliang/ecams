
import {baseURL,request}  from "../config.js"

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