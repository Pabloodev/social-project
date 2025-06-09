export default function Donate() {
  return (
    <section id="donate" className="bg-[url(/bg-2.png)] bg-cover py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-green-400 mb-4">Ajude a transformar vidas</h2>
      <p className="text-white max-w-xl mx-auto mb-6">
        Sua doação ajuda nossa ONG a continuar oferecendo apoio e esperança para quem mais precisa. Qualquer valor faz a diferença!
      </p>

      <div className="flex flex-col items-center gap-4 mb-6">
        <p className="text-lg font-semibold text-white">Doe via PIX:</p>
        <span className="bg-gray-100 px-4 py-2 rounded-md text-sm select-all">pix@ongexemplo.org</span>
      </div>
    </section>
  );
}
