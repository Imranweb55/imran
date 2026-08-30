import ContactInfoPanel from "./ContactInfoPanel.jsx";
import ContactForm from "./ContactForm.jsx";

export default function ContactSection() {
  return (
    <section className="pb-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-2">
          <ContactInfoPanel />
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
