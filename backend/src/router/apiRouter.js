import express from "express";
const path = require("path");
import apiController from "../homeController/apiController";

const router = express.Router();
const initRouter = (app) => {
  router.post("/registerUser", apiController.handleRegisterNewUser);
  router.post("/loginUser", apiController.handleLoginUser);
  router.post("/requirement", apiController.handlerequirement);
  router.post("/paymentdone", apiController.handlepaymentdone);
  router.get("/paymentdone", apiController.handleGetHistoryPayment);

  // admin pageeee
  router.get("/getalluser", apiController.handleGetAllUser);
  router.delete("/deleteuser", apiController.handledeleteuser);
  router.put("/updateuser", apiController.handleUpdateUser);
  router.post("/imporTDestinationDB", apiController.handleImportImageDB);
  router.get("/getdestination", apiController.handleGetDestination);
  router.delete(
    "/getdeletedestinationdb",
    apiController.handleDeleteDestination
  );
  router.put("/editdestination", apiController.handeEditDestination);
  router.delete("/deleteHistory", apiController.handleDeleteHistoryPayment);

  app.use("/api", router);
};

export default initRouter;
