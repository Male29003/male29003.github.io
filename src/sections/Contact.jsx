import { motion } from "framer-motion"
import SocialList from "../components/SocialList";
import cv from '../assets/KNam_CV.pdf';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="min-h-[60vh] flex items-center justify-center px-6 mt-10"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-primary/20 via-accent/20 to-highlight/20 blur-[120px] -z-10 rounded-full pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-4xl p-10 text-center rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-3/4 mx-auto" />
        <h1 className="font-mono mb-4 uppercase tracking-widest text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-primary font-bold">
            Contact me
          </span>
        </h1>

        <p className="opacity-80 max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-slate-300">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.a
          href={cv}
          download="Nguyen_Khanh_Nam_CV.pdf"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.5 }}
          className="download_cv_btn px-4 md:px-7 py-2.5 rounded-full font-semibold text-xl text-white shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] transition-all duration-300 cursor-pointer"
        >
          My Resume
        </motion.a>

        <div className="mt-12 pt-8 border-t border-white/5 w-2/3 mx-auto">
          <SocialList icon_size={26} />
        </div>

      </motion.div>
    </section>
  )
}
