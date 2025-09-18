import React, { useState } from "react";

const EasternEditionLanding: React.FC = () => {
  const [newsletter, setNewsletter] = useState("");
  const [showSubscribe, setShowSubscribe] = useState(false);

  return (
    <main className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="h-[68vh] md:h-[80vh] lg:h-[88vh] flex items-center">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-serif leading-tight">
                The significance of heritage
                <br />
                and contemporary craft.
              </h1>
              <p className="mt-6 max-w-prose text-gray-600">
                A studio approach to furniture and materials — where Korean
                tradition meets modern living.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="#shop"
                  className="px-5 py-3 border text-sm rounded hover:bg-gray-50 transition"
                >
                  Discover the collection
                </a>
                <a
                  href="#projects"
                  className="px-5 py-3 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition"
                >
                  Projects
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1549187774-b4e9b0445b69?w=1200&q=80"
                  alt="Sofa"
                  className="object-cover w-full h-64 rounded shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1543292630-3c2a4b4b6b07?w=1200&q=80"
                  alt="Table"
                  className="object-cover w-full h-64 rounded shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80"
                  alt="Chair"
                  className="object-cover w-full h-64 rounded shadow-md"
                />
                <img
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80"
                  alt="Bed"
                  className="object-cover w-full h-64 rounded shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* subtle overlay line */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block h-full w-full">
            <div className="absolute left-0 top-1/4 h-0.5 w-1/3 bg-gradient-to-r from-transparent to-gray-200/30" />
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-xl font-semibold">Shop our collections</h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          The importance of heritage, locality, and sustainability is the
          grounding vision for Eastern Edition.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Sofa",
              img: "https://images.unsplash.com/photo-1549187774-b4e9b0445b69?w=800&q=60",
            },
            {
              title: "Chair",
              img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=60",
            },
            {
              title: "Table",
              img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&q=60",
            },
            {
              title: "Bed",
              img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=60",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="group bg-white border rounded overflow-hidden shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium">{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-lg font-semibold">Projects</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Blue Bottle Seoul Studio",
              "UN Village Lanuvo Hannam",
              "Luxembourg Embassy Residence",
            ].map((t) => (
              <div
                key={t}
                className="bg-white border rounded overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=1200&q=60"
                  alt={t}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium">{t}</h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Design and installation focused on material authenticity.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info sections */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Philosophy",
            desc: "Bridging the past to the future: natural materials and slow craft.",
            link: "#philosophy",
          },
          {
            title: "Archive",
            desc: "Press, exhibitions and collaborations across the years.",
            link: "#archive",
          },
          {
            title: "Bespoke",
            desc: "Custom furniture and consulting for private and commercial spaces.",
            link: "#bespoke",
          },
        ].map((block) => (
          <div key={block.title} className="p-6 border rounded">
            <h5 className="font-semibold">{block.title}</h5>
            <p className="text-sm text-gray-600 mt-3">{block.desc}</p>
            <a
              href={block.link}
              className="mt-4 inline-block text-sm hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-gray-100 border rounded p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-semibold">Newsletter</h4>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for stories and product updates.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowSubscribe(true);
            }}
            className="flex gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              value={newsletter}
              onChange={(e) => setNewsletter(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 border rounded w-full md:w-80"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 border rounded bg-gray-900 text-white hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Small subscribe modal */}
      {showSubscribe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-md p-6 rounded shadow">
            <h4 className="font-semibold">Thanks for subscribing</h4>
            <p className="text-sm text-gray-600 mt-2">
              We'll send updates to {newsletter || "the email you provided"}.
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowSubscribe(false)}
                className="px-4 py-2 border rounded hover:bg-gray-50 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default EasternEditionLanding;
