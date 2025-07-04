
import BeforeAfterSlider from "../components/BeforeAfterSlider";

function Media() {
  return (
    <div className="min-h-screen pt-28 pb-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4">Gallery</h2>
        <div className=" bg-gray-100">
            <BeforeAfterSlider
             beforeImage="image22.png"
             afterImage="hero2.png"
            />
        </div>
        <div className="pt-10 bg-gray-100">
            <BeforeAfterSlider
             beforeImage="image22.png"
             afterImage="hero2.png"
            />
        </div>
        <div className="pt-10 bg-gray-100">
            <BeforeAfterSlider
             beforeImage="image22.png"
             afterImage="hero2.png"
            />
        </div>
    </div>
  );
}
export default Media;
