import Link from "next/link";
import SiteShell from "@/components/SiteShell";

const serviceLinks = [
  {
    href: "/services/writing",
    title: "Writing",
    blurb: "Get your story on paper — feature, TV pilot, or short — with a clear process tailored to your budget.",
  },
  {
    href: "/services/script-consulting",
    title: "Script consulting",
    blurb: "Written notes, a video call, and ideas to strengthen your script and reduce production cost.",
  },
  {
    href: "/services/microbudget-production",
    title: "Microbudget production",
    blurb:
      "Pre-production planning and budget-smart ways to get your script shot for the least amount of money.",
  },
  {
    href: "/services/script-doctoring",
    title: "Script doctoring",
    blurb: "Placeholder — details coming soon.",
  },
] as const;

export default function ServicesPage() {
  return (
    <SiteShell heroTitle="Services" heroSubtitle="These are the services I offer.">
      <section className="container">
        <p className="image-placeholder">Picture</p>
        <p>
          All of my services include an analysis of the possible budget for the film, and
          suggestions for filming for less money.
        </p>
        <p>This is why making films for less money is important:</p>
        <p>
          When you&apos;re making a film, and there&apos;s a scene you can&apos;t afford, there are
          two ways to solve it:
        </p>
        <ol>
          <li>You throw money at the problem and buy/rent what you need</li>
          <li>You use your creativity to make the scene work by altering the story</li>
        </ol>
        <p>
          The more you use money to solve a problem, the less you have to use your creativity, and
          like anything, when you don&apos;t use your creativity, it atrophies with time.
        </p>

        <h2 className="services-hub-heading">Explore services</h2>
        <div className="service-hub-grid">
          {serviceLinks.map((item) => (
            <Link key={item.href} href={item.href} className="service-hub-card">
              <h3>{item.title}</h3>
              <p>{item.blurb}</p>
              <span className="service-hub-cta">View details →</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
