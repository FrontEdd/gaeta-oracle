const ProjectCard = ({ src, title, description, link }) => {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt={`${title}-logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
