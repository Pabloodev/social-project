export const navLinks = [
  {
    name: "Inicio",
    link: "#inicio"
  },
  {
    name: "História",
    link: "#history"
  },
  {
    name: "Fale Conosco",
    link: "#contact-us"
  },
  {
    name: "Doação",
    link: "#donate"
  },
]

export default function Header() {
  return (
    <div className="flex justify-between items-center p-10 text-white abslute w-full">

      {/* logo */}
      <div>
        <span className="text-xl">Logo</span>
      </div>

      {/* Links navegação */}
      <nav>
        <ul className="flex items-center gap-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="cursor-pointer hover:text-yellow-700 transition duration-700" href={link.link}>
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botão de doação */}
      <button className="shadow-xl/30 bg-white text-black px-4 py-1 rounded-sm text-sm cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700">
        Doar
      </button>

    </div>
  )
}