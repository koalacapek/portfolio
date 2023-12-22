import { motion } from "framer-motion";
import "./about.css";
import { useSectionInView } from "../hooks/useSectionInView";

const Contact = () => {
  // const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
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

  const { ref } = useSectionInView("Contact");
  console.log("contact");
  return (
    <section id="contact" ref={ref}>
      <div className="flex h-full pt-[84px] items-center mx-40 justify-center">
        <motion.div className="flex flex-col gap-10 flex-1" variants={variants}>
          <motion.h1
            variants={variants}
            className="font-bold text-8xl text-blue-400"
          >
            Let’s work together!
          </motion.h1>
          <motion.div className="item" variants={variants}>
            <h2 className="block text-[1.5em] font-bold">Mail</h2>
            <span>hanskr7882@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 className="block text-[1.5em] font-bold">Address</h2>
            <span>20 O'Dea Ave, Waterloo, NSW, Australia</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 className="block text-[1.5em] font-bold">Phone</h2>
            <span>+61 466 846 890</span>
          </motion.div>
        </motion.div>
        <div className="relative flex-1">
          <form
            className="flex flex-col gap-5"
            // onSubmit={sendEmail}
          >
            <input
              className="p-[20px] bg-transparent border border-white text-white rounded-md"
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <input
              className="p-[20px] bg-transparent border border-white text-white rounded-md"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              className="p-[20px] bg-transparent border border-white text-white rounded-md"
              rows={8}
              placeholder="Message"
              name="message"
            />
            <button className="p-5 border rounded-md cursor-pointer font-medium border-blue-500 text-blue-500 transition duration-300 ease-in-out hover:bg-blue-700 hover:text-white hover:border-blue-700">
              Submit
            </button>
            {/* {error && "Error"}
            {success && "Success"} */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
