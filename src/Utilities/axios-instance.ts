/* eslint-disable no-param-reassign */
import axios from 'axios';
import humps from 'humps';

import * as constants from '../settings/constants';
import { store } from '../store/store';

const axiosInstance = axios.create({
  baseURL: `https://recipe-p4ko.onrender.com/api/v1/`,
  transformResponse: [
    ...(axios.defaults.transformResponse as any),
    humps.camelizeKeys,
  ],
  transformRequest: [ ...(axios.defaults.transformRequest as any)],
});

axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.get.Accept = 'application/json';

// const getToken = () => store.getState().auth.refresh;

// const refreshAuthLogic = () =>
//   axiosInstance
//     .post(`/refresh/`, {
//       refresh: getToken(),
//     })
//     .then(() => {
//       return Promise.resolve();
//     });

// createAuthRefresh4rceptor(axiosInstance, refreshAuthLogic, {
//   retryInstance: axios,
//   pauseInstanceWhileRefreshing: true,
// });

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const { access } = store.getState().auth;
    if (config.headers === undefined) {
      config.headers = {} as any;
    }
    if (access) {
      config.headers.authorization = `Bearer ${access}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("this is response", response.data);
    console.log("may be error", response.data.error);
    return response.data;
  },
  (error) => {
    console.log("this is real", error);
    if (error.response) {
      const { status, data } = error.response;

      if (status === 500) {
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Internal Server Error",
        });
      }

      if (status === 401) {
        // store.dispatch(sessionExpired());
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Unauthorized",
        });
      }

      if (status === 404) {
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Not Found",
        });
      }

      if (status === 402) {
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Payment Required",
        });
      }

      if (status !== 400) {
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Something went wrong",
        });
      }

      if (status === 422) {
        return Promise.reject({
          error: true,
          status,
          message: data.message || "Unprocessable Entity",
          validationErrors: data.errors || {},
        });
      }
    }

    // Handle network errors or other cases not covered above
    return Promise.reject({
      error: true,
      status: 0,
      message: error.message || "Network Error",
    });
  }
);

export default axiosInstance;
