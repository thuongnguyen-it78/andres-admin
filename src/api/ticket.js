import axiosClient from './axiosClient';

const ticketApi = {
  async getAll(params) {
    const url = '/v1/tickets';
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/v1/tickets/${id}`;
    return axiosClient.get(url);
  },
  getStatistic() {
    const url = `/v1/tickets-statistic`;
    return axiosClient.get(url);
  },
};


export default ticketApi;