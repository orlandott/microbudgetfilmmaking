import ServicePhoto from "@/components/ServicePhoto";
import SiteShell from "@/components/SiteShell";
import type { ReactNode } from "react";

function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function goodreadsSearch(title: string, author: string) {
  return `https://www.goodreads.com/search?q=${encodeURIComponent(`${title} ${author}`)}`;
}

const BARROW_SCREENWRITING =
  "https://www.barrowgroup.org/acting-school/classes/specialty-classes/intro-screenwriting/";
const BARROW_WRITING_FOR_TV =
  "https://www.barrowgroup.org/acting-school/classes/playwriting-class/writing-for-tv/";

const SPOTIFY = {
  writeYourScreenplay:
    "https://open.spotify.com/search/Write%20Your%20Screenplay%20podcast",
  scriptnotes: "https://open.spotify.com/show/5VuRA5gqJxKJ7FRqG4DwKu",
  scriptApart: "https://open.spotify.com/search/Script%20Apart%20podcast",
} as const;

const YOUTUBE = {
  filmCourage: "https://www.youtube.com/@FilmCourage",
  studioBinder: "https://www.youtube.com/@StudioBinder",
  outstandingScreenplays: "https://www.youtube.com/@OutstandingScreenplays",
  /** “Wisecrack 2” — main Wisecrack channel (no separate @wisecrack2 handle found). */
  wisecrack2: "https://www.youtube.com/c/wisecrack",
  thomasFlight: "https://www.youtube.com/@Thomasflight",
} as const;

