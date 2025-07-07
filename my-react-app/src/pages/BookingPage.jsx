import { useState } from "react";
import CarDetails from "../components/CarDetails";
import Service from "../components/Service";
import BookDate from "../components/BookDate";
import OwnerDetails from "../components/OwnerDetails";
import Summary from "../components/Summary";
import PaystackBtn from "../components/PaystackBtn";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    carDetails: {},
    service: "",
    wrapColor: "",
    date: "",
    ownerDetails: {}
  });

  const goNext = () => setStep(prev => prev + 1);
  const goBack = () => setStep(prev => prev - 1);

  const updateBookingData = (newData) => {
    setBookingData(prev => {
      return {
        ...prev,
        ...newData,
        // Handle nested fields explicitly
        carDetails: { ...prev.carDetails, ...newData.carDetails },
        ownerDetails: { ...prev.ownerDetails, ...newData.ownerDetails },
      };
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-8">Book Now</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-xl mx-auto pt-3 mb-8 px-4">
        <div className="w-full bg-gray-300 h-3 rounded-full">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(step - 1) / 4 * 100}%` }}
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
                wrapColor: data.wrapColor,
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
              console.log("✅ Full booking data before summary:", {
                ...bookingData,
                ownerDetails: data,
              });
              goNext();
            }}
            onBack={goBack}
          />
        )}

        {step === 5 && (
          <Summary
            bookingData={bookingData}
            onBack={goBack}
            onSubmit={async () => {
              const payload = {
                name: bookingData.ownerDetails?.name,
                email: bookingData.ownerDetails?.email,
                phone: bookingData.ownerDetails?.phone,
                plate: bookingData.ownerDetails?.plate,
                car: `${bookingData.carDetails?.brand} ${bookingData.carDetails?.model}`,
                service: bookingData.service,
                wrapColor: bookingData.wrapColor || null,
                date: bookingData.date,
              };

              console.log("🚀 Submitting booking:", payload);

              try {
                const response = await fetch("http://localhost:5000/api/bookings", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(payload),
                });

                if (!response.ok) {
                  throw new Error("Failed to submit booking");
                }

                const data = await response.json();
                console.log("✅ Booking confirmed:", data);
                alert("Booking confirmed successfully!");
              } catch (error) {
                console.error("❌ Error submitting booking:", error);
                alert("Something went wrong while confirming your booking.");
              }
            }}
          />
        )}
        {step === 6 && (
          <PaystackBtn
            amount={1000} // Example amount, replace with actual
            onSuccess={(transaction) => {
              console.log("✅ Payment successful:", transaction);
              alert("Payment successful! Thank you for your booking.");
            }}
            onClose={() => {
              console.log("❌ Payment closed");
              alert("Payment process was closed.");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BookingPage;
