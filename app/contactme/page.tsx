"use client";
import React, { useRef, useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Mails } from "lucide-react";
import { MacbookScrollDemo } from "../components/mackbook";
import ContactHero from "../components/contacthero";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("");

    emailjs
      .sendForm(
         "service_64bjtdh",  // replace with your Service ID
        "template_98llm0c", // replace with your Template ID
        formRef.current,
        "7quzBC4i412OquWN0" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setSending(false);
          setStatus("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <>
      <ContactHero />
      <div className="mt-10">
        <MacbookScrollDemo />

        <div className="max-w-md mx-auto my-16 px-4 overflow-x-hidden">
          {/* Heading */}
          <div className="flex items-center justify-center mb-8 gap-4">
            <Mails className="w-6 h-6 text-neutral-700 dark:text-white" />
            <h2 className="text-2xl font-bold text-neutral-700 dark:text-white">
              Get in Touch
            </h2>
            <div className="h-0.5 w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
          </div>

          {/* Form Card */}
          <div className="shadow-input mx-auto border w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <h1 className="text-2xl mb-4 font-bold text-neutral-700 dark:text-white">
              Contact Me
            </h1>
            <p className="mt-0 mb-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
              Whether you have a question, want to work together, or just want
              to say hi, my inbox is always open.
            </p>

            <form className="my-4" ref={formRef} onSubmit={handleSubmit}>
              {/* First + Last Name */}
              <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                  <Label htmlFor="first_name">First Name</Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    placeholder="firstname"
                    type="text"
                    required
                  />
                </LabelInputContainer>

                <LabelInputContainer>
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    placeholder="lastname"
                    type="text"
                    required
                  />
                </LabelInputContainer>
              </div>

              {/* Email */}
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </LabelInputContainer>

              {/* Message */}
              <LabelInputContainer className="mb-6">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Write your message..."
                  className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-neutral-700 dark:bg-zinc-900 dark:text-white"
                />
              </LabelInputContainer>

              {/* Status Message */}
              {status && (
                <p className="mb-4 text-sm text-green-500 dark:text-green-400">
                  {status}
                </p>
              )}

              {/* Button */}
              <button
                disabled={sending}
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
              >
                {sending ? "Sending..." : "Send Message →"}
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== helpers ===== */
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
