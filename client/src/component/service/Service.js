import axios from "axios";

const BASE_URL = process.env.React_URL || "http://localhost:8080";

console.log("BASE_URL:", BASE_URL); // Log để kiểm tra URL

const getRegisterNewUser = (userInformation) => {
  return axios.post(`${BASE_URL}/api/registerUser`, userInformation);
};

const getLoginUser = (userInformation) => {
  return axios.post(`${BASE_URL}/api/loginUser`, userInformation);
};

const sendInforToDB = (requirementInfo) => {
  return axios.post(`${BASE_URL}/api/requirement`, requirementInfo);
};

const getPaymentDone = (payMentInfor) => {
  return axios.post(`${BASE_URL}/api/paymentdone`, payMentInfor);
};

const getSaveDestination = (allImage) => {
  return axios.post(`${BASE_URL}/api/updateimage`, allImage);
};

const getHistoryPayment = () => {
  return axios.get(`${BASE_URL}/api/paymentdone`);
};

// Delete history payment
const getDeleteHistoryPayment = (id) => {
  return axios.delete(`${BASE_URL}/api/deleteHistory`, {
    params: {
      id,
    },
  });
};

// Admin functions
const getAllUserFromDB = () => {
  return axios.get(`${BASE_URL}/api/getalluser`);
};

const getDeleteUser = (deleteUserEmail) => {
  return axios.delete(`${BASE_URL}/api/deleteuser`, {
    params: {
      deleteUserEmail,
    },
  });
};

const getUpdateUserToDB = (editModelValue) => {
  return axios.put(`${BASE_URL}/api/updateuser`, editModelValue);
};

const getUpLoadDestinatiomToDB = (formData) => {
  return axios.post(`${BASE_URL}/api/imporTDestinationDB`, formData);
};

const getDisplayDestination = () => {
  return axios.get(`${BASE_URL}/api/getdestination`);
};

const getDeleteDestination = (id) => {
  return axios.delete(`${BASE_URL}/api/getdeletedestinationdb`, {
    params: {
      id,
    },
  });
};

const getEditDestinationModel = (editInformation) => {
  return axios.put(`${BASE_URL}/api/editdestination`, editInformation);
};

export {
  getRegisterNewUser,
  getLoginUser,
  sendInforToDB,
  getPaymentDone,
  getSaveDestination,
  getAllUserFromDB,
  getDeleteUser,
  getUpdateUserToDB,
  getUpLoadDestinatiomToDB,
  getDisplayDestination,
  getDeleteDestination,
  getEditDestinationModel,
  getHistoryPayment,
  getDeleteHistoryPayment,
};
