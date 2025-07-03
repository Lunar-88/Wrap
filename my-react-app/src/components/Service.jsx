import React from "react";

function Service({ onNext, onBack }) {
    const [formData, setFormData] = React.useState({
        service: "",
    });
    
    const services = [
        "Vinyl wrap", 
        "Tinting", 
        "Facelift", 
        "Ceramic coating",
        "PPF", 
        "Detailing", 
        "Paint correction", 
        "Headlight restoration"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.service) {
            onNext(formData.service); // Pass the selected service to parent
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-center py-8">Book Now</h1>
            
            <div className="flex flex-col items-center justify-center">
                <form 
                    onSubmit={handleSubmit} 
                    className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
                >
                    <h2 className="text-xl font-semibold mb-6 text-center">Select Your Service</h2>
                    
                    <div className="mb-6">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                            Service Type
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                        >
                            Back
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.service}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Service;