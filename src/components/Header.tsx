"use client";
import { HeaderProps } from "@/utils/schema";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Header = (props: HeaderProps) => {
  return (
    <header className="masthead position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="masthead-heading text-start text-primary">
          Mouhamed Bakhoum
        </div>
        <div className="masthead-subheading text-start fw-bold">
          {props.title}
        </div>
        <p
          className="masthead-subheading text-start small w-75"
          style={{ lineHeight: "1.25em" }}
        >
          {props.text}
        </p>
        <div className="mt-5 row g-0 gap-4 flex-row">
          <Link
            href="#contact"
            className="btn btn-primary rounded-5 text-white w-auto px-4 py-3 shadow-sm"
          >
            <b>Contact</b>
          </Link>
          <a
            href={props.resume}
            target="_blank"
            className="btn btn-outline-primary rounded-5 w-auto px-4 py-3"
          >
            <b>Curriculum Vitae</b>
          </a>
        </div>
      </div>
      <div
        className="gradient-bg position-absolute top-0 start-0 w-100 h-100"
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
