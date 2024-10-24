import React, { useEffect, useState } from "react";
import "./MakeRequirements.scss";
import { toast } from "react-toastify";
import { sendInforToDB } from "../../service/Service";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const MakeRequirements = () => {
  const [UserEmail, setUserEmail] = useState();
  const [UserName, setUserName] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userReason, setUserReason] = useState();
  const [userMessage, setUserMessage] = useState();
  // model
  const [isShowModel, setIsShowModel] = useState(false);
  // close model
  const closeModel = () => {
    setIsShowModel(!isShowModel);
    window.location.reload("/contact-us");
  };
  // create default value
  const defaultValue = {
    isEmail: true,
    isName: true,
    isPhone: true,
    isReason: true,
    isMessage: true,
  };
  const [checkValue, setCheckValue] = useState(defaultValue);
  const checkAllValue = () => {
    if (!UserEmail) {
      setCheckValue((prev) => ({
        ...prev,
        isEmail: false,
      }));
      toast.warn("Please login to send requirements");
      return false;
    }
    if (!UserName) {
      setCheckValue((prev) => ({
        ...prev,
        isName: false,
      }));
      toast.warn("Please login to send requirements");
      return false;
    }
    if (!userPhone) {
      setCheckValue((prev) => ({
        ...prev,
        isPhone: false,
      }));
      toast.warn("Please enter your phone number");
      return false;
    }
    if (userPhone.length < 5 || userPhone.length > 12) {
      setCheckValue((prev) => ({
        ...prev,
        isPhone: false,
      }));
      toast.warn("Please enter your phone number between 5 to 12 characters");
      return false;
    }
    if (!userReason) {
      setCheckValue((prev) => ({
        ...prev,
        isReason: false,
      }));
      toast.warn("Please wite the reason for your requirement");
      return false;
    }
    if (!userMessage) {
      setCheckValue((prev) => ({
        ...prev,
        isMessage: false,
      }));
      toast.warn("message can't be empty ");
      return false;
    }

    return true;
  };
  // submit button
  const submitRequirement = async () => {
    let check = checkAllValue();
    if (check === true) {
      console.log(UserEmail, UserName, userPhone, userReason, userMessage);
      const requirementInfo = {
        email: UserEmail,
        name: UserName,
        phone: userPhone,
        reason: userReason,
        message: userMessage,
      };
      let sendRequirement = await sendInforToDB(requirementInfo);
      console.log(sendRequirement);
      if (sendRequirement.data.DC === 0) {
        setIsShowModel(true);
      } else {
        toast.error(sendRequirement.data.DT.DM);
      }
    }
  };
  useEffect(() => {
    const getUser = sessionStorage.getItem("user");
    if (getUser) {
      const userToken = JSON.parse(getUser);
      setUserEmail(userToken.email);
      setUserName(userToken.name);
    }
  }, []);
  return (
    <>
      <div className="contact-requirement" id="scrool-to-makerequirements">
        <div className="requirement-line"></div>
        <div className="requirement-title">Requirement</div>
        <div className="requirement-main-form">
          <div className="requirement-content">
            <label>Email:</label>
            <br />
            <div className="contact-input">
              {!UserEmail ? (
                <input type="email" disabled />
              ) : (
                <input type="email" disabled value={UserEmail} />
              )}
            </div>
          </div>
          <div className="requirement-content">
            <label>Name:</label>
            <br />
            <div className="contact-input">
              {!UserName ? (
                <input type="email" disabled />
              ) : (
                <input type="email" disabled value={UserName} />
              )}
            </div>
          </div>
          <div className="requirement-content">
            <label>Phone:</label>
            <br />
            <div className="contact-input">
              <input
                value={userPhone}
                onChange={(event) => setUserPhone(event.target.value)}
                type="text"
              />
            </div>
          </div>
          <div className="requirement-content">
            <label>Reason:</label>
            <br />
            <div className="contact-input">
              <input
                value={userReason}
                onChange={(event) => setUserReason(event.target.value)}
                type="text"
              />
            </div>
          </div>

          <div className="requirement-content">
            <label>Message:</label>
            <br />
            <div className="contact-input">
              <textarea
                value={userMessage}
                onChange={(event) => setUserMessage(event.target.value)}
              />
            </div>
          </div>
          <div className="contact-button">
            <button onClick={() => submitRequirement()}>Submit</button>
          </div>
        </div>
      </div>
      {isShowModel === true ? (
        <div className="centered-modal" onClick={() => closeModel()}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title className="model-title">
                Thanks for requirements
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-Body ">
              <p>
                Thank you for sending the requirements. We will review them and
                get back to you shortly.
              </p>
            </Modal.Body>

            <Modal.Footer className="model-button">
              <Button className="primary">Back</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MakeRequirements;
