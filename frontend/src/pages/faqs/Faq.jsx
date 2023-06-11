import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "What is EASP?",
      answer:
        "EASP stands for Efficient Automated Service Provider. It is an advanced service platform that utilizes automation and technology to streamline and enhance various business processes.",
    },
    {
      question: "How does EASP improve efficiency?",
      answer:
        "EASP improves efficiency by automating repetitive tasks, reducing manual errors, and providing real-time data analysis. It helps businesses optimize their operations, increase productivity, and make informed decisions.",
    },
    {
      question: "What services does EASP offer?",
      answer:
        "EASP offers a wide range of services including Plumber, Carpanter, House Cleaning, Gardner, Electrician, Mechanic.",
    },
    {
      question: "Is EASP secure and reliable?",
      answer:
        "Yes, EASP prioritizes data security and reliability. It implements robust security measures to protect sensitive information and ensures high availability and data integrity. Regular backups and disaster recovery plans are in place to minimize potential disruptions.",
    },
    {
      question: "Can EASP be integrated with existing systems?",
      answer:
        "Yes, EASP can be seamlessly integrated with existing systems and software used by businesses. It provides interoperability and data synchronization to ensure smooth collaboration and data flow across different platforms.",
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <h3 className="question">{faq.question}</h3>
            <p className="answer">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
