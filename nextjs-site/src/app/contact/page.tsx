import ContactForm from "@/components/ContactForm";
import SiteShell from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell
      heroTitle="Contact"
      heroSubtitle="Let me know how I can help you make your film."
    >
      <section className="container">
        <p>
          Also, reach out if you&apos;d like to collaborate on projects — especially if they&apos;re
          new stories about the future of humanity.
        </p>
        <p>
          Please fill out the form below, or email me at{" "}
          <a className="contact-email-link" href="mailto:orlando@microbudgetfilmmaking.com">
            orlando@microbudgetfilmmaking.com
          </a>
          .
        </p>

        <h3>Send a message</h3>
        <ContactForm />
      </section>
    </SiteShell>
  );
}
