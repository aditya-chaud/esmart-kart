import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { Typography } from "@mui/material";

const Payment = () => {
  return (
    <div className="orderSuccess">
      <Typography>Order has been placed successfully</Typography>
      <Typography>Cash On Delivery</Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default Payment;
