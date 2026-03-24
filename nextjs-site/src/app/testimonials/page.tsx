import Image from "next/image";
import SiteShell from "@/components/SiteShell";

export default function TestimonialsPage() {
  return (
    <SiteShell heroTitle="Testimonials" heroSubtitle="What collaborators say about working with Orlando.">
      <section className="container">
        <p>
          &quot;Orlando is an experienced writer and was a great help in writing my short film by
          improving the story, structure &amp; helping brainstorming better ideas that fit with the
          overall theme. I would highly recommend him to anyone who needs a writer for their
          film!&quot;
        </p>
        <p className="testimonial-author">- Andre S.</p>
        <p className="image-placeholder">Picture</p>

        <p>
          &quot;I highly recommend Orlando to anyone in the film industry seeking a talented,
          creative, and reliable collaborator, especially when it comes to production.
        </p>
        <p>
          I first met Orlando through his expertise in screenwriting, and I was immediately
          impressed by his creativity and storytelling skills. His feedback was always well
          structured, precise, and constructive. Orlando has a rare ability to quickly grasp an
          artistic vision while offering concrete solutions to bring it to life, particularly in the
          production process.
        </p>
        <p>
          He supported me both in refining my script and producing my short film. On set, Orlando
          was an exceptional first assistant director-efficient, solution-oriented, and an excellent
          communicator. He also played a key role in promoting the film, always demonstrating
          professionalism and dedication.
        </p>
        <p>
          Orlando is the perfect balance of creativity, sensitivity, and practicality, and working
          with him has been a privilege. I cannot recommend him enough for any creative or
          production-related project.&quot;
        </p>
        <p className="testimonial-author">- Gabrielle B.</p>
        <p className="image-placeholder">Picture</p>

        <p>
          &quot;Orlando is a very passionate and dedicated person about everything he puts his mind to.
          He helped me with my short film script and added the depth and vision that it lacked.
          Working together made me a better filmmaker and I&apos;m looking forward to working with him
          again. I highly recommend working with Orlando if you are looking for passion and vision
          on your scripts.&quot;
        </p>
        <p className="testimonial-author">- Catarina C.</p>
        <figure className="testimonial-avatar-wrap">
          <Image
            src="/images/testimonials/catarina-c.png"
            alt="Catarina C."
            width={256}
            height={256}
            className="testimonial-avatar"
          />
        </figure>

        <p>
          &quot;Orlando gave me valuable insights into the direction of my story as well as suggesting
          some general ideas of ways to improve it. Having read his work, I trust Orlando&apos;s
          opinion because I know he has a good understanding of the medium as well as the functional
          parts of storytelling. As an accomplished writer himself, he has the ability to guide
          other writers through the necessary steps of editing, revision and polishing a story until
          it transforms from good to great.&quot;
        </p>
        <p className="testimonial-author">- Josh F.</p>
        <figure className="testimonial-avatar-wrap">
          <Image
            src="/images/testimonials/josh-f.png"
            alt="Josh F."
            width={256}
            height={256}
            className="testimonial-avatar"
          />
        </figure>

        <p>
          &quot;I had the immense pleasure of working with Orlando. One of his strengths is the fact
          that he values the people around him. I commend him for his enthusiasm, his
          professionalism, and his dedication.&quot;
        </p>
        <p className="testimonial-author">- Frankie R.</p>
        <figure className="testimonial-avatar-wrap">
          <Image
            src="/images/testimonials/frankie-r.png"
            alt="Frankie R."
            width={256}
            height={256}
            className="testimonial-avatar"
          />
        </figure>

        <p>
          &quot;Orlando served as a proofreader, editor, sensitivity reader, and commentator for a play
          I was writing. He helped me with character development, consistency of language, and how
          to use silence. He found minor errors because of his attention to detail. He was also able
          to visualize the scene and see the need for more movement and opportunities for use of the
          stage.
        </p>
        <p>
          His knowledge of storytelling, scriptwriting, staging and production allowed him to see my
          play as more than just a script. His suggestions simply improved the quality of my
          writing. It felt like a collaborative experience. It was very easy working with
          Orlando.&quot;
        </p>
        <p className="testimonial-author">- Leon S.</p>
        <figure className="testimonial-avatar-wrap">
          <Image
            src="/images/testimonials/leon-s.png"
            alt="Leon S."
            width={256}
            height={256}
            className="testimonial-avatar"
          />
        </figure>
      </section>
    </SiteShell>
  );
}
