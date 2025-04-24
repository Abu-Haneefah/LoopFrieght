"use client";

import React from "react";
import WhyChooseBlock from "../WhyChooseBlock/WhyChooseBlock";
import { useMediaQuery } from 'react-responsive';

export default function WhyChooseSection () {
  const whyChooseData = [
    {
      imageSrc: "/GirlWithPhone.jpeg",
      altText: "Woman using a phone",
      title: "AI-Powered Matching & Real-Time Tracking",
      description:
        "Our intelligent logistics engine assigns the best vehicle for your shipment based on dimensions, urgency, and optimized routes. Track every move in real time through our web and mobile apps.",
      linkHref: "/tracking",
    },
    {
      imageSrc: "/movingTruck.jpeg",
      altText: "Moving Trucks",
      title: "Seamless Access to Fleets of All Sizes",
      description:
        "We integrate with Bolt’s fleet of vehicles, bikes, and bicycles, along with partner-owned fleets to provide on-demand logistics flexibility.",
      linkHref: "/carriers",
    },
    {
      imageSrc: "/Globe.jpeg",
      altText: "Global Reach Illustration",
      title: "Local, National & Global Reach",
      description:
        "Loop Freights supports intra-city, interstate, and international logistics—handling cross-border compliance, customs, and last-mile delivery seamlessly.",
      linkHref: "/global-network",
    },
    {
      imageSrc: "/WarehouseWorker.jpeg",
      altText: "Smarter Logistics for Businesses",
      title: "Smarter Logistics for Businesses",
      description:
        "For retail, manufacturing, e-commerce and supply chain managers, our data driven logistics platform helps to optimize routes, reduce costs and improve delivery efficiency.",
      linkHref: "/pricing",
    },
  ];

  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust breakpoint as needed

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-6xl md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10 md:mt-10">
          <span className="bg-[#ECFFFF]">Why</span> Choose Loop Freight?
        </h2>
        {whyChooseData.map((item, index) => (
          <WhyChooseBlock key={index} {...item} index={index} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
};

