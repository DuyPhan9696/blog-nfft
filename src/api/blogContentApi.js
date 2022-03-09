import axiosClient from './axiosClient'
const blogContentApi = {
    getAll: (params) => {
        const url = '/blog-content';
        return axiosClient.get(url, { params });
    },
}

export default blogContentApi;