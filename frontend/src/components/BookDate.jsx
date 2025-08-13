
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookDate({ onNext, onBack }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="pt-8 items-center justify-center bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">Book Now</h1>

      <div className="scale-[1.2] py-14 flex flex-col items-center justify-center">
      <DatePicker className=""
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        inline
      />
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="bg-black text-white px-4 py-2 rounded">Back</button>
        <button onClick={() => onNext(selectedDate)} className="bg-black text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default BookDate;


