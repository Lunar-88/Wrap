
import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false; // ✅ Prevent duplicate fetch in Strict Mode

    fetch("http://localhost:5000/api/bookings")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("📦 API response:", data);
        if (!ignore) {
          // ✅ Correctly extract the array from data.data
          setBookings(Array.isArray(data.data) ? data.data : []);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching bookings:", err);
        if (!ignore) {
          setError("Failed to load bookings.");
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.href = "/";
  };

  return (
    <div className="pt-6 min-h-screen bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="pl-8 text-2xl font-bold">Admin Dashboard</h1>
        <div className="pr-8">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="px-2 overflow-x-auto w-screen bg-white shadow-md rounded">
        {loading ? (
          <p className="p-4">Loading bookings...</p>
        ) : error ? (
          <p className="p-4 text-red-500">{error}</p>
        ) : bookings.length === 0 ? (
          <p className="p-4">No bookings found.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Car</th>
                <th className="px-4 py-2 text-left">Wrap Color</th>
                <th className="px-4 py-2 text-left">Plate</th>
                <th className="px-4 py-2 text-left">Service</th>
                <th className="px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="border-t">
                  <td className="px-4 py-2">{booking.name}</td>
                  <td className="px-4 py-2">{booking.phone}</td>
                  <td className="px-4 py-2">{booking.email}</td>
                  <td className="px-4 py-2">{booking.car}</td>
                  <td className="px-4 py-2">{booking.wrapColor || "N/A"}</td>
                  <td className="px-4 py-2">{booking.plate}</td>
                  <td className="px-4 py-2">{booking.service}</td>
                  <td className="px-4 py-2">
                    {new Date(booking.date).toDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
