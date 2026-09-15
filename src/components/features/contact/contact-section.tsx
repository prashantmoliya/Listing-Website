"use client";

import { Container } from "@/components/common";
import { ContactForm } from "./contact-form";
import { ContactFaq } from "./contact-faq";

export function ContactFormSection() {
  return (
    <section className="py-14 md:py-20 bg-slate-50/50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (60%): Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column (40%): FAQ & Response Time */}
          <div className="lg:col-span-5">
            <ContactFaq />
          </div>
        </div>
      </Container>
    </section>
  );
}
