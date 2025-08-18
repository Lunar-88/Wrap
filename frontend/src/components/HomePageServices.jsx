

import { motion } from "framer-motion";
function HomePageServices() {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const services = [
    {
      title: "Vinyl Wraps",
      description:
        "Completely transform your vehicle’s look with high-quality vinyl wraps available in a variety of colors and finishes. It’s a stylish, non-permanent way to stand out and protect your paint.",
    },
    {
      title: "Tints",
      description:
        "Upgrade your ride with sleek window tints that enhance privacy, reduce glare, block UV rays, and keep your interior cooler—all while giving your vehicle a premium finish.",
    },
    {
      title: "Detailing",
      description:
        "Restore your vehicle’s shine with professional detailing that deep-cleans, polishes, and protects—inside and out. We leave your car looking and feeling like new.",
    },
    {
      title: "Face-lift",
      description:
        "Refresh your vehicle’s look with our custom face-lift services—upgrading body parts, trims, and styling elements to give it a modern, head-turning appearance.",
    },
    {
      title: "Ceramic coating",
      description:
        "Protect your vehicle with a long-lasting ceramic coating that shields against UV rays, dirt, and scratches—while giving it a deep, glossy finish that lasts for years.",
    },
    {
      title: "PPF",
      description:
        "Shield your vehicle’s paint from chips, scratches, and road debris with our high-quality, virtually invisible PPF. It preserves your car’s finish while maintaining its original look.",
    },
  ];

  return (
    <div className="min-h-svh pt-24">
      {/* pushes content below navbar */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-5"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePageServices;
