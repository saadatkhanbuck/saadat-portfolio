"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { PinContainer } from "@/components/ui/3d-pin";

export default function TextPage() {
  return (
    <section className="relative py-0 mb-5 px-4  md:px-6 overflow-hidden">
      {/* SECTION TITLE */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24 text-center md:text-left">
        <p className="text-sm md:text-base tracking-widest uppercase text-neutral-500 mb-4">
          04 / Portfolio Links
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto md:mx-0">
          Where My{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Work Lives
          </span>
        </h2>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* LEFT TEXT */}
        <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          <p>
            Explore my development journey on{" "}
            <LinkPreview
              url="https://github.com/saadatkhanbuck"
              className="font-semibold text-black dark:text-white"
            >
              https://GitHub.com
            </LinkPreview>{" "}
            and connect professionally via{" "}
            <LinkPreview
              url="https://www.linkedin.com/in/akhtarabbas909/"
              className="font-semibold text-blue-500"
            >
              https://LinkedIn.com
            </LinkPreview>
            .
          </p>

          <p>
            I’ve built multiple high-performance platforms focused on clean
            architecture, modern UI/UX, and scalable frontend systems.
          </p>

          <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-1">
                Huboweb Technology
              </h4>
              <LinkPreview
                url="https://huboweb.com/"
                className="text-purple-500"
              >
                https://huboweb.com
              </LinkPreview>
            </div>

            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-1">
                Packaging Writer
              </h4>
              <LinkPreview
                url="https://packagingindustry.vercel.app/"
                className="text-blue-500"
              >
                https://packagingindustry.vercel.app
              </LinkPreview>
            </div>

            <div>
              <h4 className="font-semibold text-lg md:text-xl mb-1">
                Traviazo Ticketing
              </h4>
              <LinkPreview
                url="https://ticketing-website-eta.vercel.app/"
                className="text-green-500"
              >
                https://ticketing-website-eta.vercel.app
              </LinkPreview>
            </div>
          </div>
        </div>

        {/* RIGHT FEATURE CARD */}
        <div className="flex justify-center md:justify-end mt-10 md:mt-0">
          <PinContainer title="Contact Me" href="https://wa.me/923294811430">
            <div className="flex flex-col p-6 md:p-8 w-[20rem] md:w-[20rem] h-[26rem] md:h-[28rem]">
              <h3 className="font-bold text-lg md:text-xl text-white mb-2 md:mb-3">
                Let’s Work Together
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Start a direct WhatsApp conversation for freelance,
                collaboration or project discussion.
              </p>
              <div className="flex-1 mt-6 md:mt-8 rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-green-600" />
            </div>
          </PinContainer>
        </div>
      </div>
    </section>
  );
}
