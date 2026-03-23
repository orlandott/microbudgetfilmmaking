import SiteShell from "@/components/SiteShell";

export default function Home() {
  return (
    <SiteShell
      heroSubtitle="Hi 👋🏼 I'm Orlando - a writer, director, and producer of microbudget films. 🎥"
      heroButtonText="What story do you want to tell?"
    >
      <section className="container">
        <p className="image-placeholder">Picture</p>
        <h2>What story do you want to tell?</h2>
        <p>
          Filmmaking is about sharing stories that need to come out of your subconscious, stories
          you need to tell.
        </p>
        <p>
          You may think you need to be wealthy, or find someone wealthy, to become a filmmaker.
          That&apos;s not true.
        </p>
        <p>
          I can help you bring your story to life, from a vague idea to a finished microbudget
          film.
        </p>
        <p>I can guide you through every step of the process, remotely:</p>
        <ol>
          <li>Finding what&apos;s the motivation behind your story</li>
          <li>Creating an outline that will make your theme shine</li>
          <li>Writing and re-writing a script that&apos;s unique to you</li>
          <li>Pre-production planning to keep costs to a minimum</li>
          <li>Post-production guidance, like editing and film festivals</li>
        </ol>
        <p>
          I am here to help writers who want to improve their scripts, filmmakers who have ideas
          but don&apos;t want to write themselves, or anyone with a finished script wanting to shoot
          on a low budget.
        </p>
        <p>Regardless of which step of the process you are on, I can help.</p>
      </section>

      <section className="container alt">
        <h2>Filmmaking is ready to be disrupted.</h2>
        <p>
          Hollywood and film schools say that you need hundreds of thousands of dollars to make a
          feature film. And thousands to make a short film.
        </p>
        <p>They want to stay in business, so they promote this myth to keep newcomers out.</p>
        <p>
          The truth is this: In 2025, new cameras, microphones, and lights, have made high
          quality-productions achievable for most.
        </p>
      </section>

      <section className="container alt">
        <h2>Subscribe for updates and a free 10-minute introductory call</h2>
        <p>I&apos;ll let you know when I&apos;m offering special discounts on my services.</p>
        <p>I promise I won&apos;t send more than one email a month, at most.</p>
        <p>* Indicates required field</p>
        <form className="subscribe-form">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" placeholder="you@example.com" />
          <button type="submit" className="cta-button">
            Subscribe
          </button>
        </form>
      </section>
    </SiteShell>
  );
}
