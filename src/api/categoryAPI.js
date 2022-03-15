import axiosClient from './axiosClient'
const categoryApi = {
    getAll: () => {
        const url = '/blog-category';
        return axiosClient.get(url);
    },
}

export default categoryApi;