import express from "express";
import apiservie from "../service/apiservice";
import path from "path";
import multer from "multer";

// register user
const handleRegisterNewUser = async (req, res) => {
  const { name, email, password, hint, role } = req.body;
  try {
    if (!name || !email || !password || !hint || !role) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let register = await apiservie.getRegisterNewUserDB(
        name,
        email,
        password,
        role,
        hint
      );
      return res.status(200).json({
        DM: register.DM,
        DC: register.DC,
        DT: register,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry soomething wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// login user
const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(500).json({
        DM: "Sorry missing parameters",
        DC: -1,
        DT: "",
      });
    } else {
      let login = await apiservie.getLoginUserFromDB(email, password);
      return res.status(200).json({
        DM: login.DM,
        DC: login.DC,
        DT: login,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// requirement
const handlerequirement = async (req, res) => {
  const { email, name, phone, reason, message } = req.body;
  try {
    if (!email || !name || !phone || !reason || !message) {
      return res.status(500).json({
        DM: "Sorry missing parameters",
        DC: -1,
        DT: "",
      });
    } else {
      let sendRequirement = await apiservie.getRequirementToDB(
        email,
        name,
        phone,
        reason,
        message
      );
      return res.status(200).json({
        DM: sendRequirement.DM,
        DC: sendRequirement.DC,
        DT: sendRequirement,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};
// payment submit
const handlepaymentdone = async (req, res) => {
  const { startdate, enddate, people, price, userName, userEmail, status } =
    req.body;
  try {
    //   console.log(startdate, enddate, people, price, userName, userEmail, status);
    if (
      !startdate ||
      !enddate ||
      !people ||
      !price ||
      !userName ||
      !userEmail ||
      !status
    ) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let sendToDB = await apiservie.getPaymentToDB(
        startdate,
        enddate,
        people,
        price,
        userName,
        userEmail,
        status
      );
      return res.status(200).json({
        DM: sendToDB.DM,
        DC: sendToDB.DC,
        DT: sendToDB.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// get paymenthistory
const handleGetHistoryPayment = async (req, res) => {
  try {
    let getPayment = await apiservie.getAllPayment();
    return res.status(200).json({
      DM: getPayment.DM,
      DC: getPayment.DC,
      DT: getPayment.DT,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

//////////////////////////// admin
// get all user
const handleGetAllUser = async (req, res) => {
  try {
    let getUser = await apiservie.getAllUser();
    return res.status(200).json({
      DM: getUser.DM,
      DC: getUser.DC,
      DT: getUser.DT,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};
const handledeleteuser = async (req, res) => {
  let email = req.query.deleteUserEmail;
  try {
    if (!email) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let deleteUser = await apiservie.getDeleteUser(email);
      return res.status(200).json({
        DM: deleteUser.DM,
        DC: deleteUser.DC,
        DT: deleteUser.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// update user
const handleUpdateUser = async (req, res) => {
  const { id, name, email, role } = req.body;
  try {
    if (!id || !name || !email || !role) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let updateToDB = await apiservie.getUpdateUserIntoDB(
        id,
        name,
        email,
        role
      );
      return res.status(200).json({
        DM: updateToDB.DM,
        DC: updateToDB.DC,
        DT: updateToDB.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};
// import destination
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/image/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage }).single("image");
const handleImportImageDB = async (req, res) => {
  upload(req, res, async function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({
        DM: "Sorry something wrong with image",
        DC: -1,
        DT: "",
      });
    } else if (err) {
      console.log(err);
      return res.status(500).json({
        DM: "SOrry still have something wrong",
        DC: -1,
        DT: "",
      });
    }
    const { name, price, description } = req.body;
    const image = req.file;
    try {
      console.log(image);
      if (!name || !price || !description || !image) {
        return res.status(500).json({
          DM: "Sorry missing parameter",
          DC: -1,
          DT: "",
        });
      } else {
        let sendToUploadDB = await apiservie.getUploadImageTODB(
          name,
          price,
          description,
          image
        );
        return res.status(200).json({
          DM: sendToUploadDB.DM,
          DC: sendToUploadDB.DC,
          DT: sendToUploadDB.DC,
        });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        DM: "Sorry something wrong form server",
        DC: -1,
        DT: "",
      });
    }
    // Everything went fine.
  });
};

// get destination
const handleGetDestination = async (req, res) => {
  try {
    let getData = await apiservie.getDataFromDB();
    return res.status(200).json({
      DM: getData.DM,
      DC: getData.DC,
      DT: getData.DT,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// delete destinatiom
const handleDeleteDestination = async (req, res) => {
  let id = req.query.id;
  try {
    if (!id) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let deleteDestination = await apiservie.getDeleteLocation(id);
      return res.status(200).json({
        DM: deleteDestination.DM,
        DC: deleteDestination.DC,
        DT: deleteDestination.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// update destination
const handeEditDestination = async (req, res) => {
  const { id, name, price, description } = req.body;
  try {
    if (!id || !name || !price || !description) {
      return res.status(500).json({
        DM: "Sorry missing parameter",
        DC: -1,
        DT: "",
      });
    } else {
      let sendData = await apiservie.getUploadDestination(
        id,
        name,
        price,
        description
      );
      return res.status(200).json({
        DM: sendData.DM,
        DC: sendData.DC,
        DT: sendData.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};

// delete historyPayment
const handleDeleteHistoryPayment = async (req, res) => {
  let id = req.query.id;
  try {
    if (!id) {
      return res.status(500).json({
        DM: "Sorry the user does't exist",
        DC: -1,
        DT: "",
      });
    } else {
      let deletePayment = await apiservie.getDeleteHistory(id);
      return res.status(200).json({
        DM: deletePayment.DM,
        DC: deletePayment.DC,
        DT: deletePayment.DT,
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      DM: "Sorry something wrong from server",
      DC: -1,
      DT: "",
    });
  }
};
module.exports = {
  handleRegisterNewUser,
  handleLoginUser,
  handlerequirement,
  handlepaymentdone,
  handleGetAllUser,
  handledeleteuser,
  handleUpdateUser,
  handleImportImageDB,
  handleGetDestination,
  handleDeleteDestination,
  handeEditDestination,
  handleGetHistoryPayment,
  handleDeleteHistoryPayment,
};
