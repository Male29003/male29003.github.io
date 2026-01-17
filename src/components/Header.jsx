import { motion } from "motion/react"

export default function Header({ hidden }) {
  return (
    <motion.header 
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%"}}
      transition={{ duration: 0.4, ease: "easeInOut" }}    
      className="fixed top-0 w-full z-50 backdrop-blur bg-slate-900/60 dark:bg-black/40
        border-b border-black/10 dark:border-white/10">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <a href="#hero" id="logo" 
            className="font-3rem font-bold px-6 py-4 block gap-2 
            transition-transform ease-in-out duration-300 hover:scale-105">
          Nam <span>Nguyen</span>
        </a>
        <nav className="nav-bar max-w-7xl mx-auto px-6 py-4 flex justify-center gap-10 text-sm">
          <a href="#hero" className="hover:opacity-100 opacity-70">Home</a>
          <a href="#about" className="hover:opacity-100 opacity-70">About</a>
          <a href="#projects" className="hover:opacity-100 opacity-70">Projects</a>
          <a href="#contact" className="hover:opacity-100 opacity-70">Contact</a>
        </nav>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut"}}
          className="text-xs p-2 cursor-pointer rounded-full text-black dark:text-white font-mono
          bg-linear-270 from-[#df8909] to-[#ff1d15]">
          Contact me
        </motion.button>
      </div>
    </motion.header>
  )
}
