
import {baseURL,request}  from "../config.js"

export const userHomePageInfo = (userId,wechatNo) => {
	const data = {
		wechatNo
	}
	return request(`${baseURL}/Business/serviceInterface/userHomePageInfo.json`,data)
}

export const userAuth = (wechatNo) => {
	return request(`${baseURL}/Business/serviceInterface/userAuth.json`,{
		userId:"1",
		wechatNo
	})
}
export default {
	userHomePageInfo,
	userAuth
}