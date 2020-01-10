export const  baseURL = "http://114.55.93.241:8080"

export const request  = (url,data,method="post") => {
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
