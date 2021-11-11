import axiosClient from './axiosClient';

const userApi = {
  async getAll(params) {
    const url = '/v1/users';
    return axiosClient.get(url, { params });
  },

  login(data) {
    const url = '/v1/login';
    return axiosClient.post(url, data);
  },
};

export default userApi;