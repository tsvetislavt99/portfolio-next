import React from 'react';
import { projectsData } from './projectsData';
import ProjectCard from '../ProjectCard';

export default function Projects() {
  return (
    <div id="projects" className="mx-auto max-w-[1240px]">
      <h1 className="py-5 px-5 mb-5 sm:px-10 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        Personal Projects
      </h1>
      <div className="max-w-[1240px] mx-auto px-8 lg:px-20 flex flex-col md:flex-row justify-between ease-linear duration-300">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
