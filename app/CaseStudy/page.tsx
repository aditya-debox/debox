import React from "react";
import IndustrySelector from "@/components/CaseStudy/IndustrySelector";
import CommonHero from "@/components/common/CommonHero";



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
    
    return (
      <div>


       <IndustrySelector 
        titleLine1="Choose Your"
        titleLine2="Industry"
        industries={industries}
        />
      </div>

      
    );
  };
  
  export default CaseStudy;