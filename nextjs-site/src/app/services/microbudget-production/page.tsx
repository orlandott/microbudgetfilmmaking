import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function MicrobudgetProductionPage() {
  return (
    <SiteShell
      heroTitle="Microbudget production"
      heroSubtitle="Shooting and producing on a tight budget."
    >
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Microbudget production</span>
        </p>

        <p className="image-placeholder">Content coming soon</p>
        <p>
          Placeholder page — add your microbudget production offering, process, and pricing here when
          ready.
        </p>

        <p className="back-link">
          <Link href="/services">← Back to Services</Link>
        </p>
      </section>
    </SiteShell>
  );
}
