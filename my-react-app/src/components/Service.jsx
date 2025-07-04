
import React from "react";
import WrapColorSwatches from "../components/WrapColorSwatches";

function Service({ onNext, onBack }) {
  const [formData, setFormData] = React.useState({
    service: "",
    wrapColor: "",
  });

  const services = [
    "Vinyl wrap",
    "Tinting",
    "Facelift",
    "Ceramic coating",
    "PPF",
    "Detailing",
    "Paint correction",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear wrap color if service is changed away from Vinyl wrap
    if (name === "service" && value !== "Vinyl wrap") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        wrapColor: "", // reset
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.service === "Vinyl wrap" && !formData.wrapColor) {
      alert("Please select a wrap color.");
      return;
    }

    onNext(formData);
  };

  const isNextDisabled =
    !formData.service ||
    (formData.service === "Vinyl wrap" && !formData.wrapColor);

  return (
    <div className="min-h-screen  bg-gray-100">
      <h1 className="text-2xl font-bold text-center py-8">Book Now</h1>

      <div className="flex  flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-screen max-w-md bg-white py-8 px-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            Select a Service
          </h2>

          <div className="pt-6 mb-6">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a Service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onBack}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isNextDisabled}
              className={`px-4 py-2 rounded-md text-white ${
                isNextDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-black hover:bg-gray-700"
              }`}
            >
              Next
            </button>
          </div>
        </form>

        {/* Show swatches only if Vinyl wrap is selected */}
        {formData.service === "Vinyl wrap" && (
          <div className="mt-10 max-w-screen-md w-full">
            <WrapColorSwatches
              selectedColor={formData.wrapColor}
              onSelect={(color) =>
                setFormData((prev) => ({ ...prev, wrapColor: color }))
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Service;
