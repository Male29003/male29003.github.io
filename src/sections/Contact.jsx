import { motion } from "framer-motion"
import SocialList from "../components/SocialList";

import cv from '../assets/KNam_CV.pdf';

export default function Contact() {
  return (
    <section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-secondary/50 rounded-3xl px-8 py-5 text-center"
      >
        <h1 className="text-green-400 font-mono mb-4 uppercase tracking-widest text-4xl">
          Contact me
        </h1>

        <p className="opacity-80 max-w-xl mx-auto mb-4">
          I'm currently looking for new opportunities.  
          If you have a question or just want to say hi, feel free to reach out!
        </p>

        <motion.a
          href={cv}
          download="Nguyen_Khanh_Nam_CV.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.5 }}
          className="inline-block px-5 py-3 rounded-full font-medium text-sm
            bg-gradient-to-r from-primary to-accent hover:shadow-accent/40
           text-white transition-transform duration-300 hover:scale-105"
        >
          My CV
        </motion.a>

        <SocialList icon_size={20} />

      </motion.div>
    </section>
  )
}
