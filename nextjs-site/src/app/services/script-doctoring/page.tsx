import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function ScriptDoctoringPage() {
  return (
    <SiteShell heroTitle="Script doctoring" heroSubtitle="Deep script fixes and rewrites.">
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Script doctoring</span>
        </p>

        <p className="image-placeholder">Content coming soon</p>
        <p>
          Placeholder page — add your script doctoring scope, process, and rates here when ready.
        </p>

        <p className="back-link">
          <Link href="/services">← Back to Services</Link>
        </p>
      </section>
    </SiteShell>
  );
}
