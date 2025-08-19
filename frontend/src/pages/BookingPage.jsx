
import { useState } from "react";
import CarDetails from "../components/CarDetails";
import Service from "../components/Service";
import BookDate from "../components/BookDate";
import OwnerDetails from "../components/OwnerDetails";
import Summary from "../components/Summary";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // ✅ Prevent double clicks

  const [bookingData, setBookingData] = useState({
    carDetails: {},
    service: "",
    wrapColor: "",
    date: "",
    ownerDetails: {},
  });

  const goNext = () => setStep((prev) => prev + 1);
  const goBack = () => setStep((prev) => prev - 1);

  const updateBookingData = (newData) => {
    setBookingData((prev) => ({
      ...prev,
      ...newData,
      carDetails: { ...prev.carDetails, ...newData.carDetails },
      ownerDetails: { ...prev.ownerDetails, ...newData.ownerDetails },
    }));
  };

  const handleBookingSubmit = async () => {
    if (loading) return; // ✅ Ignore extra clicks
    setLoading(true);

    const isVinylWrap = bookingData.service === "Vinyl wrap";
    const payload = {
      name: bookingData.ownerDetails?.name,
      email: bookingData.ownerDetails?.email,
      phone: bookingData.ownerDetails?.phone,
      plate: bookingData.ownerDetails?.plate,
      car: `${bookingData.carDetails?.brand} ${bookingData.carDetails?.model}`,
      service: bookingData.service,
      date: bookingData.date ? new Date(bookingData.date).toISOString() : null,
      ...(isVinylWrap && bookingData.wrapType && { wrapType: bookingData.wrapType }),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit booking");
      }

      const data = await response.json();
      console.log("✅ Booking saved:", data);
      alert("🎉 Booking submitted successfully!");
    } catch (error) {
      console.error("❌ Error submitting booking:", error.message);
      alert(`Something went wrong: ${error.message}`);
    } finally {
      setLoading(false); // ✅ Unlock after request finishes
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-8">Book Now</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-xl mx-auto pt-3 mb-8 px-4">
        <div className="w-full bg-gray-300 h-3 rounded-full">
          <div
            className="bg-black h-3 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>
        <div className="text-sm text-center mt-2 text-gray-600">
          Step {step} of 5
        </div>
      </div>

      <div className="flex flex-col items-center pb-12">
        {step === 1 && (
          <CarDetails
            onNext={(data) => {
              updateBookingData({ carDetails: data });
              goNext();
            }}
          />
        )}

{step === 2 && (
  <Service
    onNext={(data) => {
      updateBookingData({
        service: data.service,
        wrapType: data.wrapType, // ✅ updated
      });
      goNext();
    }}
    onBack={goBack}
  />
)}


        {step === 3 && (
          <BookDate
            onNext={(data) => {
              updateBookingData({ date: data });
              goNext();
            }}
            onBack={goBack}
          />
        )}

        {step === 4 && (
          <OwnerDetails
            onNext={(data) => {
              updateBookingData({ ownerDetails: data });
              goNext();
            }}
            onBack={goBack}
          />
        )}

        {step === 5 && (
          <Summary
            bookingData={bookingData}
            onBack={goBack}
            onSubmit={handleBookingSubmit}
            loading={loading} // ✅ pass loading state down
          />
        )}
      </div>
    </div>
  );
}

export default BookingPage;
