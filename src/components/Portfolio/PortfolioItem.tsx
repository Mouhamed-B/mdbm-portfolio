"use client";
import { PortfolioItemProps } from "@/utils/schema";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, scaleOnHover } from "@/components/animations/motion";
let index = 0;
const PortfolioItem = (props: PortfolioItemProps) => {
  const getIndex = () => {
    index = index < 6 ? index + 1 : 1;
    return index;
  };
  return (
    <motion.div
      className="portfolio-item w-100 h-100"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div
        className="portfolio-caption p-4 rounded-5 shadow-sm w-100 h-100 d-flex flex-column justify-content-between gap-3"
        variants={scaleOnHover}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="portfolio-caption-heading text-secondary small">
          {props.title}
        </div>
        <div>
          <div className="text-muted text-start mb-4" style={{ height: "5em" }}>
            {props.description}
          </div>

          <img
            className="img-fluid object-fit-contain"
            src={
              props.image.length > 0
                ? props.image
                : "assets/img/portfolio/" + getIndex() + ".webp"
            }
            alt={"Mouhamed Bakhoum " + props.title}
            height={200}
          />
        </div>
        <div className="row gap-2 mt-1">
          {props.link.length > 0 && (
            <a href={props.link} className="text-primary text-lg-start w-auto">
              <div className="d-flex gap-2">
                <i className="fa-solid fa-link fa-lg"></i>
                <span>Live</span>
              </div>
            </a>
          )}
          {props.repo.length > 0 && (
            <a href={props.repo} className="text-primary text-lg-start w-auto">
              <div className="d-flex gap-2">
                <i className="fa-brands fa-github fa-lg"></i>
                <span>Github</span>
              </div>
            </a>
          )}
        </div>
        <div className="row g-0 gap-2 mt-auto">
          {props.tags.map((tag, index) => (
            <div className="badge text-bg-primary w-auto  mb-1" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioItem;