export default function AboutPage() {
  return (
    <SiteShell heroTitle="About" heroSubtitle="About me and my film education.">
      <section className="container">
        <h3>About me</h3>
        <div className="about-intro">
          <div className="about-intro-copy">
            <p>
              I&apos;ve spent the last 5 years learning how to write, produce, and direct
              microbudget short films.
            </p>
            <p>
              When I started my film education, I was writing big-budget feature films that I
              thought could get sold in Hollywood.
            </p>
            <p>
              After a few years, I realized I had to stop waiting for funders to give me millions -
              I had to take things into my own hands.
            </p>
            <p>
              This is when I discovered microbudget filmmaking. I learned how to write with a
              producer&apos;s hat on, so I know I&apos;m only writing things that I can afford to
              make myself.
            </p>
            <p>
              I started A Short A Month Productions with a group of filmmakers, and we&apos;ve been
              creating films and learning together.
            </p>
            <p>
              Now I offer my services so you don&apos;t have to spend years, and you don&apos;t have
              to make the mistakes I made along the way.
            </p>
            <p>
              The best way to learn is by doing, and I can show you how to start making films, so
              you can learn by doing, quickly.
            </p>
            <p>
              Here&apos;s my{" "}
              <ExtLink href="https://www.imdb.com/find/?q=Orlando+Torres&ref_=nv_sr_sm">
                IMDb page
              </ExtLink>
              .
            </p>
          </div>
          <div className="about-intro-media">
            <ServicePhoto
              src="/images/about/orlando-portrait.png"
              alt="Orlando Torres — writer, director, and producer of microbudget films"
              variant="portrait"
              priority
            />
          </div>
        </div>

        <h3>My film education (with links to everything)</h3>

        <h4>Writing Classes I&apos;ve taken</h4>
        <ul>
          <li>
            <ExtLink href={BARROW_SCREENWRITING}>Screenwriting I - Introduction</ExtLink>
          </li>
          <li>
            <ExtLink href={BARROW_SCREENWRITING}>Screenwriting II - Writing a Feature</ExtLink>
          </li>
          <li>
            <ExtLink href={BARROW_WRITING_FOR_TV}>Writing for TV I</ExtLink>
          </li>
          <li>
            <ExtLink href={BARROW_WRITING_FOR_TV}>Writing for TV II</ExtLink>
          </li>
        </ul>

        <h4>Film Books I&apos;ve Read</h4>
        <ul>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "Save the Cat: The Last Book on Screenwriting You'll Ever Need",
                "Blake Snyder",
              )}
            >
              Save the Cat: The Last Book on Screenwriting You&apos;ll Ever Need - Blake Snyder
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "The Anatomy of Story: 22 Steps to Become a Master Storyteller",
                "John Truby",
              )}
            >
              The Anatomy of Story: 22 Steps to Become a Master Storyteller - John Truby
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "Story: Substance, Structure, Style and the Principles of Screenwriting",
                "Robert McKee",
              )}
            >
              Story: Substance, Structure, Style and the Principles of Screenwriting - Robert McKee
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch("Screenplay: The Foundations of Screenwriting", "Syd Field")}
            >
              Screenplay: The Foundations of Screenwriting - Syd Field
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "The Art of Dramatic Writing: Its Basis in the Creative Interpretation of Human Motives",
                "Lajos Egri",
              )}
            >
              The Art of Dramatic Writing: Its Basis in the Creative Interpretation of Human Motives
              - Lajos Egri
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "You Are What You Watch: How Movies and TV Affect Everything",
                "Walter Hickey",
              )}
            >
              You Are What You Watch: How Movies and TV Affect Everything - Walter Hickey
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "A Guide to Post-Classical Narration: The Future of Film Storytelling",
                "Eleftheria Thanouli",
              )}
            >
              A Guide to Post-Classical Narration: The Future of Film Storytelling - Eleftheria
              Thanouli
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "Get Started in Film Making: A Teach Yourself Guide",
                "Tom Holden",
              )}
            >
              Get Started in Film Making: A Teach Yourself Guide - Tom Holden
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "Screenwriting for Micro-Budget Films: Tips, Tricks, and Hacks for Reverse Engineering your Screenplay",
                "David Greenberg",
              )}
            >
              Screenwriting for Micro-Budget Films: Tips, Tricks, and Hacks for Reverse Engineering
              your Screenplay - David Greenberg
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "How I Made A Hundred Movies in Hollywood and Never Lost a Dime",
                "Roger Corman",
              )}
            >
              How I Made A Hundred Movies in Hollywood and Never Lost a Dime - Roger Corman
            </ExtLink>
          </li>
          <li>
            <ExtLink href={goodreadsSearch("Writing the Pilot", "William Rabkin")}>
              Writing the Pilot - William Rabkin
            </ExtLink>
          </li>
          <li>
            <ExtLink href={goodreadsSearch("Writing the Pilot: Creating the Series", "William Rabkin")}>
              Writing the Pilot: Creating the Series - William Rabkin
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "Rebel Without a Crew, or How a 23-Year-Old Filmmaker with $7,000 Became a Hollywood Player",
                "Robert Rodriguez",
              )}
            >
              Rebel Without a Crew, or How a 23-Year-Old Filmmaker with $7,000 Became a Hollywood
              Player - Robert Rodriguez
            </ExtLink>
          </li>
          <li>
            <ExtLink
              href={goodreadsSearch(
                "In the Blink of an Eye: A Perspective on Film Editing",
                "Walter Murch",
              )}
            >
              In the Blink of an Eye: A Perspective on Film Editing - Walter Murch
            </ExtLink>
          </li>
        </ul>

        <h4>Podcasts I listen to and recommend</h4>
        <ul>
          <li>
            <ExtLink href={SPOTIFY.writeYourScreenplay}>Write Your Screenplay Podcast</ExtLink>
          </li>
          <li>
            <ExtLink href={SPOTIFY.scriptnotes}>Scriptnotes</ExtLink>
          </li>
          <li>
            <ExtLink href={SPOTIFY.scriptApart}>Script Apart</ExtLink>
          </li>
        </ul>

        <h4>Youtube Channels I watch and recommend</h4>
        <ul>
          <li>
            <ExtLink href={YOUTUBE.filmCourage}>Film Courage</ExtLink>
          </li>
          <li>
            <ExtLink href={YOUTUBE.studioBinder}>Studio Binder</ExtLink>
          </li>
          <li>
            <ExtLink href={YOUTUBE.outstandingScreenplays}>Outstanding Screenplays</ExtLink>
          </li>
          <li>
            <ExtLink href={YOUTUBE.wisecrack2}>Wisecrack 2</ExtLink>
          </li>
          <li>
            <ExtLink href={YOUTUBE.thomasFlight}>Thomas Flight</ExtLink>
          </li>
        </ul>

        <h3>My formal education</h3>
        <ul>
          <li>
            Master of Science in International Affairs,{" "}
            <ExtLink href="https://www.fsu.edu/">Florida State University</ExtLink>
          </li>
          <li>
            Master of Science in Applied Demography -{" "}
            <ExtLink href="https://www.fsu.edu/">Florida State University</ExtLink>
          </li>
          <li>
            Bachelor of Arts in Philosophy -{" "}
            <ExtLink href="https://www.ufl.edu/">University of Florida</ExtLink>
          </li>
          <li>
            Minor in English -{" "}
            <ExtLink href="https://www.ufl.edu/">University of Florida</ExtLink>
          </li>
        </ul>
      </section>
    </SiteShell>
  );
}
