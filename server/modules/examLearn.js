
import config  from "../config.js"

const baseURL = config;

const request  = (url,data,method="post") => {
	return uni.request({
		url,
		method,
		data
	});
};
export const getTPList = (data={}) => {
	return request(`${baseURL}/Business/serviceInterface/getTPList.json`,data);
}

export const getTPInfo = (tpId) => {
	const data = {
		tpId
	}
	return request(`${baseURL}/Business/serviceInterface/getTPInfo.json`,data);
}
export default {
	getTPList,
	getTPInfo
}