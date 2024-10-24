import React, { useContext, useEffect, useState } from "react";
import "./OurDestination.scss";
import { allImage } from "../../image/Destination-image";
import { FaSearch } from "react-icons/fa";
import { FaBeer } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../shopContext/ShopContext";
import { getDisplayDestination } from "../../service/Service";
const OurDestination = () => {
  const nativigate = useNavigate();
  const { setStoreLocation } = useContext(ShopContext);
  const [items, setItems] = useState([]);
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    movetitlePage();
    setItemOffset(newOffset);
  };
  const movetitlePage = () => {
    document
      .getElementById("tonewDestination")
      .scrollIntoView({ behavior: "smooth" });
  };
  // bokkingbutton
  const makeBooking = (item) => {
    setStoreLocation(item);
    nativigate("/booking-confirm");
  };
  // get all destination
  const getAlldestination = async () => {
    let getDestination = await getDisplayDestination();
    // console.log("check destination", getDestination);
    if (getDestination.data.DC === 0) {
      setItems(getDestination.data.DT);
    }
  };
  console.log(items);
  useEffect(() => {
    getAlldestination();
  }, []);

  return (
    <div className="our-destination" id="tonewDestination">
      <div className="destination-title">Discover Destinations</div>

      <div className="ourdestination-content">
        {currentItems &&
          currentItems.map((item, index) => {
            const imagePath = `http://localhost:8080/images/${item.image}`;
            return (
              <>
                <div key={index} className="destination-image">
                  <img src={imagePath} alt="" />
                  <div className="destination-infor">
                    <span>Location :</span> {item.name}
                  </div>
                  <div className="destination-infor">
                    <span>Price per day :</span> ${item.price}
                  </div>
                  <button onClick={() => makeBooking(item)}>
                    Make Booking
                  </button>
                </div>
              </>
            );
          })}
      </div>
      <>
        <items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </>
    </div>
  );
};

export default OurDestination;
