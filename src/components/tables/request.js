import pick from "lodash/pick";
import axios from "axios";

export const requestPagesCount = async (url, cb) => {
    const response = await requestData(url);
    return cb(response);
};

export const requestData = URL => {
    return axios.get(URL);
};

export const request = async (config, url, cb) => {
    const axiosRequest = await requestData(url);
    const fixed = await fixData(axiosRequest.data.result, config.resultsHeader);
    return cb(fixed);
};

export const fixData = (response, header) => {
    return response.map(result => pick(result, header.map(col => col.value)));
};
