import { projects } from "./../../data/projects";

export default function Projects() {
  return (
    <div id="projects" className="bg-[#382a2a] py-20 px-8 md:px-20 flex flex-col items-center justify-center gap-10 text-white">
      <h1 className="text-3xl md:text-4xl font-bold max-w-[800px] text-center">
        Como a ONG Maximiliano Kolbe transforma vidas através da educação e do amor.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#4c3a3a] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-200">{project.description}</p>
              <div className="text-sm text-gray-300 mt-2">
                <p><strong>Categoria:</strong> {project.category}</p>
                <p><strong>Localização:</strong> {project.location}</p>
                <p><strong>Data:</strong> {project.date}</p>
                {project.beneficiaries && (
                  <p><strong>Beneficiários:</strong> {project.beneficiaries}</p>
                )}
                {project.volunteers && (
                  <p><strong>Voluntários:</strong> {project.volunteers}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
