import axios from 'axios';


axios.interceptors.request.use(
  config => {
    config.baseURL = 'https://localhost:44354/api';

    config.headers["Content-Type"] = "application/json";
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Methods"] ='GET,PUT,POST,DELETE,PATCH,OPTIONS';

    console.log(config);  
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(null, error => {
  return Promise.reject(error);
});

export default axios;
