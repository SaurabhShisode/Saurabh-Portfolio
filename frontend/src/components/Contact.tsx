"use client";

import { ValidationError } from "@formspree/react";
import { Mail, User, MessageSquare } from "lucide-react";

interface ContactProps {
  state: {
    submitting: boolean;
    succeeded: boolean;
    errors: any; 
  };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ContactSection({ state, handleSubmit }: ContactProps) {
  return (
    <section id="contact" className="pb-20 bg-[#0d1117] text-white font-inter">

      <h1
        className="text-center text-3xl lg:text-4xl font-bold mb-4"
      >
        Get in <span className="text-[#caa9d3]">Touch</span>
      </h1>

      <p className="text-center text-gray-400 text-base px-10 md:px-0 md:text-lg max-w-2xl mx-auto mb-10">
        Have a question, an idea, or an opportunity? Feel free to reach out.
      </p>

      <div className="max-w-3xl md:mx-10 mx-4 lg:mx-auto bg-[#121924] border border-[#2d384d] p-4 md:p-10 rounded-2xl shadow-xl">
        
        {state.succeeded ? (
          <div className="text-center text-lg md:text-2xl text-green-400 font-semibold">
            Thanks for reaching out. I’ll get back to you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">

            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <div className="flex items-center gap-3 bg-[#0d1117] border border-[#2d384d] px-4 py-3 rounded-xl">
                <User className="text-gray-500" size={20} />
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent focus:outline-none text-gray-300"
                  placeholder="Your name"
                />
              </div>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

     
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <div className="flex items-center gap-3 bg-[#0d1117] border border-[#2d384d] px-4 py-3 rounded-xl">
                <Mail className="text-gray-500" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent focus:outline-none text-gray-300"
                  placeholder="Your email"
                />
              </div>
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <div className="flex items-start gap-3 bg-[#0d1117] border border-[#2d384d] px-4 py-3 rounded-xl">
                <MessageSquare className="text-gray-500 mt-1" size={20} />
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent focus:outline-none text-gray-300"
                  placeholder="Write your message..."
                />
              </div>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className=" px-4 lg:px-10 py-3 bg-[#caa9d3] text-black rounded-xl font-bold text-base md:text-lg hover:bg-white transition-all duration-300 cursor-pointer"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
}
