export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-start">

      <div className="flex items-center flex-col gap-10 justify-center text-white max-w-[650px] px-20">

        <h1 className="text-5xl">Bem vindo ao Centro Social Maximiliano Kolbe</h1>

        <p>
          O Centro Social Maximiliano Kolbe é um espaço acolhedor que promove o desenvolvimento integral de crianças e adolescentes. Aqui, oferecemos atividades educativas e palestras que envolvem também as famílias, fortalecendo laços e promovendo a espiritualidade.
        </p>

        <div className="flex items-center gap-5">
          <button className="font-medium shadow-xl/30 bg-pink-200 text-black px-4 py-1 rounded-sm text-sm cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700">Saiba Mais</button>
          <button className="font-medium shadow-xl/30 bg-white text-black px-4 py-1 rounded-sm text-sm cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-700">Seja voluntário</button>
        </div>
      </div>
    </div>
  )
}