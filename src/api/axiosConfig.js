import axois from "axios";

export default axois.create({
    baseURL: "http://localhost:8080",
    headers: {"Access-Control-Allow-Origin": true}
});