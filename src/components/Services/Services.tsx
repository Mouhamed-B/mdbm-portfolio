"use client";
import { ServiceProps } from "@/utils/schema";
import React from "react";
import ServiceItem from "./ServiceItem";
import { motion } from "framer-motion";
import { staggerContainer } from "@/components/animations/motion";

const Services = (props: ServiceProps) => {
  return (
    <section className="page-section py-5" id="services">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Titles rendered without motion animation for faster paint */}
        <div className="text-center mb-4">
          <h2 className="section-heading text-uppercase">{props.title}</h2>
          <h3 className="section-subheading text-muted">{props.text}</h3>
        </div>
        <div className="row text-center">
          {props.items.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              text={service.text}
              image={service.image}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
