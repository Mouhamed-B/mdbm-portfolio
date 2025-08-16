"use client";
import { ExperienceProps } from "@/utils/schema";
import React from "react";
import ExperienceItem from "./ExperienceItem";
import { motion } from "framer-motion";
import { staggerContainer } from "@/components/animations/motion";

const Experience = (props: ExperienceProps) => {
  return (
    <section className="page-section" id="experience">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-center mb-4">
          <h2 className="section-heading text-uppercase">{props.title}</h2>
          <h3 className="section-subheading text-muted">{props.text}</h3>
        </div>
        <ul className="timeline list-unstyled p-0 m-0">
          {props.items.map((item, index) => {
            const inverted = index % 2 === 1;
            return (
              <li
                className={(inverted ? "timeline-inverted" : "") + " mb-5"}
                key={index}
              >
                <ExperienceItem {...item} inverted={inverted} />
              </li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
