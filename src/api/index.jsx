import axios from "axios";

const intance = axios.create({
  baseURL: "http://localhost:3000",
});
export { intance };
