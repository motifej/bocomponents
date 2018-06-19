import axios from "axios";

const axiosRequest = url =>
    axios
        .get(url)
        .then(response => {
            console.log("response", response);
            return response;
        })
        .catch(error => {
            console.error(error);
        });

export default axiosRequest;
