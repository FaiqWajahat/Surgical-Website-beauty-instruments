'use client'
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 25, suffix: "+", label: "Years of Excellence" },
  { number: 150, suffix: "+", label: "Global Clients" },
  { number: 500, suffix: "+", label: "Premium Products" },
  { number: 98, suffix: "%", label: "Customer Satisfaction" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // trigger only once

  return (
    <section className="w-full bg-white my-16 flex items-center justify-center">
      <div className="bg-blue-700 py-16 w-[95%] rounded-lg">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  {isInView ? (
                    <CountUp end={stat.number} duration={2.5} />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </h2>
                <p className="mt-2 text-lg text-blue-100 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
