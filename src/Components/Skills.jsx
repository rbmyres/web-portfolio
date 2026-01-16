const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "react.svg" },
      { name: "Vite", icon: "vite.svg" },
      { name: "HTML5", icon: "html5.svg" },
      { name: "CSS3", icon: "css3.svg" },
      { name: "Javascript", icon: "javascript.svg" },
      { name: "Sass", icon: "sass.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "node.svg" },
      { name: "Express", icon: "express.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "MySQL", icon: "mysql.svg" },
      { name: "JWT", icon: "jwt.svg" },
    ],
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Java", icon: "java.svg" },
      { name: "Python", icon: "python.svg" },
      { name: "Docker", icon: "docker.svg" },
      { name: "Git", icon: "git.svg" },
      { name: "Cloud Deployment", icon: "cloudflare.svg" },
      { name: "Agile Development", icon: "agile.svg" },
    ],
  },
];

function Skills() {
  return (
    <div className="skillsDiv">
      <div className="skills">Skills</div>

      {skillsData.map((section) => (
        <div className="skillSection" key={section.category}>
          <div className="title">{section.category}</div>
          <div className="groupDiv">
            {section.skills.map((skill) => (
              <div className="skill" key={skill.name}>
                <img src={`../icons/${skill.icon}`} alt={`${skill.name} Icon`} />
                <span className="text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills