import pick from "lodash/pick";
import axios from "axios";

export const requestData = URL => {
    return axios.get(URL);
};

export const fixData = (response, header) => {
    return response.map(result => pick(result, header.map(col => col.value)));
};
