import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-primary rounded-3xl px-8 py-16 text-center"
      >
        <h1 className="text-green-400 font-mono mb-4 uppercase tracking-widest text-4xl">
          Contact me
        </h1>

        <p className="opacity-80 max-w-xl mx-auto mb-8">
          I'm currently looking for new opportunities.  
          If you have a question or just want to say hi, feel free to reach out!
        </p>

        <a
          href="mailto:your-email@gmail.com"
          className="inline-block px-8 py-3 rounded-full font-mono
          bg-gradient-to-r from-[#df8909] to-[#ff1d15]
          text-black transition-transform duration-300 hover:scale-105"
        >
          My resume
        </a>

        <div className="flex justify-center gap-6 mt-10 text-xl">
          <a
            href="https://github.com/Male29003/"
            target="_blank"
            className="opacity-70 hover:opacity-100 transition"
          >
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-17b807346/"
              target="_blank"
             className="opacity-70 hover:opacity-100 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:namnguyen29003@gmail.com"
            className="opacity-70 hover:opacity-100 transition"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mt-12 text-xs opacity-50">
          Designed & Built by Nam Nguyen
        </p>
      </motion.div>
    </section>
  )
}
