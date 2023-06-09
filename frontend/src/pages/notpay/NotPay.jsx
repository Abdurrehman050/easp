import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";

const NotPay = () => {
  const navigate = useNavigate();
  const [thankYou, setThankYou] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    handlePayByCash();
  }, []);

  const handlePayByCash = async () => {
    try {
      // Save the order based on the gig ID
      await newRequest.post(`/orders/paybycash/${id}`, {
        pay_by_cash: true,
      }),
        // Show thank you message
        setThankYou(true);

      // Redirect to the orders page after 3 seconds
      setTimeout(() => {
        navigate("/orders");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {thankYou ? (
        <p>Thank you for your purchase!</p>
      ) : (
        <p>Processing your payment...</p>
      )}
    </div>
  );
};

export default NotPay;
