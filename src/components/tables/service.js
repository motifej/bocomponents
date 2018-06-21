import axios from "axios";

const service = {
    async request(url, cb) {
        const response = await service.requestData(url);
        return cb(response);
    },
    requestData(url) {
        return axios.get(url);
    }
};

export default service;
