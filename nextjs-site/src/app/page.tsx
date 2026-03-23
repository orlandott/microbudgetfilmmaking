"use client";

import { useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Home", "Services", "Testimonials", "Trailers", "Contact", "About"];

  return (
    <div className={`site-shell ${mobileOpen ? "menu-open" : ""}`}>
      <div className="body-wrap">
        <aside className="navmobile-wrapper">
          <nav id="navmobile">
            <ul>
              {navItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <header id="header">
          <button
            type="button"
            className="nav-trigger"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="mobile" />
            <span className="mobile" />
            <span className="mobile" />
          </button>
          <div id="sitename">Clean Lines</div>
        </header>

        <main id="wrapper">
          <div className="bg-wrapper">
            <nav id="navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="banner-wrap">
              <div id="banner">
                <div id="banner-container">
                  <h1>MICROBUDGET FILMMAKING</h1>
                  <p>
                    Hi 👋🏼 I&apos;m Orlando - a writer, director, and producer of microbudget
                    films. 🎥
                  </p>
                  <a className="cta-button" href="#">
                    What story do you want to tell?
                  </a>
                </div>
              </div>
            </section>

            <div id="content-wrapper">
              <section className="container">
                <p className="image-placeholder">Picture</p>
                <h2>What story do you want to tell?</h2>
                <p>
                  Filmmaking is about sharing stories that need to come out of your subconscious,
                  stories you need to tell.
                </p>
                <p>
                  You may think you need to be wealthy, or find someone wealthy, to become a
                  filmmaker. That&apos;s not true.
                </p>
                <p>
                  I can help you bring your story to life, from a vague idea to a finished
                  microbudget film.
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
                  I am here to help writers who want to improve their scripts, filmmakers who have
                  ideas but don&apos;t want to write themselves, or anyone with a finished script
                  wanting to shoot on a low budget.
                </p>
                <p>Regardless of which step of the process you are on, I can help.</p>
              </section>

              <section className="container alt">
                <h2>Filmmaking is ready to be disrupted.</h2>
                <p>
                  Hollywood and film schools say that you need hundreds of thousands of dollars to
                  make a feature film. And thousands to make a short film.
                </p>
                <p>
                  They want to stay in business, so they promote this myth to keep newcomers out.
                </p>
                <p>
                  The truth is this: In 2025, new cameras, microphones, and lights, have made high
                  quality-productions achievable for most.
                </p>
              </section>

              <section className="container alt">
                <h2>Services</h2>
                <p className="image-placeholder">Picture</p>
                <p>These are the services I offer.</p>
                <p>
                  All of my services include an analysis of the possible budget for the film, and
                  suggestions for filming for less money.
                </p>
                <p>This is why making films for less money is important:</p>
                <p>
                  When you&apos;re making a film, and there&apos;s a scene you can&apos;t afford,
                  there are two ways to solve it:
                </p>
                <ol>
                  <li>You throw money at the problem and buy/rent what you need</li>
                  <li>
                    You use your creativity to make the scene work by altering the story
                  </li>
                </ol>
                <p>
                  The more you use money to solve a problem, the less you have to use your
                  creativity, and like anything, when you don&apos;t use your creativity, it
                  atrophies with time.
                </p>

                <h3>Writing scripts</h3>
                <p>
                  Useful for: people who want to make a film, don&apos;t have a script, and are
                  not interested in writing.
                </p>
                <p>
                  I can help you get your story out on paper, whether it&apos;s a feature film, a
                  TV pilot, or a short film.
                </p>
                <p>
                  Maybe you know exactly how you want your story to end, your philosophical
                  argument, your theme, and your characters.
                </p>
                <p>
                  Maybe you don&apos;t know anything concrete and you just have a cool image in your
                  head. Or a message you need to share.
                </p>
                <p>
                  I can help tease out what&apos;s important to you, and help you tell the story
                  that you want to tell.
                </p>

                <hr className="styled-hr" />
                <p>Here&apos;s how the process works:</p>
                <p>
                  We can start with an idea or an outline. You tell me what your budget is, so I
                  can write with that in mind.
                </p>
                <ol>
                  <li>
                    First, we&apos;ll have a video call. Here we&apos;ll talk about your central
                    theme, your characters, and the tone you&apos;re going for.
                  </li>
                  <li>I will write an outline, and send it to you for feedback.</li>
                  <li>
                    I will edit the outline, based on your feedback, and send it to you. Once
                    we&apos;re happy with the outline, I&apos;ll move to writing.
                  </li>
                  <li>I will send you the first draft for feedback.</li>
                  <li>
                    I will edit the first draft, based on your feedback and send it back to you
                    for more feedback.
                  </li>
                  <li>We keep going until you are happy with the finished product.</li>
                </ol>
                <p>Contact me for personalized pricing for writing.</p>
                <p>
                  My prices are very affordable, because I want credits and experience more than
                  money, and I have other sources of income.
                </p>
                <p>
                  P.S. - If you want to shoot the finished script yourself, you can hire me for
                  Microbudget Production.
                </p>

                <h3>Script consulting</h3>
                <p>
                  Useful for: people who have a script, and want feedback to make it better.
                </p>
                <p>
                  I can help you identify the best parts of your script, and what you can do to
                  improve it.
                </p>
                <p>
                  All the options below include me reading your script, giving you written notes,
                  and then having a videocall to explain my notes and take questions from you.
                </p>
                <p>
                  This also includes identifying how to reduce the costs of your screenplay -
                  cutting characters, locations, and props, to focus on what&apos;s most important
                  to you.
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

              <section className="container alt">
                <h2>Subscribe for updates and a free 10-minute introductory call</h2>
                <p>
                  I&apos;ll let you know when I&apos;m offering special discounts on my services.
                </p>
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

              <section className="container alt">
                <h2>Testimonials</h2>
                <p>
                  &quot;Orlando is an experienced writer and was a great help in writing my short
                  film by improving the story, structure &amp; helping brainstorming better ideas
                  that fit with the overall theme. I would highly recommend him to anyone who
                  needs a writer for their film!&quot;
                </p>
                <p className="testimonial-author">- Andre S.</p>
                <p className="image-placeholder">Picture</p>

                <p>
                  &quot;I highly recommend Orlando to anyone in the film industry seeking a
                  talented, creative, and reliable collaborator, especially when it comes to
                  production.
                </p>
                <p>
                  I first met Orlando through his expertise in screenwriting, and I was immediately
                  impressed by his creativity and storytelling skills. His feedback was always well
                  structured, precise, and constructive. Orlando has a rare ability to quickly
                  grasp an artistic vision while offering concrete solutions to bring it to life,
                  particularly in the production process.
                </p>
                <p>
                  He supported me both in refining my script and producing my short film. On set,
                  Orlando was an exceptional first assistant director-efficient, solution-oriented,
                  and an excellent communicator. He also played a key role in promoting the film,
                  always demonstrating professionalism and dedication.
                </p>
                <p>
                  Orlando is the perfect balance of creativity, sensitivity, and practicality, and
                  working with him has been a privilege. I cannot recommend him enough for any
                  creative or production-related project.&quot;
                </p>
                <p className="testimonial-author">- Gabrielle B.</p>
                <p className="image-placeholder">Picture</p>

                <p>
                  &quot;Orlando is a very passionate and dedicated person about everything he puts his
                  mind to. He helped me with my short film script and added the depth and vision
                  that it lacked. Working together made me a better filmmaker and I&apos;m looking
                  forward to working with him again. I highly recommend working with Orlando if you
                  are looking for passion and vision on your scripts.&quot;
                </p>
                <p className="testimonial-author">- Catarina C.</p>
                <p className="image-placeholder">Picture</p>

                <p>
                  &quot;Orlando gave me valuable insights into the direction of my story as well as
                  suggesting some general ideas of ways to improve it. Having read his work, I
                  trust Orlando&apos;s opinion because I know he has a good understanding of the
                  medium as well as the functional parts of storytelling. As an accomplished writer
                  himself, he has the ability to guide other writers through the necessary steps of
                  editing, revision and polishing a story until it transforms from good to
                  great.&quot;
                </p>
                <p className="testimonial-author">- Josh F.</p>
                <p className="image-placeholder">Picture</p>

                <p>
                  &quot;I had the immense pleasure of working with Orlando. One of his strengths is
                  the fact that he values the people around him. I commend him for his enthusiasm,
                  his professionalism, and his dedication.&quot;
                </p>
                <p className="testimonial-author">- Frankie R.</p>
                <p className="image-placeholder">Picture</p>

                <p>
                  &quot;Orlando served as a proofreader, editor, sensitivity reader, and commentator
                  for a play I was writing. He helped me with character development, consistency of
                  language, and how to use silence. He found minor errors because of his attention
                  to detail. He was also able to visualize the scene and see the need for more
                  movement and opportunities for use of the stage.
                </p>
                <p>
                  His knowledge of storytelling, scriptwriting, staging and production allowed him
                  to see my play as more than just a script. His suggestions simply improved the
                  quality of my writing. It felt like a collaborative experience. It was very easy
                  working with Orlando.&quot;
                </p>
                <p className="testimonial-author">- Leon S.</p>
                <p className="image-placeholder">Picture</p>
              </section>

              <section className="container alt">
                <h2>Trailers</h2>
                <p>Section coming soon.</p>
              </section>

              <section className="container alt">
                <h2>Contact</h2>
                <p>Email me to discuss your project and goals.</p>
              </section>

              <section className="container alt">
                <h2>About</h2>
                <h3>About me</h3>
                <p>
                  I&apos;ve spent the last 5 years learning how to write, produce, and direct
                  microbudget short films.
                </p>
                <p>
                  When I started my film education, I was writing big-budget feature films that I
                  thought could get sold in Hollywood.
                </p>
                <p>
                  After a few years, I realized I had to stop waiting for funders to give me
                  millions - I had to take things into my own hands.
                </p>
                <p>
                  This is when I discovered microbudget filmmaking. I learned how to write with a
                  producer&apos;s hat on, so I know I&apos;m only writing things that I can afford to
                  make myself.
                </p>
                <p>
                  I started A Short A Month Productions with a group of filmmakers, and we&apos;ve
                  been creating films and learning together.
                </p>
                <p>
                  Now I offer my services so you don&apos;t have to spend years, and you don&apos;t
                  have to make the mistakes I made along the way.
                </p>
                <p>
                  The best way to learn is by doing, and I can show you how to start making films,
                  so you can learn by doing, quickly.
                </p>
                <p>
                  Here&apos;s my <a href="#">IMDb page</a>.
                </p>

                <h3>My film education (with links to everything)</h3>

                <h4>Writing Classes I&apos;ve taken</h4>
                <ul>
                  <li>Screenwriting I - Introduction</li>
                  <li>Screenwriting II - Writing a Feature</li>
                  <li>Writing for TV I</li>
                  <li>Writing for TV II</li>
                </ul>

                <h4>Film Books I&apos;ve Read</h4>
                <ul>
                  <li>
                    Save the Cat: The Last Book on Screenwriting You&apos;ll Ever Need - Blake
                    Snyder
                  </li>
                  <li>
                    The Anatomy of Story: 22 Steps to Become a Master Storyteller - John Truby
                  </li>
                  <li>
                    Story: Substance, Structure, Style and the Principles of Screenwriting - Robert
                    McKee
                  </li>
                  <li>Screenplay: The Foundations of Screenwriting - Syd Field</li>
                  <li>
                    The Art of Dramatic Writing: Its Basis in the Creative Interpretation of Human
                    Motives - Lajos Egri
                  </li>
                  <li>You Are What You Watch: How Movies and TV Affect Everything - Walter Hickey</li>
                  <li>
                    A Guide to Post-Classical Narration: The Future of Film Storytelling -
                    Eleftheria Thanouli
                  </li>
                  <li>Get Started in Film Making: A Teach Yourself Guide - Tom Holden</li>
                  <li>
                    Screenwriting for Micro-Budget Films: Tips, Tricks, and Hacks for Reverse
                    Engineering your Screenplay - David Greenberg
                  </li>
                  <li>How I Made A Hundred Movies in Hollywood and Never Lost a Dime - Roger Corman</li>
                  <li>Writing the Pilot - William Rabkin</li>
                  <li>Writing the Pilot: Creating the Series - William Rabkin</li>
                  <li>
                    Rebel Without a Crew, or How a 23-Year-Old Filmmaker with $7,000 Became a
                    Hollywood Player - Robert Rodriguez
                  </li>
                  <li>In the Blink of an Eye: A Perspective on Film Editing - Walter Murch</li>
                </ul>

                <h4>Podcasts I listen to and recommend</h4>
                <ul>
                  <li>Write Your Screenplay Podcast</li>
                  <li>Scriptnotes</li>
                  <li>Script Apart</li>
                </ul>

                <h4>Youtube Channels I watch and recommend</h4>
                <ul>
                  <li>Film Courage</li>
                  <li>Studio Binder</li>
                  <li>Outstanding Screenplays</li>
                  <li>Wisecrack 2</li>
                  <li>Thomas Flight</li>
                </ul>

                <h3>My formal education</h3>
                <ul>
                  <li>Master of Science in International Affairs, Florida State University</li>
                  <li>Master of Science in Applied Demography - Florida State University</li>
                  <li>Bachelor of Arts in Philosophy - University of Florida</li>
                  <li>Minor in English - University of Florida</li>
                </ul>
              </section>

              <section className="container alt">
                <h2>Home</h2>
                <p>
                  This page is now populated with your homepage copy and can be further refined
                  with your real images, testimonials, and trailers.
                </p>
              </section>
            </div>
          </div>

          <footer id="footer">
            <div id="footer-content">
              <p>Copyright 2026 Clean Lines Studio. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
      {mobileOpen ? (
        <button
          type="button"
          className="menu-overlay"
          aria-label="Close menu overlay"
          onClick={() => setMobileOpen(false)}
        />
      ) : null}
    </div>
  );
}
