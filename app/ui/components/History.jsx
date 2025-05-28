import Book from "./Book";

export default function History() {
  const historyContent = (
    <div>
      <p>
        Founded in 2005, our organization began with a simple mission: to
        provide educational opportunities to children in underserved
        communities.
      </p>
      <p>
        What started as a small initiative with just five volunteers has now
        grown into a global movement with hundreds of dedicated team members
        across 25 countries.
      </p>
      <p>
        Throughout our journey, we've remained committed to our core values of
        inclusivity, sustainability, and empowerment. These principles guide
        every project we undertake and every decision we make.
      </p>
      <h3>Key Milestones</h3>
      <ul>
        <li>
          <strong>2005:</strong> Founded with our first educational program
        </li>
        <li>
          <strong>2008:</strong> Expanded operations to three additional
          countries
        </li>
        <li>
          <strong>2012:</strong> Launched our digital literacy initiative
        </li>
        <li>
          <strong>2015:</strong> Celebrated our 10th anniversary with 100,000
          lives impacted
        </li>
        <li>
          <strong>2018:</strong> Received international recognition for our
          sustainable development approach
        </li>
        <li>
          <strong>2020:</strong> Adapted to global challenges with innovative
          virtual programs
        </li>
        <li>
          <strong>2023:</strong> Reached the milestone of serving one million
          beneficiaries
        </li>
      </ul>
      <p>
        Today, we continue to grow and evolve, always guided by our foundational
        mission to create lasting positive change in communities around the
        world.
      </p>
    </div>
  );

  return (
    <div className="bg-orange-50 bg-[url(/bg-2.png)]  bg-cover py-20 px-20 flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-8">Mais sobre a história</h1>
      <p className="text-lg max-w-xl text-center mb-8 font-semibold">
        Clique no livro abaixo para conhecer mais dessa linda trajetória.
      </p>
      <div className="flex items-center gap-60">
        <Book
          title="História"
          content={historyContent}
          coverColor="#402a22" // Brown leather color
        />
        <Book
          title="Missão e Valores"
          content={historyContent}
          coverColor="#4f332e" // Brown leather color
        />
      </div>
    </div>
  );
}
