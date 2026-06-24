import { Container } from "@/components/common";

export default function AboutPage() {
  return (
    <Container className="pb-16 pt-8">
      <section className="rounded-3xl bg-white p-8 shadow-sm shadow-slate-200">
        <h1 className="text-3xl font-semibold text-slate-900">About Business Listing</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          This website is a simple business directory built with Next.js and Tailwind CSS. It provides a clean structure for listing businesses, showing categories, and building out a modern landing page.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Mission</h2>
            <p className="mt-3 text-slate-600">Help businesses get discovered online with a responsive directory layout that is easy to maintain and expand.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Built With</h2>
            <p className="mt-3 text-slate-600">Next.js, React, Tailwind CSS, shadcn UI styles, and a simple file-based routing structure.</p>
          </div>
        </div>
      </section>
    </Container>
  );
}
