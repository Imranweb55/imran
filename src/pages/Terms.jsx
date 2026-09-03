import { Link } from "react-router-dom";

export default function Terms() {
  const lastUpdated = "September 2026";

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Legal
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
        <p>
          Welcome to my portfolio website. By accessing or using this website,
          you agree to be bound by the terms and conditions outlined below.
          Please read them carefully before using the site.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p className="mt-2">
            By browsing this website, you accept these Terms &amp; Conditions in
            full. If you disagree with any part of these terms, please do not
            continue to use this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            2. Intellectual Property
          </h2>
          <p className="mt-2">
            Unless otherwise stated, all content on this website — including
            text, graphics, logos, project descriptions, and code samples — is
            my own work and is protected by applicable copyright laws. You may
            view and share pages from this site for personal, non-commercial
            use, but may not reproduce, redistribute, or republish any content
            without prior written permission.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            3. Project Showcase
          </h2>
          <p className="mt-2">
            Projects featured on this website are shared for demonstration and
            portfolio purposes. Some projects may have been built for clients
            under confidentiality terms, so certain details, code, or live links
            may be limited or omitted. Screenshots and descriptions represent
            the work as accurately as possible at the time of publishing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            4. Contact Form &amp; Data
          </h2>
          <p className="mt-2">
            When you submit the contact form, the information you provide (name,
            email, subject, and message) is used solely to respond to your
            inquiry. This information is not sold, shared, or used for any
            purpose other than communicating with you about your message.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            5. External Links
          </h2>
          <p className="mt-2">
            This website may contain links to external sites (such as GitHub,
            LinkedIn, or project demos) that are not operated by me. I have no
            control over the content and practices of these sites and cannot
            accept responsibility for their respective privacy policies or
            content.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            6. Limitation of Liability
          </h2>
          <p className="mt-2">
            This website and its content are provided on an "as is" basis
            without any warranties, express or implied. I am not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of this website.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            7. Changes to These Terms
          </h2>
          <p className="mt-2">
            These Terms &amp; Conditions may be updated from time to time
            without prior notice. Any changes will be reflected on this page
            with an updated "Last updated" date. Continued use of the website
            after changes constitutes acceptance of the revised terms.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            8. Governing Law
          </h2>
          <p className="mt-2">
            These terms are governed by and construed in accordance with the
            laws of India, without regard to its conflict of law provisions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">9. Contact</h2>
          <p className="mt-2">
            If you have any questions about these Terms &amp; Conditions, feel
            free to reach out through the{" "}
            <Link
              to="/contact"
              className="font-medium text-brand-600 hover:text-brand-700"
            >
              Contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
