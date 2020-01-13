
import {baseURL,request}  from "../config.js"

export const userHomePageInfo = (userId,wechatNo) => {
	const data = {
		wechatNo
	}
	return request(`${baseURL}/Business/serviceInterface/userHomePageInfo.json`,data)
}

export const getOauth2OpenId = (code) => {
	const data = {
		key: "51b1eea65df8ad12730eeba6820c03f9",
		code
	}
	return request(`${baseURL}/Business/serviceInterface/getOauth2OpenId.json`,data)
}

export const userAuth = (wechatNo) => {
	return request(`${baseURL}/Business/serviceInterface/userAuth.json`,{
		wechatNo
	})
}
//注册
export const userRegister = (userInfo) => {
	const data = {
		...userInfo
	}
	return request(`${baseURL}/Business/serviceInterface/userRegister.json`,data)
}
//按个人查询通知列表
export const userWechatMessage = (userId) => {
	return request(`${baseURL}/Business/serviceInterface/userWechatMessage.json`,{
		userId,
	})
}
// userRegisterInit
export const userRegisterInit = (data) => {
	return request(`${baseURL}/Business/serviceInterface/userRegisterInit.json`,{})
}
export default {
	userHomePageInfo,
	userAuth,
	getOauth2OpenId,
	userRegister,
	userRegisterInit
}