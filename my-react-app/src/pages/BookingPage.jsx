
import { useState } from "react";

function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "",
    time: ""
  });

  const services = [
    "Vinyl wrap", "Tinting", "Facelift", "Ceramic coating",
    "PPF", "Detailing", "Paint correction", "Headlight restoration"
  ];

  const generateHours24h = () => {
    const hours = [];
    for (let hour = 9; hour <= 17; hour++) {
      hours.push(`${hour.toString().padStart(2, '0')}00hrs`);
    }
    return hours;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="flex flex-col items-center bg-white p-8 rounded shadow-md">
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
          name="date"
          value={formData.date}
          onChange={handleChange}
          type="date"
          required
          className="mb-4 p-2 border rounded w-80"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="mb-4 p-2 border rounded w-80"
        >
          <option value="">Select Service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>

        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="mb-4 p-2 border rounded w-80"
        >
          <option value="">Select Time</option>
          {generateHours24h().map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
