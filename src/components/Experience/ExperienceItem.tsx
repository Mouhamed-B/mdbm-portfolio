"use client";
import { ExperienceItemProps } from "@/utils/schema";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/animations/motion";

type Props = ExperienceItemProps & { inverted?: boolean };

const ExperienceItem = (props: Props) => {
  let index = 1;
  const getIndex = () => {
    index++;
    return index - 1;
  };
  const getPeriod = () => {
    return props.current
      ? props.start + " - Now"
      : props.end.length > 0
      ? props.start + " - " + props.end
      : props.start;
  };
  return (
    <motion.div
      className="d-flex flex-column flex-md-row gap-3 gap-md-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="timeline-image">
        <img
          className="rounded-circle img-fluid"
          src={
            props.image.length > 0
              ? props.image
              : "assets/img/about/" + getIndex() + ".jpg"
          }
          alt={"Mouhamed Bakhoum " + props.title + " " + props.company}
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.title}</h4>
          <h4 className="subheading">{props.company}</h4>
          <h5 className="subheading">{getPeriod()}</h5>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{props.text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
