import axios from "axios";

const API_URL = "http://ec2-18-191-232-197.us-east-2.compute.amazonaws.com:5432/subscribe";
// const API_URL = "https://main.d1qk4b11ey8dra.amplifyapp.com/subscribe";

export const SubScribeService = (email) => {
    return axios
        .post(API_URL, {email:email})
        .then(response => {
            // console.log(response);
        });
}
