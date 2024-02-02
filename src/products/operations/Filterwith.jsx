import React, { useState } from "react";
import maindata from "../../demo.json";
import { motion } from "framer-motion";

const Filterwith = ({ data, setData, onCancel }) => {
  const [filterData, setFilterData] = useState(data);
  const [brand, setBrand] = useState([]);
  const [color, setColor] = useState([]);
  const [material, setMaterial] = useState([]);
  const [type, setType] = useState([]);

  const brandsArray = Array.from(new Set(filterData.map((shoe) => shoe.brand)));
  const colorsArray = Array.from(new Set(filterData.map((shoe) => shoe.color)));
  const materialsArray = Array.from(
    new Set(filterData.map((shoe) => shoe.material))
  );
  const typesArray = Array.from(new Set(filterData.map((shoe) => shoe.type)));

  const handleBrand = (b) => {
    if (brand.includes(b)) {
      //remove the brand from filters
      setBrand(brand.filter((br) => br !== b));
      return;
    }
    //else add
    setBrand((prev) => [...prev, b]);
  };

  const handleColor = (c) => {
    if (color.includes(c)) {
      //remove the color from filters
      setColor(color.filter((cr) => cr !== c));
      return;
    }
    //else add
    setColor((prev) => [...prev, c]);
  };

  const handleMaterial = (m) => {
    if (material.includes(m)) {
      //remove the material from filters
      setMaterial(material.filter((mr) => mr !== m));
      return;
    }
    //else add
    setMaterial((prev) => [...prev, m]);
  };

  const handleType = (t) => {
    if (type.includes(t)) {
      //remove the brand from filters
      setBrand(type.filter((tr) => tr !== t));
      return;
    }
    //else add
    setType((prev) => [...prev, t]);
  };

  function filterShoes(f) {
    console.log(f);
    return data.filter((shoe) => {
      for (const key in f) {
        const filterOptions = f[key];
        if (filterOptions.length === 0) continue; // Skip empty filter arrays
        const shoeValue = Array.isArray(shoe[key]) ? shoe[key] : [shoe[key]];
        if (!filterOptions.some((option) => shoeValue.includes(option))) {
          return false;
        }
      }
      return true;
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="xl:w-[45%] w-[92%] absolute z-10 left-0 top-0 p-10 xl:p-14 overflow-y-scroll bg-gray-50 h-[100vh]"
    >
      <button
        className="absolute right-5 rounded-full text-xs font-semibold text-white top-5"
        onClick={onCancel}
      >
        ❌
      </button>
      <div className="filters font-semibold text-4xl">
        Get your Favs 🎉
        <div className="flex justify-start gap-1 mt-2">
          <button
            className="bg-black text-white w-36 px-5 py-3 mt-3 font-semibold text-sm rounded-md"
            onClick={() => {
              const res = filterShoes({
                brand,
                color,
                material,
                type,
              });
              setData(res);
              onCancel()
            }}
          >
            Apply filters
          </button>
          <button
            className="bg-red-600 text-white w-36 px-5 py-3 mt-3 font-semibold text-sm rounded-md"
            onClick={() => {
              setData(maindata.shoes);
              setBrand([]);
              setColor([]);
              setMaterial([]);
              setType([]);
            }}
          >
            Clear filters
          </button>
        </div>
      </div>

      {/* brands  */}
      <div className="text-lg font-semibold mt-5">
        Brands
        <div className="filter-brand flex flex-wrap gap-2 mt-2">
          {brandsArray.map((b) => {
            return (
              <div
                className={`${
                  brand.includes(b) ? "bg-gray-300" : "bg-yellow-400"
                } text-xs font-semibold px-4 py-2 rounded-md cursor-pointer`}
                onClick={() => handleBrand(b)}
              >
                {b}
              </div>
            );
          })}
        </div>
      </div>

      {/* colors  */}
      <div className="text-lg font-semibold mt-5">
        Color
        <div className="filter-brand flex flex-wrap gap-3 mt-2">
          {colorsArray.map((c) => {
            return (
              <div
                className="w-9 h-9 rounded-full cursor-pointer"
                style={{
                  backgroundColor: c,
                  border: color.includes(c) ? "2px solid #ebb305" : null,
                }}
                onClick={() => handleColor(c)}
              ></div>
            );
          })}
        </div>
      </div>

      {/* material */}
      <div className="text-lg font-semibold mt-5">
        Material
        <div className="filter-brand flex flex-wrap gap-2 mt-2">
          {materialsArray.map((m) => {
            return (
              <div
                className={`${
                  material.includes(m) ? "bg-gray-300" : "bg-yellow-400"
                } text-xs font-semibold px-4 py-2 rounded-md cursor-pointer`}
                onClick={() => handleMaterial(m)}
              >
                {m}
              </div>
            );
          })}
        </div>
      </div>

      {/* type  */}
      <div className="text-lg font-semibold mt-5">
        Type
        <div className="filter-brand flex flex-wrap gap-2 mt-2">
          {Array.from(
            new Set(
              typesArray.map((t) => {
                return (
                  <div
                    className={`${
                      type.includes(t) ? "bg-gray-300" : "bg-yellow-400"
                    } text-xs font-semibold px-4 py-2 rounded-md cursor-pointer`}
                    onClick={() => handleType(t)}
                  >
                    {t}
                  </div>
                );
              })
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Filterwith;
