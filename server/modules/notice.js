
import {baseURL,request}  from "../config.js"

export const userWechatMessage = (userId) => {
	const data = {
		userId
	}
	return request(`${baseURL}/Business/serviceInterface/userWechatMessage.json`,data)
}

export default {
	userWechatMessage
}