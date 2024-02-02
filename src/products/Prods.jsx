import React, { useState } from "react";
import shoeData from "../demo.json";
import { motion } from "framer-motion";
import Sortwith from "./operations/Sortwith";
import Filterwith from "./operations/Filterwith";

const Prods = () => {
  const [data, setData] = useState(shoeData.shoes);
  const [filterHandler, setFilterHandler] = useState(false);

  return (
    <div className="wrapper flex">
      {filterHandler && (
        <Filterwith
          data={data}
          setData={setData}
          onCancel={() => setFilterHandler(false)}
        />
      )}

      <div className="w-[90%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="heading font-semibold text-4xl w-[90%] mx-auto mt-[5%] text-yellow-500 flex flex-col xl:flex-row justify-between "
        >
          <div className="text-center lg:text-start">
            Sneakstore 🛒
            <div className="subheading text-sm text-slate-800 mx-8 lg:mx-0">
              Get elegant picks for your feet, that makes you stand out ↴
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:text-sm text-xs md:mt-0 mt-5">
            <Sortwith data={data} setData={setData} />

            <button
              className="bg-yellow-400 text-slate-800 text-sm w-32 py-3 rounded-md"
              onClick={() => {
                setFilterHandler(true);
                setData(shoeData.shoes);
              }}
            >
              Apply filters
            </button>

            <button
              className="bg-red-400 text-slate-800 text-sm w-32 py-3 rounded-md"
              onClick={() => setData(shoeData.shoes)}
            >
              Clear filters
            </button>
          </div>
        </motion.div>

        {/* Mapping the products */}

        <div className="prod-wrapper flex w-full justify-center flex-wrap gap-5 mx-auto mt-10 py-5">
          {data.map((d, i) => {
            return (
              <motion.div
                initial={{ opacity: 0, x: 25, y: 25 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: (i + 1) * 0.3 }}
                className="cursor-pointer mb-8"
              >
                <img
                  className="w-96 h-96 object-cover rounded-lg transition-all duration-500 hover:scale-[1.012]"
                  src={d.imagePath}
                  alt=""
                />
                <div className="name mt-2 font-semibold text-xl capitalize mx-2 flex justify-start items-center gap-3 text-yellow-500">
                  {d.brand}
                  <div className="type font-normal text-base text-slate-800">
                    {d.type}
                  </div>
                </div>

                <div className="color mx-2 flex font-light items-center gap-2">
                  {d.color}{" "}
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: d.color }}
                  ></div>
                </div>
                <div className="sizes mx-2 font-light">
                  Available in {d.size.length} sizes
                </div>
                <div className="mx-2 font-semibold text-xl">$ {d.price}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prods;
