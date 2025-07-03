import React, { useState } from 'react';

function OwnerDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.plate) {
      onNext(formData); // Pass formData if needed
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Book Now</h1>
      <div className="p-3 flex flex-col items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-8 rounded shadow-md">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="mb-4 p-2 border rounded w-80"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="mb-4 p-2 border rounded w-80"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="mb-4 p-2 border rounded w-80"
          />
          <input
            name="plate"
            value={formData.plate}
            onChange={handleChange}
            type="text"
            placeholder="License Plate"
            required
            className="mb-4 p-2 border rounded w-80"
          />
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              onClick={onBack}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OwnerDetails;
