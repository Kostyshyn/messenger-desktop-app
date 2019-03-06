import axios from 'axios'

export const Api = axios.create({
  	baseURL: `${ process.env.VUE_APP_BASE_URL }/api`,
  	headers: {
    	Authorization: 'Bearer {token}'
  	}
});

Api.interceptors.response.use(undefined, (err) => {
	// if (error.response && error.response.status === 401){

	// }
	if (err.message === 'Network Error'){
		console.log('Netvork unvaliable')
	} else {
		return Promise.reject(err);
	}
});