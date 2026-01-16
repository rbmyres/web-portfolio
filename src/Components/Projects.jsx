import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    name: "Mixer",
    image: "mixer.png",
    description: "Full-Stack social media application",
    tech: ["Vite + React", "Node.js", "Express", "Sass", "MySQL", "JWT", "Cloudflare R2", "Docker"],
    links: {
      website: "https://mixer.rbmyres.com/",
      github: "https://github.com/rbmyres/CocktailRecipes",
    },
  },
  {
    name: "Event Planner",
    image: "events.png",
    description: "Full-Stack event management application",
    tech: ["HTML5", "CSS3", "JavaScript", "MySQL", "PHP", "Agile"],
    links: {
      website: "https://events.rbmyres.com/",
      github: "https://github.com/rbmyres/EventPlanner",
    },
  },
];

function Projects() {
  return (
    <div className="projectsDiv">
      <div className="title">Projects</div>

      <div className="projects">
        {projectsData.map((project) => (
          <div className="project" key={project.name}>
            <img src={`../images/${project.image}`} alt={`Image of ${project.name.toLowerCase()} web application`} />
            <span className="name">{project.name}</span>
            <p className="info">{project.description}</p>
            <div className="techDiv">
              {project.tech.map((tech) => (
                <div key={tech}>{tech}</div>
              ))}
            </div>

            <div className="links">
              <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                <span><FaExternalLinkAlt /></span>
                Website
              </a>
              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                <span><FaGithub /></span>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects