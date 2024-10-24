import React, { useContext, useEffect, useState } from "react";
import "./DestinationDisplay.scss";
import { getEditDestinationModel } from "../../service/Service";
import { FaEdit, FaLaravel } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaBeer } from "react-icons/fa";
import { getDisplayDestination } from "../../service/Service";
import { toast } from "react-toastify";
import { getDeleteDestination } from "../../service/Service";
import { ShopContext } from "../../shopContext/ShopContext";

const DestinationDisplay = () => {
  const [isShowDeleteModel, setisShowDeleteModel] = useState(false);
  const [getIDDeleteModel, setgetIDDeleteModel] = useState();
  const [destinationData, setDestinationData] = useState();
  const [isShowEditModel, setIsShowEditModel] = useState(false);
  const [editdataModel, setEditDataModel] = useState();
  const getDestinationInfo = async () => {
    let getDestination = await getDisplayDestination();
    // console.log(getDestination);
    if (getDestination.data.DC === 0) {
      setDestinationData(getDestination.data.DT);
    } else {
      toast.error("Sorry infor not found");
    }
  };

  const deleteDestination = async () => {
    let deleteDestination = await getDeleteDestination(getIDDeleteModel);
    console.log(deleteDestination);
    if (deleteDestination.data.DC === 0) {
      getDestinationInfo();

      closeDeleteModel();
      toast.success("Delete success");
    } else {
      toast.error(deleteDestination.data.DM);
    }
  };
  // close delete model
  const closeDeleteModel = () => {
    setisShowDeleteModel(!isShowDeleteModel);
  };
  // open model
  const openDeleteModel = (id) => {
    setgetIDDeleteModel(id);
    setisShowDeleteModel(true);
  };
  /// open edit model
  const openEditModel = (item) => {
    setEditDataModel(item);
    setIsShowEditModel(true);
  };
  // close edit model
  const closeEditModel = () => {
    setIsShowEditModel(false);
  };
  // submit edit
  const submitEditButton = async () => {
    const editInformation = {
      id: editdataModel.id,
      name: editdataModel.name,
      price: editdataModel.price,
      description: editdataModel.description,
    };
    //   console.log("check", editInformation);
    let editInfor = await getEditDestinationModel(editInformation);
    if (editInfor.data.DC === 0) {
      getDestinationInfo();
      closeEditModel();
      toast.success(editInfor.data.DM);
    } else {
      toast.error(editInfor.data.DM);
    }
  };

  useEffect(() => {
    getDestinationInfo();
  }, []);
  return (
    <div className="destinationdisplay">
      <div className="destination-title">Destination Display</div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {destinationData &&
          destinationData.map((item, index) => {
            const imagePath = `http://localhost:8080/images/${item.image}`;
            //  console.log(imagePath); // Kiểm tra URL hình ảnh trong console
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    src={imagePath}
                    alt={item.name}
                    style={{ width: "150px", height: "100px" }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => openEditModel(item)}
                    className="edit-button "
                  >
                    {" "}
                    <FaEdit />
                  </button>{" "}
                  <button
                    onClick={() => openDeleteModel(item.id)}
                    className="delete-button "
                  >
                    {" "}
                    <MdAutoDelete />
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
      {isShowDeleteModel === true ? (
        <div className="centered-modal">
          <Modal.Dialog
            style={{ height: "fit-content" }}
            onClick={() => closeDeleteModel()}
          >
            <Modal.Header closeButton>
              <Modal.Title className="model-title">
                Booking Confirmation
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-Body ">
              <div style={{ fontSize: "25px", fontWeight: "600" }}>
                Are you sure you want to delete this user ?
              </div>
            </Modal.Body>

            <Modal.Footer className="model-button">
              <Button style={{ cursor: "pointer" }} className="primary">
                Cancel
              </Button>
              <Button
                style={{
                  cursor: "pointer",
                  margin: "0 0 15px 5px",
                }}
                onClick={() => deleteDestination()}
                className="primary"
              >
                Confirm
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
      {/**edit model */}
      {isShowEditModel === true ? (
        <div className="centeredmodal">
          <Modal.Dialog style={{ height: "fit-content" }}>
            <Modal.Header closeButton>
              <Modal.Title className="model-title">
                Edit Destination
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-Body ">
              <div className="edit-model">
                <label>Name:</label> <br />
                <input
                  onChange={(event) =>
                    setEditDataModel({
                      ...editdataModel,
                      name: event.target.value,
                    })
                  }
                  value={editdataModel.name}
                  type="text"
                />
              </div>
              <div className="edit-model">
                <label>Price:</label> <br />
                <input
                  onChange={(event) =>
                    setEditDataModel({
                      ...editdataModel,
                      price: event.target.value,
                    })
                  }
                  value={editdataModel.price}
                  type="text"
                />
              </div>
              <div className="edit-model">
                <label>Description:</label> <br />
                <textarea
                  onChange={(event) =>
                    setEditDataModel({
                      ...editdataModel,
                      description: event.target.value,
                    })
                  }
                  value={editdataModel.description}
                  type="text"
                />
              </div>
            </Modal.Body>

            <Modal.Footer className="model-button">
              <Button
                onClick={() => closeEditModel()}
                style={{ cursor: "pointer" }}
                className="primary"
              >
                Close
              </Button>
              <Button
                onClick={() => submitEditButton()}
                style={{
                  cursor: "pointer",
                  margin: "0 0 15px 5px",
                }}
                className="primarys"
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DestinationDisplay;
