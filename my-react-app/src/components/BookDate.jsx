
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function BookDate({ onNext, onBack }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4">Choose a Date</h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        minDate={new Date()}
        inline // 👈 displays the full calendar inline
      />

      <div className="flex justify-between mt-4">
        <button onClick={onBack} className="bg-gray-300 px-4 py-2 rounded">Back</button>
        <button onClick={() => onNext(selectedDate)} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default BookDate;


