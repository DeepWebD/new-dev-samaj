import React, { useState } from "react";
import AccordionItem from "../AccordionItem";

const faqs = [
  {
    id: "faq-1",
    question: "How can I reset my password?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    id: "faq-2",
    question: "How do I update my billing information?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    id: "faq-3",
    question: "How can I contact customer support?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    id: "faq-4",
    question: "How do I delete my account?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState("faq-1");

  const handleAccordionClick = (id) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-manrope text-center font-bold text-secondary leading-[3.25rem]">
          Frequently asked questions
        </h2>
      </div>
      <div className="accordion-group">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            faq={faq}
            isOpen={openId === faq.id}
            onClick={() => handleAccordionClick(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
