import React from "react";
import "./aboutprod.css";
const AboutProduct = () => {
  return (
    <div id="about-prod">
      <div>
        <div
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "auto",
            padding: "10px",
            maxWidth: "90%",
            margin: "auto",
            marginTop: "50px",
            background: "white",
          }}
        >
          <h3>Why ❤️ ValintineSaga ?</h3>
          <ul style={{ padding: "25px" }}>
            <li style={{ textAlign: "start", marginBottom: "10px" }}>
              👍 Trusted Platform - More than 1,000 celebrations every month
            </li>
            <li style={{ textAlign: "start", marginBottom: "10px" }}>
              👍 Professional Team - Follows all Safety Measures & Sanitisation
              Requirements
            </li>
            <li style={{ textAlign: "start", marginBottom: "10px" }}>
              👍 Complete Confidence - Browse all Verified Reviews and Original
              Photographs
            </li>
            <li style={{ textAlign: "start", marginBottom: "10px" }}>
              👍 100% Refund - In case of non-availability, a complete refund of
              total amount is initiated
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          height: "auto",
          padding: "10px",
          maxWidth: "90%",
          margin: "auto",
          marginTop: "50px",
          background: "white",
        }}
      >
        <h3>Cancelation Policy</h3>
        <ul style={{ padding: "25px" }}>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            Refunds for experiences to be availed in the next 72 hours will be
            done only in ValentineSaga Wallet.
          </li>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            Less than 24 hours before an experience: Cancellation with NO
            Refund. 24 hours to 2 days before an experience: Cancellation with
            95% Refund in ValentineSaga Wallet.
          </li>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            No Cancellation for Digital experiences. Refund will be in
            ValentineSaga Wallet only.
          </li>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            2 days or more before an experience: Cancellation with 100% Refund
            in ValentineSaga Wallet.
          </li>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            In case of a Rain/Hailstorm or Any other act of God, Only Reschedule
            will be entertained and No Cancellation will be done.
          </li>
          <li style={{ textAlign: "start", marginBottom: "10px" }}>
            96% Refund in the original payment method if canceled within 72
            hours of the booking, except for Romantic Stay packages where 40% of
            the money will be refunded in the original payment method.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutProduct;
