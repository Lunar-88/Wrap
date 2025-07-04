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
        "Audi", "BMW", "Chevrolet", "Dodge", "Ford", "Honda", "Hyundai", "Jaguar",
        "Jeep", "Kia", "Land Rover", "Lexus", "Mazda", "Mercedes", "Mitsubishi",
        "Nissan", "Porsche", "Subaru", "Toyota", "Volkswagen", "Volvo" 
    ];
    
    // Could make this dynamic based on brand selection
    const carModels = {
        "Toyota": ["Camry", "Harrier", "Corolla", "RAV4", "Prius", "Highlander", "Tacoma", "Tundra", "C-HR", "Land Cruiser", "Crown", "Supra"],
        "Honda": ["Civic", "Accord", "CR-V", "Pilot"],
        "Ford": ["F-150", "Mustang", "Explorer", "Focus"],
        "Chevrolet": ["Silverado", "Malibu", "Equinox", "Camaro"],
        "BMW": ["1 Series", "3 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7"],
        "Mercedes": ["A-Class", "C-Class", "E-Class", "S-Class", "GLA", "GLC", "GLE", "GLS", "AMG", "EQB", "EQS"],
        "Volkswagen": ["Golf", "Passat", "Tiguan", "Jetta", "Atlas", "ID.4", "Arteon", "T-Cross", "Touareg"],
        "Nissan": ["Altima", "Maxima", "Rogue", "Sentra"],
        "Audi": ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8"],
        "Jaguar": ["F-PACE", "XE", "XF", "XJ"],
        "Jeep": ["Wrangler", "Cherokee", "Grand Cherokee", "Renegade"],
        "Subaru": ["Impreza", "Legacy", "Outback", "Forester", "Ascent", "Crosstrek", "BRZ", "WRX"],
        "Kia": ["Optima", "Sorento", "Sportage", "Seltos"],
        "Hyundai": ["Elantra", "Sonata", "Tucson", "Santa Fe"],
        "Mazda": ["Mazda3", "Mazda6", "CX-5", "CX-9", "Atenza", "Axela", "MX-5 Miata"],
        "Dodge": ["Charger", "Challenger", "Durango", "Ram","SRT"],
        "Porsche": ["911", "Cayenne", "Macan", "Panamera", "Taycan", "Boxster", "Cayman"],
        "Volvo": ["S60", "S90", "XC40", "XC60", "XC90", "V60", "V90", "C40 Recharge"],
        "Land Rover": ["Range Rover", "Discovery", "Defender"],
        "Mitsubishi": ["Outlander", "Eclipse Cross", "Lancer"],
        "Lexus": ["IS", "ES", "GS", "RX", "NX", "LX"],
        
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
            onNext(formData);
        } else {
            setError("Please fill in all fields before continuing.");
        }
    };

    const currentModels = carModels[formData.brand] || [];

    return (
        <div>
            <h1 className="text-2xl font-bold text-center p-10">Book Now</h1>
            <div className="flex flex-col items-center justify-center bg-gray-100 ">
                <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-32 rounded shadow-md w-full max-w-md">
                    {error && (
                        <div className="mb-4 text-red-500 text-sm">{error}</div>
                    )}
                    
                    <div className="mb-4 w-full">
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