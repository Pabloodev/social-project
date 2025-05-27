import { HeartHandshake, HandHelping, Users, ChevronsRight } from 'lucide-react';

const cardLinks = [
  {
    icon: HeartHandshake,
    title: "Junte-se a nós e faça a diferença na vida de uma criança.",
    intro: "Se cadastre como voluntário ou deixe seu curriculo para fazer parte dessa causa",
    linkName: "Contribua",
    link: "#work-with-us"
  },
  {
    icon: Users,
    title: "Descubra sobre os nossos projetos sociais.",
    intro: "Participe dos nossos projetos e ajude a criar um futuro melhor.",
    linkName: "Descubra",
    link: "#projects"
  },
  {
    icon: HandHelping,
    title: "Entenda a importância da nossa missão e como você pode ajudar.",
    intro: "Acreditamos que cada criança merece uma chance e você pode fazer parte disso.",
    linkName: "Apoie",
    link: "#donate"
  }
]

export default function About() {
  return (
    <div className="bg-[#453229] py-20 px-20 flex flex-col items-center justify-center gap-5 text-white">

      <h1 className="text-3xl max-w-[600px] text-center">Como a ONG Maximiliano Kolbe transforma vidas através da educação e do amor.</h1>

      <ul className='flex items-center gap-5 justify-center'>
        {cardLinks.map((card, index) => {
          const Icon = card.icon;
          return (
            <li key={index} className="p-5 rounded-xl max-w-sm flex flex-col items-center gap-4">
              <Icon className="w-8 h-8 mb-3 text-white" />
              <h2 className='text-xl font-semibold'>{card.title}</h2>
              <p className='text-lg'>{card.intro}</p>
              <a className='flex items-center gap-2 cursor-pointer hover:text-yellow-700 transition duration-700' href={card.link}>
                <span>{card.linkName}</span>
                <ChevronsRight />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  )
}