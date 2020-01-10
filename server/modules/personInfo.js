
import {baseURL,request}  from "../config.js"

export const userHomePageInfo = (userId,wechatNo) => {
	const data = {
		wechatNo
	}
	return request(`${baseURL}/Business/serviceInterface/userHomePageInfo.json`,data)
}

export const userAuth = (wechatNo) => {
	return request(`${baseURL}/Business/serviceInterface/userAuth.json`,{
		wechatNo
	})
}

//按个人查询通知列表
export const userWechatMessage = (userId) => {
	return request(`${baseURL}/Business/serviceInterface/userWechatMessage.json`,{
		userId,
	})
}
export default {
	userHomePageInfo,
	userAuth
}