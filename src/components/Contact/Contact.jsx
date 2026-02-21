import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Toast options shared to avoid repetition
const TOAST_OPTIONS = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);

  // useCallback: stable reference, prevents form re-render churn
  const sendEmail = useCallback((e) => {
    e.preventDefault();
    if (sending) return; // guard against double-submit
    setSending(true);

    emailjs
      .sendForm(
        "service_ban4xro",
        "template_qzwwq6o",
        form.current,
        "6FI7m0gYmORwwTZEK"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", TOAST_OPTIONS);
        },
        () => {
          toast.error("Failed to send message. Please try again.", TOAST_OPTIONS);
        }
      )
      .finally(() => setSending(false));
  }, [sending]);

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 md:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw]"
    >
      <ToastContainer />

      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-20 md:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold">
          I&apos;d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1" aria-hidden="true">🚀</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
          aria-label="Contact form"
        >
          <label htmlFor="user_email" className="sr-only">Your Email</label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            autoComplete="email"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="user_name" className="sr-only">Your Name</label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            autoComplete="name"
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="subject" className="sr-only">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={sending}
            aria-busy={sending}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
