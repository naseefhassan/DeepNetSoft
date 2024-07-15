import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:2828",
});

export default Instance