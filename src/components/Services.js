import React from "react";
import { services } from "../data";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
