import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center 
                bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
  
            <div className="relative bg-gradient-to-br from-[#1b1b2f] via-[#1f1f3a] to-[#141426]
                            rounded-2xl shadow-2xl
                            w-full max-w-3xl overflow-hidden
                            border border-white/10">

              {/* Shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                              opacity-0 hover:opacity-100 transition duration-700 pointer-events-none" />

              {/* Close button */}
              <button
                onClick={handleCloseModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-white/70 text-3xl 
                          hover:text-purple-400 transition"
              >
                &times;
              </button>

              {/* Content */}
              <div className="flex flex-col">
                
                {/* Image */}
                <div className="p-6 flex justify-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[300px] object-contain rounded-xl 
                              shadow-xl border border-white/10"
                  />
                </div>

                {/* Details */}
                <div className="px-8 pb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>

                  <p className="text-purple-400 text-sm mb-4">
                    {selectedProject.role}
                  </p>

                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full
                                  bg-purple-500/10 text-purple-400
                                  border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl text-center
                                bg-white/10 text-gray-300
                                hover:bg-purple-500/20 hover:text-purple-300
                                transition font-semibold"
                    >
                      View Code
                    </a>

                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl text-center
                                bg-purple-600 text-white
                                hover:bg-purple-700
                                transition font-semibold"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </section>
  );
};

export default Work;
