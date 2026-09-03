import { Link } from "react-router-dom";

export default function Privacy() {
  const lastUpdated = "September 2026";

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
      <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        Legal
      </span>

      <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-gray-400">Last updated: {lastUpdated}</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-600">
        <p>
          Your privacy matters. This Privacy Policy explains what information
          this website collects, how it is used, and the choices you have
          regarding your information.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            1. Information I Collect
          </h2>
          <p className="mt-2">
            The only personal information collected through this website is what
            you voluntarily provide via the contact form: your name, email
            address, subject, and message. This site does not require account
            creation, and no payment or financial information is collected at
            any point.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            2. How Your Information Is Used
          </h2>
          <p className="mt-2">
            Information submitted through the contact form is used solely to
            read and respond to your inquiry. Submissions are recorded in a
            private Google Sheet and trigger an email notification, so that your
            message can be reviewed and replied to. This information is never
            sold, rented, or shared with third parties for marketing purposes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            3. Data Storage &amp; Security
          </h2>
          <p className="mt-2">
            Contact form submissions are stored using Google's infrastructure
            (Google Sheets and Google Apps Script), which applies Google's own
            security standards. Reasonable care is taken to protect this
            information, though no method of electronic storage or transmission
            over the internet can be guaranteed to be 100% secure.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            4. Cookies &amp; Tracking
          </h2>
          <p className="mt-2">
            This website does not use cookies for advertising or tracking
            purposes. If analytics tools are added in the future to better
            understand site usage, this policy will be updated to reflect that
            change.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            5. Third-Party Links
          </h2>
          <p className="mt-2">
            This website contains links to external platforms such as GitHub,
            LinkedIn, and WhatsApp. Once you leave this site via one of these
            links, their respective privacy policies apply, and I am not
            responsible for how those third parties handle your information.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            6. Children's Privacy
          </h2>
          <p className="mt-2">
            This website is not directed at children under the age of 13, and no
            personal information is knowingly collected from children.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            7. Your Choices
          </h2>
          <p className="mt-2">
            You may choose not to submit any personal information by simply not
            using the contact form. If you have previously submitted a message
            and would like it removed, you can request deletion by reaching out
            through the contact details below.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            8. Changes to This Policy
          </h2>
          <p className="mt-2">
            This Privacy Policy may be updated occasionally to reflect changes
            in practices or for legal reasons. Any updates will be posted on
            this page with a revised "Last updated" date.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">9. Contact</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy or how your
            information is handled, feel free to reach out through the{" "}
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
