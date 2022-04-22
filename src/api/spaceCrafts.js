import axios from "axios";

const BASE_URL = "http://stapi.co/api/v1/rest";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
});
