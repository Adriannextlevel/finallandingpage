import React from 'react';
import { Faq1 } from './ui/faq1';

const faqData = {
  heading: "Frequently Asked Questions",
  items: [
    {
      question: "Do I need any coding or design experience?",
      answer:
        "Absolutely not! This course is designed for beginners. We teach you how to use AI tools that handle all the complex design and code, so you can focus on your content and message.",
    },
    {
      question: "How long does it really take to build a page?",
      answer:
        "Most of our students build and launch their first landing page in under 25 minutes. The AI-powered platform streamlines the entire process from start to finish.",
    },
    {
      question: "What if I'm not happy with the course?",
      answer:
        "We offer a 30-day, no-questions-asked money-back guarantee. If you don't find the course valuable, we'll refund your purchase in full.",
    },
    {
      question: "Will my landing page be mobile-friendly?",
      answer:
        "Yes! All pages created using the methods in this course are fully responsive and look great on all devices, including desktops, tablets, and smartphones.",
    },
  ],
};

const FAQ: React.FC = () => {
    return <div id="faq"><Faq1 {...faqData} /></div>;
}

export default FAQ;
