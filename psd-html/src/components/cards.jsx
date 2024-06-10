function ProjectCard({ title, date, imageName, description }) {
  const imagePath = `./img/${imageName}`;

  return (
    <div
      className="shadow-md rounded-lg overflow-hidden mb-4 relative"
      style={{ maxWidth: "400px" }}
    >
      <div className="relative">
        <img src={imagePath} alt={title} className="w-full h-48 object-cover" />
        <div
          className="absolute bottom-0 p-2 bg-gray-200 rounded-l-md border-l-4 border-gray-500"
          style={{ right: 0 }}
        >
          <p className="text-sm text-white">{date}</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

function OurProjects() {
  const projects = [
    {
      title: "Project 001",
      date: "June 2022",
      imageName: "2.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      title: "Project 002",
      date: "May 2019",
      imageName: "3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      title: "Project 003",
      date: "September 2018",
      imageName: "3.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
    {
      title: "Project 004",
      date: "June 2020",
      imageName: "4.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    },
  ];

  const leftColumnProjects = projects.filter(
    (project, index) => index % 2 === 0
  );
  const rightColumnProjects = projects.filter(
    (project, index) => index % 2 !== 0
  );

  return (
    <section className="my-8 bg-transparent text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Projects</h2>
      <div className="container mx-auto px-8 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
          <div className="md:mt-8">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
