"use client";
import { ServiceItemProps } from "@/utils/schema";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleOnHover } from "@/components/animations/motion";

const ServiceItem = (props: ServiceItemProps) => {
  return (
    <motion.div
      className="col-md-3 d-flex flex-column justify-content-between"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="d-flex justify-content-center"
        variants={scaleOnHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <img
          src={props.image}
          style={{ height: "15em" }}
          alt={"Mouhamed Bakhoum " + props.title}
        />
      </motion.div>
      <h4 className="my-5">{props.title}</h4>
    </motion.div>
  );
};

export default ServiceItem;
