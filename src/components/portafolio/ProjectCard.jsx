import { Link } from "react-router-dom"

export const ProjectCard = ({ project }) => {

	return (
		<Link
			to={project.href}
		>
			<div className="max-w-sm rounded-lg overflow-auto shadow-lg my-4 hover:bg-gray-300 h-[34rem]">
				<img className="w-full" src={project.image} alt={project.title} />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 ">{project.title}</div>
					<p className="text-gray-800 text-base 1h-[7rem]">{project.description}</p>
					<p className="text-gray-600 text-base italic mt-2 1h-[4rem]">{project.detail}</p>
				</div>
				{/* <div className="px-6 py-4">
					<a
						href={project.href}
						className="inline-block bg-gray-800 text-gray-50 py-2 px-4 rounded hover:bg-red-500 hover:text-gray-50"
					>
						Ver proyecto
					</a>
				</div> */}
			</div>
		</Link>
	)
}