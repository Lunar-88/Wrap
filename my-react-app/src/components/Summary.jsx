
import React from 'react';
import { PaystackButton } from 'react-paystack';

function Summary({ bookingData, onBack, onSubmit }) {
  const { carDetails, service, wrapColor = null, date, ownerDetails } = bookingData;

  const publicKey = "pk_test_1234567890abcdef"; // 🔁 Replace with your Paystack public key
  const amount = service === "Vinyl wrap" ? 15000 : 5000;

  const paystackProps = {
    email: ownerDetails?.email,
    amount: amount * 100, // Paystack uses kobo
    publicKey,
    text: "Pay Now",
    metadata: {
      custom_fields: [
        {
          display_name: "Service",
          variable_name: "service",
          value: service,
        },
        {
          display_name: "Plate Number",
          variable_name: "plate",
          value: ownerDetails?.plate,
        },
      ],
    },

    onSuccess: async (ref) => {
      alert(`Payment successful! Verifying...`);

      try {
        const res = await fetch("http://localhost:5000/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reference: ref.reference,
            bookingData,
          }),
        });

        const data = await res.json();

        if (data.status === "success") {
          alert("Booking confirmed and saved ✅");
          onSubmit(); // Now safe to call onSubmit (final step)
        } else {
          alert("Payment verification failed ❌. Please contact support.");
        }
      } catch (err) {
        console.error("Error verifying payment:", err);
        alert("Server error verifying payment. Try again later.");
      }
    },

    onClose: () => {
      alert("Payment popup closed.");
    },
  };

  return (
    <div className="bg-white p-8 rounded shadow-md max-w-lg w-full">
      <h2 className="text-xl font-bold mb-6 text-center">Review Your Booking</h2>

      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="font-semibold">Service:</h3>
          <p>{service}</p>
        </div>

        {service === "Vinyl wrap" && wrapColor && (
          <div>
            <h3 className="font-semibold">Wrap Color:</h3>
            <p>{wrapColor}</p>
          </div>
        )}

        <div>
          <h3 className="font-semibold">Car Details:</h3>
          <p>Type: {carDetails?.type}</p>
          <p>Brand: {carDetails?.brand}</p>
          <p>Model: {carDetails?.model}</p>
        </div>

        <div>
          <h3 className="font-semibold">Date:</h3>
          <p>{new Date(date).toDateString()}</p>
        </div>

        <div>
          <h3 className="font-semibold">Owner Info:</h3>
          <p>Name: {ownerDetails?.name}</p>
          <p>Email: {ownerDetails?.email}</p>
          <p>Phone: {ownerDetails?.phone}</p>
          <p>Plate: {ownerDetails?.plate}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700"
        >
          Back
        </button>

        <PaystackButton
          {...paystackProps}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        />
      </div>
    </div>
  );
}

export default Summary;
