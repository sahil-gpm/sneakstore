import React from "react";
import main from "../assets/main.avif";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate("/");

  return (
    <div className="intro-wrapper text-center">
      <div className="main-img mt-[24%] lg:mt-[5%]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4.5 }}
          className="p-1 bg-gradient-to-br from-red-600 via-yellow-400 to-green-500 w-fit mx-auto rounded-full"
        >
          <img
            src={main}
            className="lg:w-56 lg:h-56 w-32 rounded-full bg-black/5 bg-blend-darken mx-auto"
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="main-head text-center font-semibold text-4xl lg:text-5xl mt-4"
        >
          Sneakstore, Elevate your steps 🛒
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="description text-center text-sm text-gray-800 w-[78%] xl:w-1/2 mx-auto mt-10"
        >
          Step into the world of footwear fashion at SneakStore. Explore a
          curated collection featuring everything from trendy sneakers to classy
          boots. 🚶‍♂️ Our smart filters for brand, material, color, and type make
          finding your perfect pair a breeze. 🧐 Elevate your style effortlessly
          with SneakStore – where convenience meets fashion. 🛍️✨👞
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className=" bg-yellow-400 mt-10 text-base font-semibold w-56 py-3 rounded-md"
          onClick={() => navigate("/products")}
        >
          Get your favourite sneakers
        </motion.button>

        <br />

        <Link to={"https://github.com/sahil-gpm/sneakstore"} target="_blank">
          <motion.button
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className=" bg-gray-400 mt-3 text-base font-semibold w-56 py-3 rounded-md"
            onClick={() => navigate("/products")}
          >
            Github link to the project
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
