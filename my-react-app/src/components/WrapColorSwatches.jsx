
import React from "react";

const wrapColors = [
  {
    brand: "3M",
    name: "Gloss Black",
    code: "2080-G12",
    hex: "#0A0A0A",
    finish: "Gloss",
  },
  {
    brand: "3M",
    name: "Satin Key West",
    code: "2080-S327",
    hex: "#7cd0c0",
    finish: "Satin",
  },
  {
    brand: "3M",
    name: "Matte Deep Black",
    code: "2080-M22",
    hex: "#1f1f1f",
    finish: "Matte",
  },
  {
    brand: "3M",
    name: "Gloss Dragon Fire Red",
    code: "2080-G363",
    hex: "#b32134",
    finish: "Gloss",
  },
  {
    brand: "Avery Dennison",
    name: "Gloss White",
    code: "SW900-102-O",
    hex: "#ffffff",
    finish: "Gloss",
  },
  {
    brand: "Avery Dennison",
    name: "Satin Pearl Nero",
    code: "SW900-197-S",
    hex: "#1a1a1a",
    finish: "Satin",
  },
  {
    brand: "Avery Dennison",
    name: "Matte Metallic Grey",
    code: "SW900-805-M",
    hex: "#4e4f50",
    finish: "Matte Metallic",
  },
  {
    brand: "Avery Dennison",
    name: "Gloss Yellow",
    code: "SW900-235-O",
    hex: "#f4d000",
    finish: "Gloss",
  },
  {
    brand: "Oracal",
    name: "Gloss King Blue",
    code: "970RA-547",
    hex: "#004f9e",
    finish: "Gloss",
  },
  {
    brand: "Oracal",
    name: "Matte Mint",
    code: "970RA-626",
    hex: "#b2e3cc",
    finish: "Matte",
  },
  {
    brand: "Oracal",
    name: "Gloss Apple Green",
    code: "970RA-631",
    hex: "#7dc038",
    finish: "Gloss",
  },
  {
    brand: "Oracal",
    name: "Matte Black",
    code: "970RA-070",
    hex: "#1b1b1b",
    finish: "Matte",
  },
  {
    brand: "TeckWrap",
    name: "Gloss Midnight Purple",
    code: "CG05",
    hex: "#3e0069",
    finish: "Gloss",
  },
  {
    brand: "TeckWrap",
    name: "Matte Chrome Blue",
    code: "MC04",
    hex: "#005cba",
    finish: "Matte Chrome",
  },
  {
    brand: "TeckWrap",
    name: "Gloss Inferno Orange",
    code: "CG09",
    hex: "#ff4c1b",
    finish: "Gloss",
  },
  {
    brand: "TeckWrap",
    name: "Satin Pearl White",
    code: "S001",
    hex: "#f3f3f3",
    finish: "Satin Pearl",
  },
  {
    brand: "KPMF",
    name: "Matte Russet Red",
    code: "K75465",
    hex: "#7a3230",
    finish: "Matte",
  },
  {
    brand: "KPMF",
    name: "Gloss Viper Green",
    code: "K75460",
    hex: "#3dba4e",
    finish: "Gloss",
  },
  {
    brand: "KPMF",
    name: "Satin Rose Gold",
    code: "K75477",
    hex: "#b76e79",
    finish: "Satin",
  },
  {
    brand: "KPMF",
    name: "Matte Iced Blue Titanium",
    code: "K75529",
    hex: "#8ba1b0",
    finish: "Matte Metallic",
  },
];
function WrapColorSwatches({ selectedColor, onSelect }) {

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4 text-center">Choose a Wrap Color</h2>

      <div className="overflow-x-auto">
        <div className="flex gap-4 w-screen">
          {wrapColors.map((color) => {
            const isSelected = selectedColor === color.name;

            return (
              <button
                key={color.code}
                type="button"
                onClick={() => onSelect(color.name)}
                className={`flex-shrink-0 w-36 sm:w-40 text-center p-3 border rounded-lg transition ${
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-400"
                    : "hover:shadow-lg"
                }`}
              >
                <div
                  className="w-full h-28 rounded mb-2"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="text-sm font-medium">{color.name}</div>
                <div className="text-xs text-gray-500">{color.code}</div>
                <div className="text-xs text-gray-400">{color.finish}</div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedColor && (
        <p className="mt-4 text-center text-green-600">
          Selected Color: <strong>{selectedColor}</strong>
        </p>
      )}
    </div>
  );
}

export default WrapColorSwatches;
