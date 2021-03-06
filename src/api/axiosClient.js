import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://lubrytics.com:8443/atk-iws-crm-api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const ACCESS_TOKEN = localStorage.getItem('ACCESS_TOKEN');
    if (ACCESS_TOKEN) {
      config.headers.common['Authorization'] = 'Bearer ' + ACCESS_TOKEN;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // const { config, status, data } = error.response;
    // const URLS = ['/auth/local/register', '/auth/local'];
    // if (URLS.includes(config.url) && status === 400) {
    //   const errorList = data.data || [];
    //   const firstError = errorList.length > 0 ? errorList[0] : {};
    //   const messageList = firstError.messages || [];
    //   const firstMessage = messageList.length > 0 ? messageList[0] : {};
    //   throw new Error(firstMessage.message);
    // }

    return Promise.reject(error);
  }
);

export default axiosClient;