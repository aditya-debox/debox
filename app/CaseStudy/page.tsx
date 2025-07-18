'use client';
import React from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import IndustrySelector from "@/components/CaseStudy/IndustrySelector";
import IndustryCards from "@/components/CaseStudy/IndustryCards";
import ProjectCard from "@/components/cards/ProjectCard";
import Cai from "@/assets/The Cai Store.jpg";
import FilteredView from "@/components/CaseStudy/FIlteredView";

const CaseStudy = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get('Category') ?? undefined;

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
      description: "How we helped the Indian restaurant grow their online sales by 20%.",
      linkHref: "#",
      category: "food"
    },
    {
      image: Cai.src,
      title: "HUB61 - THE INDIAN BISTRO",
      description: "Hub61 - Engaging take on the Indian restaurant experience.",
      linkHref: "#",
      category: "food"
    },
    {
      image: Cai.src,
      title: "HUB61 - THE INDIAN BISTRO",
      description: "Hub61 - Engaging take on the Indian restaurant experience.",
      linkHref: "#",
      category: "food"
    },
    {
      image: Cai.src,
      title: "PARAZELSUS",
      description: "Cold storage logistics and supply chain tracking.",
      linkHref: "#",
      category: "food"
    },
    {
      image: Cai.src,
      title: "KARMA REALTY",
      description: "Real estate listings platform.",
      linkHref: "#",
      category: "gaming"
    }
  ];

  const filteredProjects = projectData.filter(project => {
    if (!selectedCategory) return true;
    return project.category === selectedCategory;
  });

  const handleBack = () => {
    router.push('/CaseStudy'); // Clear query and go back to default view
  };

  return (
    <div className="py-25">
      {selectedCategory ? (
        <FilteredView
          industries={industries}
          currentCategory={selectedCategory}
          filteredProjects={filteredProjects}
          onBack={handleBack}
        />
      ) : (
        <>
          {/* ✅ Default layout with full selector */}
          <IndustrySelector
            titleLine1="Choose Your"
            titleLine2="Industry"
            industries={industries}
            selectedIndustry={selectedCategory}
          />

          <IndustryCards>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                linkHref={project.linkHref}
              />
            ))}
          </IndustryCards>
        </>
      )}
    </div>
  );
};

export default CaseStudy;
