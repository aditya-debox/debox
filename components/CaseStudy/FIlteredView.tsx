
"use client"
import React from "react";
import Image from "next/image";
import ProjectCard from "../cards/ProjectCard";
import IndustrySelector from "./IndustrySelector";
import IndustryCards from "./IndustryCards";
import { useSearchParams, useRouter } from 'next/navigation';

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
  projectData: ProjectData[];
}

const FilteredView: React.FC<FilteredViewProps> = ({
  industries,
  projectData,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedCategory = searchParams.get('Category') ?? undefined;

  const filteredProjects = projectData.filter(project => {
    if (!selectedCategory) return true;
    return project.category === selectedCategory;
  });

  const handleBack = () => {
    router.push('/CaseStudy'); // Clear query and go back to default view
  };

  if (!selectedCategory) {
    // Default view: show selector and all projects
    return (
      <>
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
    );
  }

  // Filtered view: show selected category and filtered projects
  return (
    <div className="bg-white">
      <div className="w-full border-b-1 border-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="bg-black text-white px-6 py-2 rounded-full text-lg font-medium">
                {industries.find(i => i.id === selectedCategory)?.name || selectedCategory}
              </div>
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 border-1 border-black px-4 py-2 hover:bg-black hover:text-white transition text-sm"
              >
                <span>←</span>
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto py-5 px-6 lg:px-16">
        {/* Featured Project */}
        {filteredProjects.length > 0 && (
          <div className="px-6 py-8">
            <div className="relative overflow-hidden h-100 group cursor-pointer">
              <Image
                fill
                src={filteredProjects[0].image}
                alt={filteredProjects[0].title}
                className={`absolute inset-0 z-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0`}
              />
              {/* Gradient Overlay */}
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
      </div>

      {/* Full-width border */}
      <div className="w-full border-t-1 border-black"></div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="px-6 pb-8 py-10">
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
    </div>
  );
};

export default FilteredView;