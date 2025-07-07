
import React from "react";
import { PaystackButton } from "react-paystack";

const PaystackBtn = ({ email, amount, bookingId, onSuccess, onClose }) => {
  const publicKey = "pk_live_31ba2941acf2526e8e2bec09decab4e9653d53e4"; // Replace with your actual Paystack public key

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects amount in kobo
    metadata: {
      custom_fields: [
        {
          display_name: "Booking ID",
          variable_name: "booking_id",
          value: bookingId || "N/A",
        },
      ],
    },
    publicKey,
    text: "Pay Now",
    onSuccess: (transaction) => {
      console.log("Transaction successful:", transaction);
      onSuccess(transaction);
    },
    onClose: () => {
      console.log("Payment closed");
      onClose();
    },
  };

  return (
    <PaystackButton
      {...componentProps}
      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
    />
  );
};

export default PaystackBtn;
