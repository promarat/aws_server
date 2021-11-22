import axios from "axios";

const API_URL = "http://18.191.232.197:5432/subscribe";

export const SubScribeService = (email) => {
    axios
        .post(API_URL, {email:email})
        .then(response => {
            return response.data;
        }).catch(function (error) {
            console.log(error.response.data);
        })
}
