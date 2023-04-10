import { options } from "../../data/options";
import { ProjectCard } from "./ProjectCard";


export const ProjectsList = () => {
    return (
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {options.map((project) => (
            <ProjectCard
              key={ project.name }
              project={ project }
            />
          ))}
        </div>
      </div>
    );
  };