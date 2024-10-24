import React, { useEffect, useState } from "react";
import { getAllUserFromDB } from "../../service/Service";
import { toast } from "react-toastify";
import "./UserManagement.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaLaravel } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { FaBeer } from "react-icons/fa";
import { getDeleteUser } from "../../service/Service";
import { getUpdateUserToDB } from "../../service/Service";

const UserManagement = () => {
  const [allUserDB, setAllUserDB] = useState();
  const [deleteUserEmail, setdeleteUserEmail] = useState();
  const [isShowDeleteModel, setisShowDeleteModel] = useState(false);
  const [isShowEditModel, setisShowEditModel] = useState(false);
  const [editModelValue, setEditModelValue] = useState();

  // get user from db
  const getAllUser = async () => {
    let getAll = await getAllUserFromDB();
    if (getAll.data.DC === 0) {
      setAllUserDB(getAll.data.DT);
    } else {
      toast.error(getAll.data.DM);
    }
  };

  // delete the user
  const deleteUser = async () => {
    let getdeleteUser = await getDeleteUser(deleteUserEmail);
    if (getdeleteUser.data)
      if (getdeleteUser.data.DC === 0) {
        getAllUser();
      } else {
        toast.warn(getdeleteUser.data.DM);
      }
  };
  // open delete model
  const opendeletemodel = (email) => {
    setdeleteUserEmail(email);
    setisShowDeleteModel(!isShowDeleteModel);
  };
  // close delete model
  const closeDeleteModel = () => {
    setisShowDeleteModel(false);
  };

  /////// edit model
  // open edit model
  const openEditModel = (item) => {
    setEditModelValue(item);
    setisShowEditModel(!isShowEditModel);
  };
  // close edit model
  const closeEditModel = () => {
    setisShowEditModel(false);
  };
  // submit edit button
  const submitEditButton = async () => {
    let updateUser = await getUpdateUserToDB(editModelValue);
    if (updateUser.data.DC === 0) {
      toast.success("Update success");
      getAllUser();
      closeEditModel();
    }
    console.log("check uodate", updateUser);
  };

  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="usermanagement">
      <div className="usermanagemtn-title">User Management</div>
      <table>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Role</td>
          <td>Function</td>
        </tr>

        {allUserDB &&
          allUserDB.map((item, index) => {
            return (
              <tr key={index}>
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.role}</th>
                <th>
                  <button
                    onClick={() => openEditModel(item)}
                    className="edit-button"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => opendeletemodel(item.email)}
                    className="delete-button"
                  >
                    <MdAutoDelete />
                  </button>
                </th>
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
                onClick={() => deleteUser()}
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
              <Modal.Title className="model-title">Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-Body ">
              <div className="edit-model">
                <label>Name:</label> <br />
                <input
                  type="text"
                  value={editModelValue.name}
                  onChange={(event) =>
                    setEditModelValue({
                      ...editModelValue,
                      name: event.target.value,
                    })
                  }
                />
              </div>
              <div className="edit-model">
                <label>Email:</label> <br />
                <input
                  value={editModelValue.email}
                  onChange={(event) =>
                    setEditModelValue({
                      ...editModelValue,
                      email: event.target.value,
                    })
                  }
                  type="email"
                />
              </div>
              <div className="edit-model">
                <label>Role:</label> <br />
                <select
                  value={editModelValue.role}
                  onChange={(event) =>
                    setEditModelValue({
                      ...editModelValue,
                      role: event.target.value,
                    })
                  }
                >
                  <option value={"Customer"} selected>
                    Customer
                  </option>
                  <option value={"Admin"}>Admin</option>
                </select>
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

export default UserManagement;
