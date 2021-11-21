import axios from "axios";

const API_URL = "http://127.0.0.1:80/subscribe";
// const API_URL = "https://main.d1qk4b11ey8dra.amplifyapp.com/subscribe";

export const SubScribeService = (email) => {
    return axios
        .post(API_URL, {email:email})
        .then(response => {
            // console.log(response);
        });
}
