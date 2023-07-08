import SectionTitle from "@/components/projects/SectionTitle";
import React from "react";
import { Phone, Home, Mail } from "lucide-react";

import ContactCard from "@/components/contact/ContactCard";

const contactDetails = [
  {
    title: "Address",
    content: "NO. 231, KATTUPALLI ROAD, ERAVUR 03, BATTICALOA, SRI LANKA",
    Icon: Home,
  },
  {
    title: "Phone",
    content: "0094-77 34 60 707 ",
    Icon: Phone,
  },
  {
    title: "E-Mail",
    content: "archt.luthfurrahman@gmail.com",
    Icon: Mail,
  },
];

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen">
      <SectionTitle>Contact</SectionTitle>
      <div className="w-full md:flex  items-center justify-center">
        <div className="w-full md:w-1/2">
          <p className="mt-2 mb-6 text-md md:text-base ">
          Contact Us for Consultations, Collaborations, and Inquiries
          </p>
          {contactDetails.map((detail) => (
            <ContactCard
              key={detail.title}
              title={detail.title}
              content={detail.content}
              Icon={detail.Icon}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2"></div>
      </div>
    </div>
  );
};

export default ContactPage;
