import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle2, XCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { Container } from "@/components/common";

export const metadata: Metadata = {
  title: "Terms of Service — IndianListingBucket",
  description:
    "Read the terms and conditions governing the use of IndianListingBucket free business directory platform.",
};

const keyPoints = [
  { icon: "check", text: "You must be 18+ to create an account" },
  { icon: "check", text: "Business listings must be accurate and represent real, operating businesses" },
  { icon: "check", text: "All listings are reviewed before going live" },
  { icon: "cross", text: "No cancellations or refunds are entertained for paid plans" },
  { icon: "check", text: "We may remove listings or accounts that violate our guidelines" },
  { icon: "check", text: "These terms are governed by Indian law (courts in Indore, MP)" },
];

const tableOfContents = [
  { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
  { id: "registration", title: "2. Registration" },
  { id: "license", title: "3. License" },
  { id: "copyright-retransmission", title: "4. Copyright & No Retransmission" },
  { id: "content-disclaimer", title: "5. Content Disclaimer" },
  { id: "listing-rank-rules", title: "6. Listing Rank & Display Rules" },
  { id: "prohibited-content", title: "7. Prohibited Content" },
  { id: "business-listings", title: "8. Business Listings" },
  { id: "featured-listings-payments", title: "9. Featured Listings & Payments" },
  { id: "third-party-links", title: "10. Links to Third Party Sites" },
  { id: "reviews-user-content", title: "11. Reviews & User Content" },
  { id: "disclaimers-liability", title: "12. Disclaimers & Limitation of Liability" },
  { id: "governing-law", title: "13. Governing Law" },
  { id: "terms-changes", title: "14. Terms & Conditions Changes" },
  { id: "contact-information", title: "15. Contact Information" },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-slate-900 py-16 md:py-20 text-white text-center relative overflow-hidden border-b border-slate-800">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />
        </div>

        <Container className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-slate-800 text-indigo-300 border border-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 shadow-xs">
            <FileText size={16} />
            <span>Terms of Service</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            Terms of Service
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium mb-4">
            Please read these terms carefully before using IndianListingBucket. By
            using our platform, you agree to these terms.
          </p>

          <div className="text-xs font-semibold text-slate-400">
            Last updated: May 25, 2026
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20 bg-white">
        <Container className="max-w-4xl">
          {/* Key Points Card */}
          <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 sm:p-8 mb-10 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span>⚡</span> Key Points
            </h2>
            <ul className="space-y-3">
              {keyPoints.map((item) => (
                <li key={item.text} className="flex items-start gap-2.5 text-sm text-slate-800 font-medium">
                  {item.icon === "check" ? (
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle size={18} className="text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table of Contents Card */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 mb-12 shadow-xs">
            <h2 className="text-base font-bold text-slate-900 mb-4">
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
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

          {/* Detailed Terms Sections */}
          <div className="space-y-12 text-slate-700 leading-relaxed text-sm sm:text-base divide-y divide-slate-100">
            {/* 1. Acceptance of Terms */}
            <div id="acceptance-of-terms" className="pt-8 first:pt-0 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using IndianListingBucket (&quot;Website&quot;, &quot;Platform&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must discontinue using the platform immediately.
              </p>
              <p className="text-slate-600 text-sm">
                For grievances or inquiries, contact us at{" "}
                <a href="mailto:info@indianlistingbucket.com" className="text-indigo-600 font-bold hover:underline">
                  info@indianlistingbucket.com
                </a>
                .
              </p>
            </div>

            {/* 2. Registration */}
            <div id="registration" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                2. Registration
              </h2>
              <p>
                By creating an account on IndianListingBucket, you certify that all information you provide is true, accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
              <p>
                We reserve the right to deny access or terminate accounts without prior notice if we detect fraudulent activity, unauthorized profile transfers, or violation of these terms. You must be at least 18 years old to register.
              </p>
            </div>

            {/* 3. License */}
            <div id="license" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                3. License
              </h2>
              <p>
                IndianListingBucket grants you a personal, non-exclusive, non-transferable, revocable license to access and use the platform strictly in accordance with these Terms of Service for personal or internal business discovery purposes.
              </p>
            </div>

            {/* 4. Copyright & No Retransmission */}
            <div id="copyright-retransmission" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                4. Copyright &amp; No Retransmission of Information
              </h2>
              <p>
                All content, website architecture, logos, UI designs, and database compilations on IndianListingBucket are the proprietary intellectual property of IndianListingBucket and protected under Indian copyright and trademark laws.
              </p>
              <p>
                You may not scrape, harvest, reproduce, resell, redistribute, or mirror any content, directory listings, or database records from this platform without our explicit prior written consent.
              </p>
            </div>

            {/* 5. Content Disclaimer */}
            <div id="content-disclaimer" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                5. Content Disclaimer
              </h2>
              <p>
                Business listings, contact numbers, prices, descriptions, and media are submitted directly by third-party business owners and users. While we strive to verify listings, IndianListingBucket does not warrant or guarantee the accuracy, completeness, or quality of any third-party content.
              </p>
            </div>

            {/* 6. Listing Rank and Display Rules */}
            <div id="listing-rank-rules" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                6. Listing Rank and Display Rules
              </h2>
              <p>Directory search results and category rankings are organized according to structured algorithmic rules:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-slate-900 font-bold">Priority Ranking:</strong> Listings with higher assigned plan rank (e.g. Rank 1) display before lower ranks (Rank 2, Rank 3).</li>
                <li><strong className="text-slate-900 font-bold">Tie-Breaking:</strong> If multiple businesses hold identical rank within a category or search, the most recently published or updated listing takes precedence.</li>
                <li><strong className="text-slate-900 font-bold">Applicability:</strong> These rules apply to Listings, Featured, Search, and Category pages.</li>
                <li><strong className="text-slate-900 font-bold">Newest Listings:</strong> The &quot;Recent Listings&quot; section is sorted purely by submission timestamp.</li>
              </ul>
            </div>

            {/* 7. Prohibited Content */}
            <div id="prohibited-content" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                7. Prohibited Content
              </h2>
              <p>You may not list or promote businesses involving any of the following prohibited categories:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pl-2">
                <div>• Adult or sexually explicit content</div>
                <div>• Online gambling, betting, or lotteries</div>
                <div>• Unregulated cryptocurrency schemes</div>
                <div>• Hate speech, harassment, or defamation</div>
                <div>• Pirated or counterfeit goods</div>
                <div>• Illegal pharmaceuticals or weapons</div>
                <div>• Deceptive financial or pyramid schemes</div>
                <div>• Malware, spyware, or phishing links</div>
              </div>
            </div>

            {/* 8. Business Listings */}
            <div id="business-listings" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                8. Business Listings
              </h2>
              <p>
                When submitting a business, you warrant that you are the authorized owner or representative of the business. All new and modified listings undergo mandatory quality review before publishing. We reserve the absolute right to reject or remove any listing that fails to meet directory standards.
              </p>
            </div>

            {/* 9. Featured Listings & Payments */}
            <div id="featured-listings-payments" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                9. Featured Listings &amp; Payments
              </h2>
              <p>
                We offer optional paid promotion and featured placement packages processed securely via Razorpay.
              </p>
              <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-4 text-sm font-semibold text-rose-900">
                Cancellation &amp; Refund Policy: All payments for Featured Listings and advertising plans are final and non-refundable. No cancellations or refunds are entertained under any circumstances once a plan has been activated.
              </div>
              <p className="text-sm">
                Promotional plans do not auto-debit; manual renewal is required upon plan expiration.
              </p>
            </div>

            {/* 10. Links to Third Party Sites */}
            <div id="third-party-links" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                10. Links to Third Party Sites
              </h2>
              <p>
                IndianListingBucket contains outbound links to third-party business websites. We do not endorse, supervise, or assume responsibility for the content, privacy practices, or commercial transactions conducted on external websites.
              </p>
            </div>

            {/* 11. Reviews & User Content */}
            <div id="reviews-user-content" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                11. Reviews &amp; User Content
              </h2>
              <p>
                Users may post ratings and reviews based on authentic customer experiences. We prohibit fake, paid, or malicious reviews. IndianListingBucket reserves the right to moderate or remove reviews that violate community standards.
              </p>
            </div>

            {/* 12. Disclaimers & Limitation of Liability */}
            <div id="disclaimers-liability" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                12. Disclaimers &amp; Limitation of Liability
              </h2>
              <p>
                The platform is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. Under no circumstances shall IndianListingBucket or its operators be liable for any indirect, incidental, or consequential damages resulting from platform use.
              </p>
              <p className="text-sm">
                In all events, our total cumulative liability shall not exceed the total fees paid by you to IndianListingBucket during the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* 13. Governing Law */}
            <div id="governing-law" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                13. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. You agree that any legal dispute or proceeding arising out of or related to this website shall be subject to the exclusive jurisdiction of the competent courts located in <strong className="text-slate-900 font-bold">Indore, Madhya Pradesh, India</strong>.
              </p>
            </div>

            {/* 14. Terms & Conditions Changes */}
            <div id="terms-changes" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                14. Terms &amp; Conditions Changes
              </h2>
              <p>
                We reserve the right to revise or update these Terms of Service at our sole discretion at any time. Continued use of IndianListingBucket after changes are posted constitutes your binding acceptance of the updated terms.
              </p>
            </div>

            {/* 15. Contact Information */}
            <div id="contact-information" className="pt-8 space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                15. Contact Information
              </h2>
              <p>
                For any questions, legal notices, or feedback regarding these Terms of Service, please reach out to us:
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
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm"
                >
                  <span>Read Privacy Policy</span>
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
                <span className="text-slate-300">|</span>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 font-bold text-sm"
                >
                  <span>Back to Home</span>
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
