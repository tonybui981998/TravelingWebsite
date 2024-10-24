import axios from "axios";

const getRegisterNewUser = (userInformation) => {
  return axios.post("http://localhost:8080/api/registerUser", userInformation);
};

const getLoginUser = (userInformation) => {
  return axios.post("http://localhost:8080/api/loginUser", userInformation);
};
const sendInforToDB = (requirementInfo) => {
  return axios.post("http://localhost:8080/api/requirement", requirementInfo);
};
const getPaymentDone = (payMentInfor) => {
  return axios.post("http://localhost:8080/api/paymentdone", payMentInfor);
};
const getSaveDestination = (allImage) => {
  return axios.post("http://localhost:8080/api/updateimage", allImage);
};
const getHistoryPayment = () => {
  return axios.get("http://localhost:8080/api/paymentdone");
};

// delete hsitorypayment
const getDeleteHistoryPayment = (id) => {
  return axios.delete("http://localhost:8080/api/deleteHistory", {
    params: {
      id,
    },
  });
};

////////////////// admin
// admin get all user
const getAllUserFromDB = () => {
  return axios.get("http://localhost:8080/api/getalluser");
};
const getDeleteUser = (deleteUserEmail) => {
  return axios.delete("http://localhost:8080/api/deleteuser", {
    params: {
      deleteUserEmail,
    },
  });
};
// update user
const getUpdateUserToDB = (editModelValue) => {
  return axios.put("http://localhost:8080/api/updateuser", editModelValue);
};
// upload destination
const getUpLoadDestinatiomToDB = (formData) => {
  return axios.post("http://localhost:8080/api/imporTDestinationDB", formData);
};

// get destination
const getDisplayDestination = () => {
  return axios.get("http://localhost:8080/api/getdestination");
};

// delete destination
const getDeleteDestination = (id) => {
  return axios.delete(`http://localhost:8080/api/getdeletedestinationdb`, {
    params: {
      id,
    },
  });
};

/// edit destination model
const getEditDestinationModel = (editInformation) => {
  return axios.put(
    "http://localhost:8080/api/editdestination",
    editInformation
  );
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
