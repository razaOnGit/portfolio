"use client";
import React, { useState, useEffect, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    from_email: "",
    subject: "",
    message: "",
  });
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const textareaRef = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [formData.message]);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.from_email) {
      newErrors.from_email = "Email is required";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.from_email = "Please enter a valid email address";
    }

    if (!formData.subject) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const cooldownPeriod = 30000;

    if (timeSinceLastSubmission < cooldownPeriod) {
      const timeLeft = Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000);
      setErrors({
        form: `Please wait ${timeLeft} seconds before sending another message`
      });
      return;
    }

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      await emailjs.init("YP9va7oWZyO_aeGB-");

      // Send main contact form email
      const contactResult = await emailjs.send(
        "service_7bpusae", 
        "template_ia4pqw3",
        {
          from_name: formData.from_email.split("@")[0],
          from_email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.from_email,
          time: new Date().toLocaleString()
        }
      );

      // If main email succeeds, send auto-reply
      if (contactResult.status === 200) {
        // await emailjs.send(
        //   "service_7bpusae",
        //   "template_mm9c30h", // Make sure this matches your auto-reply template ID
        //   {
        //     to_email: formData.from_email,
        //     to_name: formData.from_email.split("@")[0],
        //     reply_subject: formData.subject,
        //     from_name: "Raza",
        //     subject: "Thank you for contacting me" // Email subject line
        //     // email: formData.from_email // Required for template routing
        //   }
        // );

        setEmailSubmitted(true);
        setFormData({
          from_email: "",
          subject: "",
          message: ""
        });
        setLastSubmissionTime(Date.now());
      }
    } catch (err) {
      setErrors({
        form: "Failed to send email. Please try again later."
      });
      console.error("Email sending error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
      <h5 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text drop-shadow-md my-4 animate-pulse">
  Let's Connect
</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md leading-6">
          <span className="text-primary-500 font-semibold">Ready to innovate together!</span>{' '}
          I'm actively seeking new opportunities where I can contribute my expertise in{' '}
          <span className="text-white">full-stack development</span>. Whether you have an exciting project,
          a challenging position, or just want to discuss tech - I'm all ears and{' '}
          <span className="text-primary-500">typically respond within 24 hours</span>.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/razaOnGit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mdraza7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <div className="bg-green-900/30 text-green-400 px-4 py-3 rounded-md mb-6">
            <h3 className="font-bold mb-1">Message Sent Successfully!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="from_email"
                type="email"
                id="email"
                value={formData.from_email}
                onChange={handleChange}
                className={`bg-[#18191E] border ${
                  errors.from_email ? "border-red-500" : "border-[#33353F]"
                } text-white rounded-lg block w-full p-2.5`}
                placeholder="you@example.com"
              />
              {errors.from_email && (
                <p className="text-red-500 text-sm mt-1">{errors.from_email}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`bg-[#18191E] border ${
                  errors.subject ? "border-red-500" : "border-[#33353F]"
                } text-white rounded-lg block w-full p-2.5`}
                placeholder="Let’s work together!"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                ref={textareaRef}
                value={formData.message}
                onChange={handleChange}
                className={`bg-[#18191E] border ${
                  errors.message ? "border-red-500" : "border-[#33353F]"
                } text-white rounded-lg block w-full p-2.5 resize-none overflow-hidden`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            {errors.form && (
              <p className="text-red-500 text-sm mb-4">{errors.form}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
