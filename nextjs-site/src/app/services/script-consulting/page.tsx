import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function ScriptConsultingPage() {
  return (
    <SiteShell heroTitle="Script consulting" heroSubtitle="Feedback to make your script stronger.">
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Script consulting</span>
        </p>

        <h3>Script consulting</h3>
        <p>Useful for: people who have a script, and want feedback to make it better.</p>
        <p>
          I can help you identify the best parts of your script, and what you can do to improve it.
        </p>
        <p>
          All the options below include me reading your script, giving you written notes, and then
          having a videocall to explain my notes and take questions from you.
        </p>
        <p>
          This also includes identifying how to reduce the costs of your screenplay - cutting
          characters, locations, and props, to focus on what&apos;s most important to you.
        </p>

        <div className="service-list">
          <article className="service-item">
            <h4>Full Script Consultation (Feature film - up to 130 pages)</h4>
            <p className="service-price">$100.00</p>
            <a href="#" className="service-link">
              LEARN MORE
            </a>
          </article>

          <article className="service-item">
            <h4>Outline Analysis (up to 5 pages)</h4>
            <p className="service-price">$40.00</p>
            <a href="#" className="service-link">
              LEARN MORE
            </a>
          </article>

          <article className="service-item">
            <h4>Full Script Consultation (Short film - up to 20 pages)</h4>
            <p className="service-price">$40.00</p>
            <a href="#" className="service-link">
              LEARN MORE
            </a>
          </article>

          <article className="service-item">
            <h4>Full Script Consultation (TV pilot - up to 60 pages)</h4>
            <p className="service-price">$60.00</p>
            <a href="#" className="service-link">
              LEARN MORE
            </a>
          </article>

          <article className="service-item">
            <h4>Full Script Consultation (TV pilot - up to 30 pages)</h4>
            <p className="service-price">$50.00</p>
            <a href="#" className="service-link">
              LEARN MORE
            </a>
          </article>
        </div>

        <p className="back-link">
          <Link href="/services">← Back to Services</Link>
        </p>
      </section>
    </SiteShell>
  );
}
