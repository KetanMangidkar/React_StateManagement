import React, { useState } from "react";
import ContactCard from "./ContactCard";

const initialData = [
  {
    id: 1,
    name: "ketan",
    email: "ketan@ketan.com",
    phone: "1234509876",
  },
  {
    id: 2,
    name: "sai",
    email: "sainath@sainath.com",
    phone: "9876532789",
  },
  {
    id: 3,
    name: "akshay",
    email: "akshay@akshay.com",
    phone: "2346523453",
  },
  {
    id: 4,
    name: "risha",
    email: "risha@risha.com",
    phone: "2346523453",
  },
];

const ContactList = () => {
  const [data, setData] = useState(initialData);
  return (
    <div>
      {data.map((i) => (
        <ContactCard key={i.id} name={i.name} email={i.email} phone={i.phone} />
      ))}
    </div>
  );
};

export default ContactList;
