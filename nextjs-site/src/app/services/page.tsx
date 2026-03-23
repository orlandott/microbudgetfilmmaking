import SiteShell from "@/components/SiteShell";

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
          P.S. - If you want to shoot the finished script yourself, you can hire me for Microbudget
          Production.
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
      </section>
    </SiteShell>
  );
}
