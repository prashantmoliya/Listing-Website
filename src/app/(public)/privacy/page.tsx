import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, Mail, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/common";

export const metadata: Metadata = {
  title: "Privacy Policy — IndianListingBucket",
  description:
    "Learn how IndianListingBucket collects, uses, and protects your personal information. Read our transparent privacy policy.",
};

const quickSummary = [
  "We collect only what's needed to operate the platform",
  "We never sell your personal data to third parties",
  "Your business contact info is public when you list — that's the point!",
  "You can request deletion of your account and data at any time",
  "We use industry-standard encryption to protect your data",
];

const tableOfContents = [
  { id: "information-we-collect", title: "1. Information We Collect" },
  { id: "how-we-use-information", title: "2. How We Use Your Information" },
  { id: "sharing-of-information", title: "3. Sharing of Information" },
  { id: "data-security", title: "4. Data Security" },
  { id: "your-rights-choices", title: "5. Your Rights & Choices" },
  { id: "cookies-policy", title: "6. Cookies Policy" },
  { id: "third-party-links", title: "7. Third-Party Links" },
  { id: "childrens-privacy", title: "8. Children's Privacy" },
  { id: "changes-to-policy", title: "9. Changes to This Policy" },
  { id: "contact-us", title: "10. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 md:py-20 text-white text-center relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400/20 blur-[120px] rounded-full" />
        </div>

        <Container className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs">
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Your Privacy Matters
          </h1>

          <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-4">
            We are committed to protecting your personal information and being
            transparent about how we use it.
          </p>

          <div className="text-xs font-semibold text-white/80">
            Last updated: May 25, 2026
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-4xl">
          {/* Quick Summary Card */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>📋</span> Quick Summary
            </h2>
            <ul className="space-y-3">
              {quickSummary.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table of Contents Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-4">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium py-1 transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Detailed Policy Sections */}
          <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base divide-y divide-slate-100">
            {/* Section 1 */}
            <div id="information-we-collect" className="pt-8 first:pt-0 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when you create an account,
                submit a business listing, or contact us for support.
              </p>
              <div className="space-y-3 pl-2">
                <div>
                  <strong className="text-slate-900 font-bold">Personal Information:</strong> Name, email address, phone number, and password when you register.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Business Details:</strong> Business name, address, phone number, website, description, operating hours, categories, and photos when you create a listing.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Usage Data:</strong> Pages visited, searches performed, listings viewed, and interaction metrics.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Device Information:</strong> IP address, browser type, operating system, and referral URLs.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Cookies &amp; Tracking:</strong> We use cookies to remember preferences, analyze traffic, and enhance platform security.
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="how-we-use-information" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Operate, maintain, and improve IndianListingBucket</li>
                <li>Process and publicly display business listings and user reviews</li>
                <li>Send transactional emails (e.g., listing approval status, password reset)</li>
                <li>Respond to your support inquiries, requests, and feedback</li>
                <li>Prevent fraudulent activity, spam, and platform abuse</li>
                <li>Analyze search trends and directory performance to optimize user experience</li>
                <li>Send relevant marketing communications (only with your explicit opt-in consent)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="sharing-of-information" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                3. Sharing of Information
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. We may share your information in these limited circumstances:
              </p>
              <div className="space-y-3 pl-2">
                <div>
                  <strong className="text-slate-900 font-bold">Public Directory Listings:</strong> Business information you submit is intentionally published publicly for customers to find and contact you.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Trusted Service Providers:</strong> Payment processors (Razorpay), email services, and cloud hosting infrastructure that assist our operations under strict confidentiality.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Legal Compliance:</strong> When required by Indian law, court subpoena, government regulation, or to protect our legal rights.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets.
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="data-security" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                4. Data Security
              </h2>
              <p>
                We implement comprehensive administrative and technical safeguards to protect your personal information against unauthorized access, loss, or alteration:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>HTTPS with TLS 1.3 encryption across the entire platform</li>
                <li>Industry-standard bcrypt hashing for all stored user passwords</li>
                <li>Restricted and strictly monitored database access controls</li>
                <li>Regular automated backups and routine security vulnerability scans</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div id="your-rights-choices" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                5. Your Rights &amp; Choices
              </h2>
              <p>
                Under applicable Indian data protection laws, you hold the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-900 font-bold">Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong className="text-slate-900 font-bold">Correction:</strong> Update or correct inaccurate or incomplete profile details.</li>
                <li><strong className="text-slate-900 font-bold">Deletion:</strong> Request permanent erasure of your account, listings, and stored data.</li>
                <li><strong className="text-slate-900 font-bold">Opt-Out:</strong> Unsubscribe from non-essential marketing emails at any time.</li>
              </ul>
              <p className="text-slate-600 text-sm">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:info@indianlistingbucket.com" className="text-indigo-600 font-bold hover:underline">
                  info@indianlistingbucket.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            {/* Section 6 */}
            <div id="cookies-policy" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                6. Cookies Policy
              </h2>
              <p>
                We use cookies and similar technologies to remember your session, understand platform usage, and enhance performance.
              </p>
              <div className="space-y-2 pl-2">
                <div>
                  <strong className="text-slate-900 font-bold">Essential Cookies:</strong> Necessary for site authentication, navigation, and security.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Analytics Cookies:</strong> Help us measure visitor interactions to improve search and directory speed.
                </div>
                <div>
                  <strong className="text-slate-900 font-bold">Preference Cookies:</strong> Remember your selected filters, city choices, and display modes.
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="third-party-links" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                7. Third-Party Links
              </h2>
              <p>
                Our platform contains external links to third-party business websites and social profiles. We are not responsible for the privacy practices, content, or security of these external sites. We encourage you to review their respective privacy policies.
              </p>
            </div>

            {/* Section 8 */}
            <div id="childrens-privacy" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                8. Children&apos;s Privacy
              </h2>
              <p>
                IndianListingBucket is designed exclusively for business operators and users aged 18 and older. We do not knowingly collect personal data from minors. If you believe a minor has provided us with personal information, please contact us immediately for prompt deletion.
              </p>
            </div>

            {/* Section 9 */}
            <div id="changes-to-policy" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                9. Changes to This Policy
              </h2>
              <p>
                We may periodically update this Privacy Policy to reflect platform improvements or legal requirements. When updates occur, we will revise the &quot;Last updated&quot; date at the top of this page and notify registered users for significant alterations.
              </p>
            </div>

            {/* Section 10 */}
            <div id="contact-us" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                10. Contact Us
              </h2>
              <p>
                If you have questions, feedback, or privacy-related requests regarding this Privacy Policy, please contact our Data Protection team:
              </p>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 space-y-3 mt-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-indigo-600 shrink-0" />
                  <a href="mailto:info@indianlistingbucket.com" className="text-indigo-600 font-bold hover:underline text-sm sm:text-base">
                    info@indianlistingbucket.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-indigo-600 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    IndianListingBucket, Indore, Madhya Pradesh, India 452001
                  </span>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm"
                >
                  <span>Read Terms of Service</span>
                  <ArrowRight size={14} />
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm"
                >
                  <span>Contact Support</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
