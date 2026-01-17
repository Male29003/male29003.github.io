import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header({ isHidden }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={false}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}    
      className="fixed top-0 w-full z-50 backdrop-blur bg-slate-900/60 dark:bg-black/40
        border-b border-black/10 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <a href="#hero" id="logo" 
            className="font-3rem font-bold px-6 py-4 block gap-2 
            transition-transform ease-in-out duration-300 hover:scale-105"
        >
          Nam <span>Nguyen</span>
        </a>
        <nav className="nav-bar md:flex justify-center mx-auto px-6 py-4 gap-10 text-sm">
          <a href="#hero" className="hover:opacity-100 opacity-70">Home</a>
          <a href="#about" className="hover:opacity-100 opacity-70">About</a>
          <a href="#projects" className="hover:opacity-100 opacity-70">Projects</a>
          <a href="#contact" className="hover:opacity-100 opacity-70">Contact</a>
        </nav>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut"}}
          className="contact-btn md:block text-xs p-2 rounded-full font-mono
    bg-linear-270 from-[#df8909] to-[#ff1d15]">
          Contact me
        </motion.button>

        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          <HiMenu />
        </button> 
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/70 z-40 md:hidden"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed right-0 top-0 w-[75%] max-w-sm z-50
                bg-slate-900 border-l border-white/10 px-6 py-8"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl"
                >
                  <HiX />
                </button>
              </div>

              <nav className="flex flex-col gap-8 text-lg">
                {["hero", "about", "projects", "contact"].map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className="opacity-80 hover:opacity-100 transition"
                  >
                    {id.toUpperCase()}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
