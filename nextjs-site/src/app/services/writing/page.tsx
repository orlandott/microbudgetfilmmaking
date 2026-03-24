import Link from "next/link";
import ServicePhoto from "@/components/ServicePhoto";
import SiteShell from "@/components/SiteShell";

export default function WritingPage() {
  return (
    <SiteShell heroTitle="Writing" heroSubtitle="Writing scripts for your microbudget film.">
      <section className="container">
        <p className="breadcrumb">
          <Link href="/services">Services</Link>
          <span aria-hidden="true"> / </span>
          <span>Writing</span>
        </p>

        <ServicePhoto
          src="/images/services/writing-outline.png"
          alt="Story structure index cards on a wooden table, ACT 2 in focus"
          priority
        />

        <h3>Writing scripts</h3>
        <p>
          Useful for: people who want to make a film, don&apos;t have a script, and are not
          interested in writing.
        </p>
        <p>
          I can help you get your story out on paper, whether it&apos;s a feature film, a TV pilot,
          or a short film.
        </p>
        <p>
          Maybe you know exactly how you want your story to end, your philosophical argument, your
          theme, and your characters.
        </p>
        <p>
          Maybe you don&apos;t know anything concrete and you just have a cool image in your head.
          Or a message you need to share.
        </p>
        <p>
          I can help tease out what&apos;s important to you, and help you tell the story that you
          want to tell.
        </p>

        <hr className="styled-hr" />
        <p>Here&apos;s how the process works:</p>
        <p>
          We can start with an idea or an outline. You tell me what your budget is, so I can write
          with that in mind.
        </p>
        <ol>
          <li>
            First, we&apos;ll have a video call. Here we&apos;ll talk about your central theme, your
            characters, and the tone you&apos;re going for.
          </li>
          <li>I will write an outline, and send it to you for feedback.</li>
          <li>
            I will edit the outline, based on your feedback, and send it to you. Once we&apos;re
            happy with the outline, I&apos;ll move to writing.
          </li>
          <li>I will send you the first draft for feedback.</li>
          <li>
            I will edit the first draft, based on your feedback and send it back to you for more
            feedback.
          </li>
          <li>We keep going until you are happy with the finished product.</li>
        </ol>
        <p>Contact me for personalized pricing for writing.</p>
        <p>
          My prices are very affordable, because I want credits and experience more than money, and
          I have other sources of income.
        </p>
        <p>
          P.S. - If you want to shoot the finished script yourself, you can hire me for{" "}
          <Link href="/services/microbudget-production">Microbudget Production</Link>.
        </p>

        <p className="back-link">
          <Link href="/services">← Back to Services</Link>
        </p>
      </section>
    </SiteShell>
  );
}
