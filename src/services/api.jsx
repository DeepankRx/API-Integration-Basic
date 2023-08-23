import http from './http';

// const subEndpoint = {
//   auth: '/api/auth',
// };

const endpoint = {
  auth: {
    login: `/admin/User_Detail/Login`,
    getInwards: `/master/Inward/GetInwardRecords`,
    addInward: `/master/Inward/Insert_Inward_Records`,
  },
};

export const login = (data) => http.post(endpoint.auth.login, data);
export const getInwards = () => http.get(endpoint.auth.getInwards);
export const addInward = (data) =>
  http.post(`${endpoint.auth.addInward}`, data);
