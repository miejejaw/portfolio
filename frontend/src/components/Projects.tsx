import {forwardRef} from "react";

const projects = [
    {
        title: 'Real-time chat application',
        description: 'This is a description for project 1',
        image: '/avatar.svg'
    },
    {
        title: 'Digital Library',
        description: 'This is a description for project 2',
        image: '/avatar.svg'
    },
    {
        title: 'E-commerce website',
        description: 'This is a description for project 3',
        image: '/avatar.svg'
    },
    {
        title: 'Blog website',
        description: 'This is a description for project 4',
        image: '/avatar.svg'
    },
    {
        title: 'Portfolio website',
        description: 'This is a description for project 5',
        image: '/avatar.svg'
    },
    {
        title: 'Social media website',
        description: 'This is a description for project 6',
        image: '/avatar.svg'
    },
];

const Projects = forwardRef((props, ref) => {
    return (
        <section className='mt-48 flex flex-col justify-center items-center w-[80%] mx-auto'>
            <h1 className="text-4xl font-bold">Projects</h1>
            <span className="mt-2 mb-12 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent font-semibold">
                Some of my Works
            </span>

            {/* Projects grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {projects.map((project, index) => (
                    <article key={index} className=''>
                        <img
                            src={project.image}
                            alt={`Image of ${project.title}`}
                            className='object-cover w-full h-[200px]'
                        />
                        <div className="p-2">
                            <h3 className="text-text_color text-lg font-semibold mb-1">{project.title}</h3>
                            <p className="text-sm text-text_color">{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            {/*view all*/}
            {/*<button className="min-w-[200px] mt-16 mb-12 border border-nav_border_color py-2 px-4 rounded-3xl hover:bg-blue-500">*/}
            {/*    View All*/}
            {/*</button>*/}
        </section>
    );
});

Projects.displayName = 'Projects';

export default Projects;
