import { projects } from "./../../data/projects"

export default function Projects() {
  return (
    <div className="bg-[#382a2a] py-20 px-20 flex flex-col items-center justify-center gap-5 text-white">

      <h1 className="text-3xl max-w-[600px] text-center">Como a ONG Maximiliano Kolbe transforma vidas através da educação e do amor.</h1>


      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <h2>{project.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}