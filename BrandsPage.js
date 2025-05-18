import React from "react";
import { motion } from "framer-motion";

const brands = [
  {
    name: "Luna Glow",
    description: "מותג טיפוח מינימליסטי בשיתוף לונה כהן – עוקב אחר עקרונות ניקיון, אור וקלות.",
    image: "/images/brands/luna.jpg"
  },
  {
    name: "RAW FIT",
    description: "אביזרי אימון וניידות בשיתוף עם בן אטיאס – מותג אקטיבי לגברים צעירים.",
    image: "/images/brands/rawfit.jpg"
  },
  {
    name: "Nola Home",
    description: "קולקציית בית רכה ומדויקת עם נגיעה סקנדינבית – בשיתוף נועה אזולאי.",
    image: "/images/brands/nola.jpg"
  },
  {
    name: "ROOTS",
    description: "מותג טבעוני-אורבני למוצרים ירוקים בהשראת קהילת הקיימות של גיא חזום.",
    image: "/images/brands/roots.jpg"
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        המותגים שלנו
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white/5 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{brand.name}</h3>
              <p className="text-sm text-gray-300">{brand.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
