import { useState } from "react";
import CarDetails from "../components/CarDetails";
import Service from "../components/Service";
import BookDate from "../components/BookDate";
import OwnerDetails from "../components/OwnerDetails";

function BookingPage() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    carDetails: null,
    service: null,
    date: null,
    ownerDetails: null
  });

  const goNext = () => setStep(prev => prev + 1);
  const goBack = () => setStep(prev => prev - 1);

  const updateBookingData = (newData) => {
    setBookingData(prev => ({ ...prev, ...newData }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-8">Book Now</h1>
      
      {/* Progress indicator */}
      <div className="flex justify-center mb-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`w-10 h-10 mx-2 rounded-full flex items-center justify-center 
              ${step >= stepNumber ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {stepNumber}
          </div>
        ))}
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
              updateBookingData({ service: data });
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
            onBack={goBack}
            onSubmit={(data) => {
              updateBookingData({ ownerDetails: data });
              console.log("Complete booking data:", {
                ...bookingData,
                ownerDetails: data
              });
              // Here you would typically send data to your backend
            }}
          />
        )}
      </div>
    </div>
  );
}

export default BookingPage;