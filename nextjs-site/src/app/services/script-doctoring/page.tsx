import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function ScriptDoctoringPage() {
  return (
    <SiteShell
      heroTitle="Script doctoring"
      heroSubtitle="Rewrites and polish so your script works harder on the page."
    >
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Script doctoring</span>
        </p>

        <h3>Script doctoring</h3>
        <p>
          Useful for: people who have a script and want to pass it on for improvements.
        </p>
        <p>I&apos;m here to help improve your script. I can help make it more concise, make the dialogue more realistic, shorten your scene descriptions, create a more compelling character arc, or make the formatting look more professional.</p>

        <p>Here&apos;s how it works:</p>
        <p>
          First, we have a video call so you can tell me what you&apos;re looking for.
        </p>
        <p>
          Once you send me the script, I will read it over, and give you my thoughts about what
          kind of rewriting will benefit it the most.
        </p>
        <p>
          Once we&apos;ve decided on a course of action, I will rewrite, and get your feedback,
          until we&apos;re both satisfied with the final product.
        </p>

        <p>Contact me for personalized pricing on rewriting.</p>
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
