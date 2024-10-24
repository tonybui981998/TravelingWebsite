import React, { useEffect, useState } from "react";
import "./PaymentHistory.scss";
import { getHistoryPayment, getLoginUser } from "../../service/Service";
import { toast } from "react-toastify";
import { MdAutoDelete } from "react-icons/md";
import { getDeleteHistoryPayment } from "../../service/Service";

const PaymentHistory = () => {
  const [getHistory, setGetHistory] = useState();
  const getAllPaymentHistory = async () => {
    let getHistory = await getHistoryPayment();
    if (getHistory.data.DC === 0) {
      setGetHistory(getHistory.data.DT);
    } else {
      toast.error(getHistory.data.DM);
    }
  };
  // delete history
  const getDeleteHistory = async (id) => {
    let deletePayment = await getDeleteHistoryPayment(id);
    if (deletePayment.data.DC === 0) {
      getAllPaymentHistory();
      toast.success(deletePayment.data.DM);
    } else {
      toast.error(deletePayment.data.DM);
    }
  };
  useEffect(() => {
    getAllPaymentHistory();
  }, []);
  return (
    <div className="paymenthistory">
      <div className="payhistory">Payment status</div>
      <table>
        <tr>
          <th>Email</th>
          <th>Price</th>
          <th>totalProple</th>
          <th>Status</th>
          <th>Start-Date</th>
          <th>End-Date</th>
          <th>Action</th>
        </tr>
        {getHistory &&
          getHistory.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.email}</td>
                <td>${item.totalPrice}</td>
                <td>{item.totalPeople}</td>
                <td>{item.paymentStatus}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <th>
                  <button onClick={() => getDeleteHistory(item.id)}>
                    <MdAutoDelete />
                  </button>
                </th>
              </tr>
            );
          })}
      </table>
    </div>
  );
};

export default PaymentHistory;
