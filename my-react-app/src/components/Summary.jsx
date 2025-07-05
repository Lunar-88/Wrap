
import React from 'react';

function Summary({ bookingData, onBack, onSubmit }) {
  const { carDetails, service,wrapColor, date, ownerDetails } = bookingData;

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
        <button onClick={onBack} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700">
          Back
        </button>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-black text-white rounded hover:bg-slate-700"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}

export default Summary;
