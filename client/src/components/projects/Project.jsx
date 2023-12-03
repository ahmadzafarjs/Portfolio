import "./projects.css";
import project from "/images/projects/project.jpg";

function Project() {
  return (
    <div className="project">
      <img className="project-img" src={project} alt={project} />
      <h2 className="project-title">
        Project Title{" "}
        <a href="" className="project-link">
          🔗
        </a>
      </h2>
    </div>
  );
}

export default Project;
