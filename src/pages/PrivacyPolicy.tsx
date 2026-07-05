export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-black text-brand-dark mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-sm text-brand-gray mb-10">Last updated: June 2, 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>1. Introduction</h2>
            <p className="text-brand-gray leading-relaxed">
              SleeveTechs ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website sleevetechs.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>2. Information We Collect</h2>
            <p className="text-brand-gray leading-relaxed mb-3">We may collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray">
              <li>Name and email address when you fill out our contact form</li>
              <li>Phone number and project details you share with us</li>
              <li>Service interest selected in the contact form</li>
            </ul>
            <p className="text-brand-gray leading-relaxed mt-3 mb-3">We also automatically collect certain data when you visit our site:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring website or source</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3. How We Use Your Information</h2>
            <p className="text-brand-gray leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Improve our website and user experience</li>
              <li>Send follow-up communications regarding your project</li>
              <li>Analyze site traffic and usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>4. Cookies</h2>
            <p className="text-brand-gray leading-relaxed">
              Our website uses cookies to enhance your browsing experience. You can choose to accept or decline cookies through the cookie consent banner. Declining cookies will not affect your ability to use the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5. Data Sharing</h2>
            <p className="text-brand-gray leading-relaxed">
              We do <strong>not</strong> sell, trade, or rent your personal information. We may share data with trusted third parties only to the extent necessary to operate our website or provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>6. Data Security</h2>
            <p className="text-brand-gray leading-relaxed">
              We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>7. Your Rights</h2>
            <p className="text-brand-gray leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray">
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>8. Third-Party Links</h2>
            <p className="text-brand-gray leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>9. Changes to This Policy</h2>
            <p className="text-brand-gray leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-dark mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>10. Contact Us</h2>
            <p className="text-brand-gray leading-relaxed mb-3">If you have questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-brand-gray">
              <li>Email: <a href="mailto:info@sleevetechs.com" className="text-brand-blue hover:underline">info@sleevetechs.com</a></li>
              <li>Phone: <a href="tel:+918046472444" className="text-brand-blue hover:underline">+91 80-46472444</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}