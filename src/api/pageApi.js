import axiosClient from './axiosClient'
const categoryApi = {
    get: (params) => {
        const url = `/blog`;
        return axiosClient.get(url, { params });

    },
}

export default categoryApi;