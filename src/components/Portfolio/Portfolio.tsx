"use client";
import { PortfolioProps } from "@/utils/schema";
import React from "react";
import PortfolioItem from "./PortfolioItem";
import ToggleCollapseButton from "../Buttons/ToggleCollapseButton";
import { motion } from "framer-motion";
import { staggerContainer } from "@/components/animations/motion";

const Portfolio = (props: PortfolioProps) => {
  const listTop = props.items;
  return (
    <section className="page-section bg-light py-5" id="portfolio">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="text-center mb-4">
          <h2 className="section-heading text-uppercase">{props.title}</h2>
          <h3 className="section-subheading text-muted">{props.text}</h3>
        </div>
        <div className="row">
          {listTop.map((item, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <PortfolioItem {...item} />
            </div>
          ))}
        </div>
        {/* <div className="collapse mb-4" id="collapseExample">
                    <div className="row">
                        {remaining.map((item, index) => (
                            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                                <PortfolioItem {...item}/>
                            </div>
                        ))}
                    </div>
                </div>
                <ToggleCollapseButton target='collapseExample'/> */}
      </motion.div>
    </section>
  );
};

export default Portfolio;
