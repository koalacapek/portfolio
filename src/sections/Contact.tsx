import ContentWrapper from "../components/ContentWrapper";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import "./about.css";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div
      className="flex h-full pt-[84px] items-center mx-40 justify-center"
      id="contact"
    >
      <motion.div className="flex flex-col gap-10 flex-1" variants={variants}>
        <motion.h1 variants={variants} className="font-bold text-8xl">
          Let’s work together
        </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>hanskr7882@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>20 O'Dea Ave, Waterloo, NSW, Australia</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+61 466 846 890</span>
        </motion.div>
      </motion.div>
      <div className="relative flex-1">
        <form
        // onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </div>
  );
};

export default Contact;
