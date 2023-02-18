import axios from "axios";

const intance = axios.create({
  baseURL: "https://k35qgv.sse.codesandbox.io",
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
