
import React, { useState } from 'react';

function Summary({ bookingData, onBack, onSubmit }) {
  const { carDetails, service, wrapType = null, date, ownerDetails } = bookingData;
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onSubmit();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md max-w-lg w-full mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center">Review Your Booking</h2>

      <div className="space-y-4 text-gray-700 text-sm sm:text-base">
        <div>
          <h3 className="font-semibold">Service:</h3>
          <p>{service}</p>
        </div>

        {service === "Vinyl wrap" && wrapType && (
          <div>
            <h3 className="font-semibold">Wrap Type:</h3>
            <p>{wrapType}</p>
          </div>
        )}

        <div>
          <h3 className="font-semibold">Car Details:</h3>
          <p>Brand: {carDetails?.brand}</p>
          <p>Model: {carDetails?.model}</p>
        </div>

        <div>
          <h3 className="font-semibold">Date:</h3>
          <p>
            {date ? new Date(date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : ""}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Owner Info:</h3>
          <p>Name: {ownerDetails?.name}</p>
          <p>Email: {ownerDetails?.email}</p>
          <p>Phone: {ownerDetails?.phone}</p>
          <p>Plate: {ownerDetails?.plate}</p>
        </div>
      </div>

      <div className="flex sm:flex-row justify-between gap-3 mt-6">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-300 transition"
        >
          Back
        </button>

        <button
          onClick={handleConfirm}
          disabled={loading}
          className={`px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center justify-center transition ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Confirming...
            </span>
          ) : (
            "Confirm Booking"
          )}
        </button>
      </div>
    </div>
  );
}

export default Summary;
