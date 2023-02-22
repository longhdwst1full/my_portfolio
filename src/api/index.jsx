import axios from "axios";
import port from "../../Port";


const intance = axios.create({
  baseURL: port.port

  // baseURL: "http://localhost:3000"
});
intance.interceptors.response.use(
  function (response) {
    //  console.log(response.data);
    return response.data;
  },
  function (error) {
    // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
    // Làm gì đó với lỗi response
    return Promise.reject(error);
  }
);
export { intance };
