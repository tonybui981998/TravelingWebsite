import { Model, where } from "sequelize";
import db from "../models/index";
import path from "path";
const bcrypt = require("bcrypt");

// hash password
const saltRounds = 10;
const hasPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
// end hard password
// check password
const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash); // true
};

// register user
const getRegisterNewUserDB = async (name, email, password, role, hint) => {
  try {
    let checkUser = await db.UserRegister.findOne({
      where: { email: email },
    });

    if (checkUser) {
      return {
        DM: "Sorry email already exist",
        DC: -1,
        DT: "",
      };
    } else {
      let createpassword = hasPassword(password);

      let newUser = await db.UserRegister.create({
        name: name,
        email: email,
        password: createpassword,
        role: role,
        hint: hint,
      });

      return {
        DM: "Add user success",
        DC: 0,
        DT: newUser,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// login user
const getLoginUserFromDB = async (email, password) => {
  try {
    let checkEmail = await db.UserRegister.findOne({
      where: { email: email },
    });
    if (!checkEmail) {
      return {
        DM: "Sorry email not found",
        DC: -1,
        DT: "",
      };
    } else {
      let check = checkPassword(password, checkEmail.password);
      if (!check) {
        return {
          DM: "Sorry email or password are incorrect",
          DC: -1,
          DT: "",
        };
      } else {
        return {
          DM: "Login Success",
          DC: 0,
          DT: checkEmail,
        };
      }
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};
// requirement
const getRequirementToDB = async (email, name, phone, reason, message) => {
  try {
    let checkEmail = await db.UserRegister.findOne({
      where: { email: email },
    });
    if (!checkEmail) {
      return {
        DM: "Sorry email don't exsit",
        DC: -1,
        DT: "",
      };
    } else {
      let createNewRequirement = await db.requirements.create({
        email: email,
        name: name,
        phone: phone,
        reason: reason,
        message: message,
      });
      return {
        DM: "Thanks , we will get in touch with you soon",
        DC: 0,
        DT: "",
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

const getPaymentToDB = async (
  startdate,
  enddate,
  people,
  price,
  userName,
  userEmail,
  status
) => {
  try {
    const checkEmail = await db.UserRegister.findOne({
      where: { email: userEmail },
    });
    if (!checkEmail) {
      return {
        DM: "Sorry email does't exist",
        DC: -1,
        DT: "",
      };
    } else {
      const create = await db.PayMentStore.create({
        email: userEmail,
        name: userName,
        startDate: startdate,
        endDate: enddate,
        totalPeople: people,
        totalPrice: price,
        paymentStatus: status,
      });
      return {
        DM: "success",
        DC: 0,
        DT: create,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong ",
      DC: -1,
      DT: "",
    };
  }
};

// saveImage
const getSaveImage = async (allImage) => {
  try {
    const saveImage = await db.Destination.bulkCreate(allImage);
    console.log("Data saved successfully");
    return {
      DM: "Data saved successfully",
      DC: 1,
      DT: saveImage,
    };
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// get all payment history
const getAllPayment = async () => {
  try {
    let getPayment = await db.PayMentStore.findAll();
    if (!getPayment) {
      return {
        DM: "Sorry history not found",
        DC: -1,
        DT: "",
      };
    } else {
      return {
        DM: "Success",
        DC: 0,
        DT: getPayment,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// get all destination

/////////// adminnnnn

const getAllUser = async () => {
  try {
    let getUser = await db.UserRegister.findAll();
    if (!getUser) {
      return {
        DM: "Sorry get user failed",
        DC: -1,
        DT: "",
      };
    } else {
      return {
        DM: "Success",
        DC: 0,
        DT: getUser,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// delete user
const getDeleteUser = async (email) => {
  try {
    let checkEMail = await db.UserRegister.findOne({
      where: { email: email },
    });
    if (!checkEMail) {
      return {
        DM: "Sorry email does't exist",
        DC: -1,
        DT: "",
      };
    } else {
      await db.UserRegister.destroy({
        where: { email: email },
      });
      return {
        DM: "Success",
        DC: 0,
        DT: "",
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// get update user
const getUpdateUserIntoDB = async (id, name, email, role) => {
  try {
    let checkID = await db.UserRegister.findOne({
      where: { id: id },
    });
    if (!checkID) {
      return {
        DM: "Sorry ID is not exist",
        DC: -1,
        DT: "",
      };
    } else {
      let updateDB = await db.UserRegister.update(
        {
          name: name,
          email: email,
          role: role,
        },
        { where: { id: id } }
      );
      return {
        DM: "Update success",
        DC: 0,
        DT: updateDB,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// upload destination
const getUploadImageTODB = async (name, price, description, image) => {
  try {
    console.log(image);
    const imagePath = image.filename;
    let uploadDB = await db.Destination.create({
      name: name,
      image: imagePath,
      price: price,
      description: description,
    });
    return {
      DM: "upload success",
      DC: 0,
      DT: uploadDB,
    };
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong ",
      DC: -1,
      DT: "",
    };
  }
};
// get data form destination table
const getDataFromDB = async () => {
  try {
    let getdata = await db.Destination.findAll();
    if (!getdata) {
      return {
        DM: "Sorry data not found",
        DC: -1,
        DT: "",
      };
    } else {
      let productsWithImages = getdata.map((destination) => {
        return {
          id: destination.id,
          name: destination.name,
          image: destination.image, // Bổ sung trường image vào đây
          price: destination.price,
          description: destination.description,
        };
      });
      return {
        DM: "Success",
        DC: 0,
        DT: productsWithImages,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};
// delete destination
const getDeleteLocation = async (id) => {
  try {
    let checkID = await db.Destination.findOne({
      where: { id: id },
    });
    if (!checkID) {
      return {
        DM: "Sorry ID does not exist",
        DC: -1,
        DT: "",
      };
    } else {
      let deleteDestination = await db.Destination.destroy({
        where: { id: id },
      });
      return {
        DM: "Delete success",
        DC: 0,
        DT: deleteDestination,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// upload destination
const getUploadDestination = async (id, name, price, description) => {
  try {
    let checkID = await db.Destination.findOne({
      where: { id: id },
    });
    if (!checkID) {
      return {
        DM: "Sorry update failed",
        DC: -1,
        DT: "",
      };
    } else {
      let update = await db.Destination.update(
        {
          name: name,
          price: price,
          description: description,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return {
        DM: "Updale success",
        DC: 0,
        DT: update,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

// delete history payment
const getDeleteHistory = async (id) => {
  try {
    let checkID = await db.PayMentStore.findOne({
      where: { id: id },
    });
    if (!checkID) {
      return {
        DM: "Sorry ID is not exist",
        DC: -1,
        DT: "",
      };
    } else {
      let deleteHistory = await db.PayMentStore.destroy({
        where: { id: id },
      });
      return {
        DM: "Delete success",
        DC: 0,
        DT: deleteHistory,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      DM: "Sorry something wrong",
      DC: -1,
      DT: "",
    };
  }
};

module.exports = {
  getRegisterNewUserDB,
  getLoginUserFromDB,
  getRequirementToDB,
  getPaymentToDB,
  getSaveImage,
  getAllUser,
  getDeleteUser,
  getUpdateUserIntoDB,
  getUploadImageTODB,
  getDataFromDB,
  getDeleteLocation,
  getUploadDestination,
  getAllPayment,
  getDeleteHistory,
};
