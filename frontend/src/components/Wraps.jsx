
import { motion } from "framer-motion";

const wraps = [
  { id: "gloss", title: "Gloss Wrap" },
  { id: "matte", title: "Matte Wrap" },
  { id: "satin", title: "Satin Wrap" },
  { id: "carbon", title: "Carbon Fiber Wrap" },
  { id: "chrome", title: "Chrome Wrap" },
  { id: "printed", title: "Custom Printed Wrap" },
  { id: "ppf", title: "Paint Protection Film (PPF)" },
  { id: "color-shift", title: "Color-Shift Wrap" },
];

function Wraps({ selectedColor, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {wraps.map((wrap) => (
        <motion.div
          key={wrap.id}
          whileHover={{ scale: 1.05 }}
          onClick={() => onSelect(wrap.id)}
          className={`cursor-pointer rounded-xl p-4 shadow-md border transition-all ${
            selectedColor === wrap.id
              ? "border-black ring-2 ring-black"
              : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold">{wrap.title}</h3>
        </motion.div>
      ))}
    </div>
  );
}

export default Wraps;
