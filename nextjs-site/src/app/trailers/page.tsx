import SiteShell from "@/components/SiteShell";

const trailers = [
  {
    embedSrc: "https://www.youtube.com/embed/mFd1G_rIs-o",
    title: "Microbudget trailer",
  },
  {
    embedSrc: "https://www.youtube.com/embed/YJhEX7zCPtw",
    title: "Microbudget trailer",
  },
  {
    embedSrc: "https://www.youtube.com/embed/Sy_XCMk5nhM?start=1",
    title: "Microbudget trailer",
  },
] as const;

export default function TrailersPage() {
  return (
    <SiteShell heroTitle="Trailers" heroSubtitle="Watch trailer examples and featured work.">
      <section className="container">
        <p className="trailers-lede">
          I made each of these for under $200 each.
        </p>

        <h2>Trailers</h2>

        <div className="trailers-grid">
          {trailers.map((item, index) => (
            <div key={item.embedSrc} className="trailer-embed-wrap">
              <iframe
                src={item.embedSrc}
                title={`${item.title} ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
