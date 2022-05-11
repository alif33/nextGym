import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import { setCustomers } from "../../../../store/customers/actions";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import Modals from "../../Modals/Modals";
import PaymentDetail from "./PaymentDetail";
import Barcode from "react-barcode";

const ReciptModal = ({ trigger, setTrigger }) => {
  const customStyle = {
    borderBottom: "2px dotted gray",
  };

  return (
    <>
      <Modals trigger={trigger} setTrigger={setTrigger} size={"modal-sm"}>
        <h4>Invoice POS</h4>
        <hr />
        <div className="mt-2 text-black">
          <h1 className="text-center fw-bold text-black">Stocky</h1>
          <div>
            <div className="mb-0">Date: {new Date().toLocaleDateString()}</div>
            <div className="mb-0">Address: 3618 Abia Martin</div>
            <div className="mb-0">Email: jahid0734@gmail.com</div>
            <div className="mb-0">Phone: 017XXXXXXX</div>
            <div className="mb-0">Customer: Jahid Hasan</div>
          </div>
          <div className="mt-1">
            <div className="mb-50">
              Avocat
              <div
                className="d-flex justify-content-between"
                style={customStyle}
              >
                <span>1.00 KG X 15.00 </span>
                <span>15.00</span>
              </div>
            </div>
            <div className="mb-50">
              Watch
              <div
                className="d-flex justify-content-between"
                style={customStyle}
              >
                <span>1.00 KG X 15.00</span>
                <span>15.00</span>
              </div>
            </div>
            <div className="mb-50">
              <div
                className="d-flex justify-content-between fw-bolder"
                style={customStyle}
              >
                <span>Order Tax</span>
                <span>USD 0.00 (00.0 %)</span>
              </div>
            </div>
            <div className="mb-50">
              <div
                className="d-flex justify-content-between fw-bolder"
                style={customStyle}
              >
                <span>Discount </span>
                <span>USD 0.00</span>
              </div>
            </div>
            <div className="mb-50">
              <div
                className="d-flex justify-content-between fw-bolder"
                style={customStyle}
              >
                <span>Grand Total </span>
                <span>USD 00.0</span>
              </div>
            </div>
          </div>
          <div className="my-1">
            <div className="mb-50">
              <div
                className="d-flex justify-content-between py-25"
                style={{
                  borderBottom: "2px dotted gray",
                  background: "lightgrey",
                }}
              >
                <span>Paid By:</span>
                <span>Amount:</span>
                <span>Charge:</span>
              </div>
            </div>
            <div className="mb-50">
              <div
                className="d-flex justify-content-between"
                style={{
                  borderBottom: "2px dotted gray",
                }}
              >
                <span>Cash</span>
                <span>49.00</span>
                <span>$1.00</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h5 className="fw-bolder text-black ">
              Thank You For Shopping With Us.
            </h5>
            <h5 className="fw-bolder text-black">Please Came Again</h5>
          </div>
          <div className="text-center">
            <Barcode height={50} width={0.8} value="http://github.com" />
          </div>
        </div>
        <div className="mt-2">
          <button className="btn btn-outline-primary">Print</button>
        </div>
      </Modals>
    </>
  );
};

export default ReciptModal;
