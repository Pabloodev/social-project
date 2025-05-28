import Book from "./Book";

export default function History() {
  const historyContent = (
    <div>
      <p>
        Fundada em 2005, nossa organização começou com uma missão simples: oferecer oportunidades educacionais para crianças em comunidades carentes.
      </p>
      <p>
        O que começou como uma pequena iniciativa com apenas cinco voluntários agora se tornou um movimento global com centenas de membros dedicados em 25 países.
      </p>
      <p>
        Ao longo da nossa trajetória, mantivemos o compromisso com nossos valores fundamentais de inclusão, sustentabilidade e empoderamento. Esses princípios orientam cada projeto que realizamos e cada decisão que tomamos.
      </p>
      <h3>Marcos Importantes</h3>
      <ul>
        <li>
          <p><span className="font-semibold">2005:</span> Fundação com nosso primeiro programa educacional</p>
        </li>
        <li>
          <p><span className="font-semibold">2008:</span> Expansão das operações para três países adicionais</p>
        </li>
        <li>
          <p><span className="font-semibold">2012:</span> Lançamento da nossa iniciativa de alfabetização digital</p>
        </li>
        <li>
          <p><span className="font-semibold">2015:</span> Comemoração do 10º aniversário com 100.000 vidas impactadas</p>
        </li>
        <li>
          <p><span className="font-semibold">2018:</span> Reconhecimento internacional pelo nosso enfoque em desenvolvimento sustentável</p>
        </li>
        <li>
          <p><span className="font-semibold">2020:</span> Adaptação aos desafios globais com programas virtuais inovadores</p>
        </li>
        <li>
          <p><span className="font-semibold">2023:</span> Alcançamos o marco de um milhão de beneficiários atendidos</p>
        </li>
      </ul>
      <p>
        Hoje, continuamos a crescer e evoluir, sempre guiados por nossa missão fundamental de criar mudanças positivas duradouras nas comunidades ao redor do mundo.
      </p>
    </div>
  );

  const missionContent = (
    <div>
      <h3 className="text-xl font-bold mb-2">Nossa Missão</h3>
      <p>
        Promover a inclusão social por meio da educação, capacitação e ações comunitárias, empoderando indivíduos para que construam um futuro melhor.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">Nossa Visão</h3>
      <p>
        Ser uma referência global em transformação social, alcançando comunidades em todo o mundo com impacto duradouro e sustentável.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">Nossos Valores</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><span className="font-semibold">Inclusão:</span> Acreditamos que todos merecem oportunidades iguais.</li>
        <li><span className="font-semibold">Empatia:</span> Atuamos com compreensão, respeito e acolhimento.</li>
        <li><span className="font-semibold">Sustentabilidade:</span> Nossas ações visam impacto a longo prazo.</li>
        <li><span className="font-semibold">Transparência:</span> Mantemos uma comunicação clara e responsável com todos os nossos parceiros e beneficiários.</li>
        <li><span className="font-semibold">Inovação:</span> Buscamos constantemente novas soluções para velhos desafios.</li>
      </ul>
    </div>
  );

  return (
    <div className="bg-orange-50 bg-[url(/bg-2.png)] bg-cover py-20 px-20 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-8">Mais sobre a história</h1>
      <p className="text-lg max-w-xl text-center mb-8 font-medium">
        Clique no livro abaixo para conhecer mais dessa linda trajetória.
      </p>
      <div className="flex items-center gap-60">
        <Book
          title="História"
          content={historyContent}
          coverColor="#402a22"
        />
        <Book
          title="Missão e Valores"
          content={missionContent}
          coverColor="#4f332e"
        />
      </div>
    </div>
  );
}
