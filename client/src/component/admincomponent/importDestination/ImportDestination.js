import React, { useContext, useEffect, useState } from "react";
import "./ImportDestination.scss";
import { getUpLoadDestinatiomToDB } from "../../service/Service";
import { toast } from "react-toastify";

const ImportDestination = () => {
  const [importName, setImportName] = useState();
  const [importPrice, setImportPrice] = useState();
  const [importDescription, setImportDestination] = useState();
  const [importFile, setImportFile] = useState();
  const [refreshPage, setRefreshPage] = useState(false);
  const [keyTrigger, setKeyTrigget] = useState(0);

  const defaultValue = {
    isImportName: true,
    isImportPrice: true,
    isImportDescription: true,
    isImportFile: true,
  };
  const [checkValue, setCheckValue] = useState(defaultValue);
  const checkImportValue = () => {
    if (!importName) {
      setCheckValue((prev) => ({
        ...prev,
        isImportName: false,
      }));
      toast.warn("Please import name");
      return false;
    }
    if (!importPrice) {
      setCheckValue((prev) => ({
        ...prev,
        isImportPrice: false,
      }));
      toast.warn("Please import  price");
      return false;
    }
    if (!importDescription) {
      setCheckValue((prev) => ({
        ...prev,
        isImportDescription: false,
      }));
      toast.warn("Please import description");
      return false;
    }
    if (!importFile) {
      setCheckValue((prev) => ({
        ...prev,
        isImportFile: false,
      }));
      toast.warn("Please import image");
      return false;
    }
    return true;
  };
  // button
  const importDestination = async () => {
    const check = checkImportValue();
    if (check === true) {
      const formData = new FormData();
      formData.append("name", importName);
      formData.append("price", importPrice);
      formData.append("description", importDescription);
      formData.append("image", importFile);
      let uploadImage = await getUpLoadDestinatiomToDB(formData);
      if (uploadImage.data.DC === 0) {
        toast.success("UpLoad success");
        setRefreshPage(true);
      }
    }
  };
  useEffect(() => {
    if (refreshPage) {
      // If refreshPage is true, reset form fields
      setImportName("");
      setImportPrice("");
      setImportDestination("");
      setImportFile(null);
      setKeyTrigget((prev) => prev + 1);
      setRefreshPage(false); // Reset refreshPage state after refreshing the page
    }
  }, [refreshPage]);
  return (
    <div className="destination-import">
      <div className="destination-title">Get New Destination</div>
      <div className="destination-content">
        <div className="destination-form">
          <label>Name:</label>
          <br />
          <input
            value={importName}
            onChange={(event) => setImportName(event.target.value)}
            type="text"
          />
        </div>
        <div className="destination-form">
          <label>Price:</label>
          <br />
          <input
            value={importPrice}
            onChange={(event) => setImportPrice(event.target.value)}
            type="text"
          />
        </div>
        <div className="destination-form">
          <label> Description: :</label>
          <br />
          <input
            value={importDescription}
            onChange={(event) => setImportDestination(event.target.value)}
            type="text"
          />
        </div>
        <div className="destination-image">
          <label>Image:</label>
          <br />
          <input
            key={keyTrigger}
            onChange={(event) => setImportFile(event.target.files[0])}
            type="file"
          />
        </div>
        <div className="div">
          <button onClick={() => importDestination()}>Import</button>
        </div>
      </div>
    </div>
  );
};

export default ImportDestination;
