import Link from "next/link";
import ServicePhoto from "@/components/ServicePhoto";
import SiteShell from "@/components/SiteShell";

export default function MicrobudgetProductionPage() {
  return (
    <SiteShell
      heroTitle="Microbudget production"
      heroSubtitle="Plan and shoot your script for the least amount of money."
    >
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Microbudget production</span>
        </p>

        <ServicePhoto
          src="/images/services/microbudget-production.png"
          alt="Microbudget film crew on location filming a scene"
          priority
        />

        <h3>Microbudget production</h3>
        <p>
          Useful for: people who have a script, and need help planning how to shoot it on a
          microbudget.
        </p>
        <p>I&apos;m here to help find ways to shoot your script frugally.</p>
        <p>
          First, I will read through the script to find places where we could reduce the budget.
        </p>
        <p>
          Then, I will help you with all pre-production planning. This includes, how to find
          locations, how to make a shooting schedule, how to find a team, and anything else you will
          need to get your script made into a film for the least amount of money.
        </p>
        <p>Contact me for personalized pricing on microbudget production assistance.</p>
        <p>
          My prices are very affordable, because I want credits and experience more than money, and
          I have other sources of income.
        </p>

        <p className="back-link">
          <Link href="/services">← Back to Services</Link>
        </p>
      </section>
    </SiteShell>
  );
}
