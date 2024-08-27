import axios from "axios";

const url = "https://animationdelhincr.com/admin/api";
// const url = "https://technolite.in/staging/arena/admin/api";

const API = axios.create({
  baseURL: url,
  headers: {
    "x-api-key": "9381c6f9906bf6eeeda60923010b6084b051cab5b75ca0b59e79dec5",
  },
});

export default API;
