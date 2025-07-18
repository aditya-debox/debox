
import React, { Suspense } from "react";
import Cai from "@/assets/The Cai Store.jpg";
import FilteredView from "@/components/CaseStudy/FIlteredView";

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

  return (
    <div className="py-25">
      <Suspense fallback={<div>Loading...</div>}>
        <FilteredView industries={industries} projectData={projectData}  />
      </Suspense>
    </div>
  );
};

export default CaseStudy;
