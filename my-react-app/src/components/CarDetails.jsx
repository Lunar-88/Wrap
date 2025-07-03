import { useState } from 'react';

function CarDetails({ onNext }) {
    const [formData, setFormData] = useState({
        type: "",
        brand: "",
        model: ""
    });

    const [error, setError] = useState("");

    const carTypes = [
        "Sedan", "SUV", "Truck", "Coupe", "Hatchback", "Convertible"
    ];
    
    const carBrands = [
        "Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Audi"
    ];
    
    // Could make this dynamic based on brand selection
    const carModels = {
        "Toyota": ["Camry", "Corolla", "RAV4", "Prius"],
        "Honda": ["Civic", "Accord", "CR-V", "Pilot"],
        "Ford": ["F-150", "Mustang", "Explorer", "Focus"],
        "Chevrolet": ["Silverado", "Malibu", "Equinox", "Camaro"],
        "BMW": ["3 Series", "5 Series", "X5", "X3"],
        "Audi": ["A4", "A6", "Q5", "Q7"]
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ 
            ...prev, 
            [name]: value,
            // Reset dependent fields when parent changes
            ...(name === "brand" && { model: "" })
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const { type, brand, model } = formData;
        if (type && brand && model) {
            console.log("Car details submitted:", formData);
            onNext();
        } else {
            setError("Please fill in all fields before continuing.");
        }
    };

    const currentModels = carModels[formData.brand] || [];

    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-10">Book Now</h1>
            <div className="flex flex-col items-center justify-center bg-gray-100">
                <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-10 rounded shadow-md w-full max-w-md">
                    {error && (
                        <div className="mb-4 text-red-500 text-sm">{error}</div>
                    )}
                    
                    <div className="mb-4 w-full">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                            Car Type
                        </label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded w-full"
                        >
                            <option value="">Select Car Type</option>
                            {carTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                    
                    <div className="mb-4 w-full">
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-1">
                            Car Brand
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            required
                            className="p-2 border rounded w-full"
                        >
                            <option value="">Select Car Brand</option>
                            {carBrands.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6 w-full">
                        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                            Car Model
                        </label>
                        <select
                            id="model"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            required
                            disabled={!formData.brand}
                            className="p-2 border rounded w-full disabled:opacity-50"
                        >
                            <option value="">{formData.brand ? "Select Model" : "Select a brand first"}</option>
                            {currentModels.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    </div>

                    <button 
                        type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full">Next
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CarDetails;