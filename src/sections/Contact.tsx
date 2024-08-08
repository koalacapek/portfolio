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
  return (
    <section id="contact" ref={ref}>
      <div className="flex h-full pt-[84px] items-center mx-40 justify-center">
        <motion.div className="flex flex-col gap-10 flex-1" variants={variants}>
          <motion.h1 variants={variants} className="font-bold text-8xl ">
            Let’s work together!
          </motion.h1>
          <motion.div className="item" variants={variants}>
            <h2 className="block text-[1.5em] font-bold">Mail</h2>
            <span>hanskr7882@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2 className="block text-[1.5em] font-bold">Address</h2>
            <span>10 Peters Street, Zetland, NSW, Australia</span>
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
              className="p-[20px] bg-transparent border-greyBorder border-solid border-2 text-white rounded-md"
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <input
              className="p-[20px] bg-transparent border-greyBorder border-solid border-2 text-white rounded-md"
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              className="p-[20px] bg-transparent border-greyBorder border-solid border-2 text-white rounded-md"
              rows={8}
              placeholder="Message"
              name="message"
            />
            <button className="p-5 rounded-md cursor-pointer font-medium border-greyBorder border-solid border-2 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white hover:border-gray-800">
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
