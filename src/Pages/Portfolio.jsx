import ProjectCard from "../Component/ProjectCard";
import Skills from "../Component/Skills";
import img1 from "/Images/Banking Application.png";
import img2 from "/Images/covidData.png";
import img3 from "/Images/Tea Buisness.png";
import img4 from "/Images/strengths.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: img1,
      name: "BANKING APPLICATION",
      description: "JDBC Servlets",
    },
    {
      image: img2,
      name: "COVID DATA TRACKER API",
      description: "RestApi",
    },
    {
      image: img3,
      name: "TEA BUSINESS PROJECT",
      description: "Spring Boot",
    },
  ];

  return (
    <div className="relative w-full mx-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img4})`, zIndex: -1 }}
      />
      <div className="relative bg-black bg-opacity-75 py-10 sm:py-16 lg:py-20">
        <h1 className="project-title text-3xl sm:text-4xl font-bold text-center text-white mb-4">
          MY PROJECTS
        </h1>
        <p className="project-subtitle text-lg sm:text-xl text-center mb-8 text-white">
          My portfolio keeps expanding over time to better address even more
          challenges.
          <span className="block w-[8%] h-1 mx-auto bg-green-500 mt-2"></span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              name={project.name}
              description={project.description}
            />
          ))}
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default Portfolio;
