import React from "react";
import IndustrySelector from "@/components/CaseStudy/IndustrySelector";
import IndustryCards from "@/components/CaseStudy/IndustryCards";
import ProjectCard from "@/components/cards/ProjectCard";
import Cai from "@/assets/The Cai Store.jpg"



const CaseStudy = () => {

  const industries = [
    { id: "fashion", name: "Fashion" },
    { id: "food", name: "Food" },
    { id: "gaming", name: "Gaming" },
    { id: "music", name: "Music" },
    { id: "media-agency", name: "Media Agency" },
    { id: "title-search", name: "Title Search" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "staffing", name: "Staffing" },
    { id: "logistics", name: "Logistics" },
    { id: "edtech", name: "Edtech" }
  ];

  const projectData = [
    {
      image: Cai.src,
      title: "BAWARCHI BIRYANIS ATLANTA",
      description: "Bawarchi Atlanta - How we helped the Indian restaurant grow their online sales by 20%.",
      linkHref: "#"
    },
    {
      image: Cai.src,
      title: "HUB61 - THE INDIAN BISTRO",
      description: "Hub61 - How we helped create a fresh and engaging take on the Indian restaurant experience.",
      linkHref: "#"
    },
    {
      image: Cai.src,
      title: "PARAZELSUS",
      description: "How we helped the cold storage logistics and supply chain company build a platform to track their entire operations digitally.",
      linkHref: "#"
    },
    {
      image: Cai.src,
      title: "KARMA REALTY",
      description: "How we helped the Real Estate company build a Multi-powered website that showcases thousands of listings around North Carolina.",
      linkHref: "#"
    }
  ];

  return (
    <div>


      <IndustrySelector
        titleLine1="Choose Your"
        titleLine2="Industry"
        industries={industries}
      />


      <IndustryCards>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            linkHref={project.linkHref}
          />
        ))}
      </IndustryCards>
    </div>


  );
};

export default CaseStudy;