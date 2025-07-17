// components/CaseStudy/FilteredView.tsx
import React from "react";
import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";

export interface Industry {
  id: string;
  name: string;
}

export interface ProjectData {
  image: string;
  title: string;
  description: string;
  linkHref: string;
  category: string;
}

interface FilteredViewProps {
  industries: Industry[];
  currentCategory: string;
  filteredProjects: ProjectData[];
  onBack: () => void;
}

const FilteredView: React.FC<FilteredViewProps> = ({
  industries,
  currentCategory,
  filteredProjects,
  onBack,
}) => (
  <div className="max-w-7xl mx-auto py-20 px-6 lg:px-16 bg-white">

    {/* Category Header */}
    
    <div className="px-6 py-4 border-b-1 border-black">
      <div className="flex justify-between items-center">
        <div className="bg-black text-white px-6 py-2 rounded-full text-lg font-medium">
          {industries.find(i => i.id === currentCategory)?.name || currentCategory}
        </div>
        <button
          onClick={onBack}
          className="flex items-center space-x-2 border-1 border-black px-4 py-2 rounded hover:bg-gray-50 transition text-sm"
        >
          <span>←</span>
          <span>Back</span>
        </button>
      </div>
    </div>

    {/* Featured Project */}
    {filteredProjects.length > 0 && (
      <div className="px-6 py-8">
        
        <div className="relative overflow-hidden h-100 ">
          <Image
            fill 
            src={filteredProjects[0].image} 
            alt={filteredProjects[0].title}
            className="w-full h-full object-cover  transition-all duration-300"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white z-20">
            <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide">
              {filteredProjects[0].title}
            </h2>
            <p className="text-sm mb-4 max-w-md">
              {filteredProjects[0].description}
            </p>
            <button className="flex items-center space-x-2 text-sm font-medium">
              <span>Learn more</span>
            
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Project Grid */}
    <div className="px-6 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.slice(1).map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            linkHref={project.linkHref}
          />
        ))}
      </div>
    </div>
  </div>
);

export default FilteredView;