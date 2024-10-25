import {forwardRef, Ref} from "react";
import { SectionTitle } from "@/components/SectionTitle";

const projects = [
    {
        title: "Real-time chat",
        description: "This is a description for project 1",
        image: "/projects/real-time-chat.png",
    },
    {
        title: "Vertex",
        description: "This is a description for project 2",
        image: "/projects/vertex.png",
    },
    {
        title: "Handwritten text converter",
        description: "This is a description for project 3",
        image: "/projects/handwritten-text-converter.png",
    },
    {
        title: "Eskalate",
        description: "This is a description for project 4",
        image: "/projects/eskalate.png",
    },
    {
        title: "Digital Library",
        description: "This is a description for project 5",
        image: "/projects/digital-library.png",
    },
];

const Projects = forwardRef<HTMLElement, {}>((props, ref: Ref<HTMLElement>) => {
    return (
        <section ref={ref} className="mt-48 flex flex-col justify-center items-center w-[80%] mx-auto">
            <SectionTitle title="projects" description="Some of my Works" />

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="bg-secondary rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={`Image of ${project.title}`}
                            className="object-cover w-full h-[200px] transition-opacity duration-300 hover:opacity-90"
                        />
                        <div className="p-4">
                            <h3 className="text-title_color text-xl font-semibold mb-2 font-Roboto">
                                {project.title}
                            </h3>
                            <p className="text-text_color text-sm font-serif">
                                {project.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
});

export default Projects;
