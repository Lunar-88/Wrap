
import WrapColorSwatches from "../components/WrapColorSwatches";

function Ourservices() {
  return (
    <div className="min-h-svh pt-24"> {/* pushes content below navbar */}
       <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-5">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
               <h3 className="text-xl font-semibold mb-4">Vinyl Wraps</h3>
               <p className="text-gray-700">Completely transform your vehicle’s look with high-quality vinyl wraps available in a variety of colors and finishes. It’s a stylish, non-permanent way to stand out and protect your paint.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Tints</h3>
                <p className="text-gray-700">Upgrade your ride with sleek window tints that enhance privacy, reduce glare, block UV rays, and keep your interior cooler—all while giving your vehicle a premium finish.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Detailing</h3>
                <p className="text-gray-700">Restore your vehicle’s shine with professional detailing that deep-cleans, polishes, and protects—inside and out. We leave your car looking and feeling like new.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Face-lift</h3>
                <p className="text-gray-700">Refresh your vehicle’s look with our custom face-lift services—upgrading body parts, trims, and styling elements to give it a modern, head-turning appearance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Ceramic coating</h3>
                <p className="text-gray-700">Protect your vehicle with a long-lasting ceramic coating that shields against UV rays, dirt, and scratches—while giving it a deep, glossy finish that lasts for years.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">PPF</h3>
                <p className="text-gray-700">Shield your vehicle’s paint from chips, scratches, and road debris with our high-quality, virtually invisible PPF. It preserves your car’s finish while maintaining its original look.</p>
            </div>
        </div>
      </div>
      <div className="mt-10 pb-10 max-w-screen w-full">
        <h1 className="text-2xl font-bold text-center mb-5">Available wrap colors</h1>

        {/* WrapColorSwatches component to display color options */}
            <WrapColorSwatches/>
          </div>
    </div>
  );
}
export default Ourservices;