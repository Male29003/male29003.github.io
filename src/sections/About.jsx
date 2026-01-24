import { motion } from "motion/react"
import FloatingStack from "../components/about/FloatingStack"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-5 py-32 space-y-20">
      {/* =================== Row 1 ===================*/}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            Tools & Technologies
          </h3>

          <p className="opacity-70 leading-relaxed">
            I specialize in building robust and scalable web applications using React combined with TypeScript 
            for type-safe and reliable code. Beyond the frontend, I have a solid understanding of Backend concepts 
            and database management. This full-stack perspective allows me to bridge the gap between design and 
            logic, ensuring seamless integration and high-performance user interfaces with TailwindCSS.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, staggerChildren: 0.05 }}
          className="flex scale-90 md:scale-100 justify-center items-center"
        >
          <FloatingStack />
        </motion.div>
      </div>

      {/* =================== Row 2 ===================*/}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          // Xóa class cũ, thay bằng khung terminal
          className="relative h-80 rounded-3xl bg-[#1e1e1e] border border-white/10 overflow-hidden shadow-2xl"
        >
          <div className="absolute -left-20 -top-20 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
          {/* --- Nội dung Code --- */}
          <div className="px-12 py-2 font-mono text-sm leading-relaxed overflow-hidden">
            <div className="text-gray-400">
              <span className="text-purple-400">const</span> <span className="text-yellow-400">AboutMe</span> = <span className="text-purple-400">()</span> <span className="text-purple-400">=&gt;</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> = {"{"}
            </div>
            <div className="pl-8">
              <span className="text-blue-300">name:</span> <span className="text-green-400">"Nguyen Khanh Nam"</span>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">role:</span> <span className="text-green-400">"Frontend Developer"</span>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">focus:</span> <span className="text-yellow-400">{"["}</span>
            </div>
            <div className="pl-12">
              <span className="text-green-400">"Building interactive UI/UX"</span>,
            </div>
            <div className="pl-12">
              <span className="text-green-400">"Web Performance & Animations"</span>,
            </div>
            <div className="pl-8">
              <span className="text-yellow-400">{"]"}</span>,
            </div>
            <div className="pl-8">
              <span className="text-blue-300">goal:</span> <span className="text-green-400">"Become a Software Engineer"</span>,
            </div>
            <div className="pl-4">
              {"}"};
            </div>
            
            <div className="pl-4 mt-2">
              <span className="text-purple-400">return</span> <span className="text-blue-400">profile</span>;
            </div>

            <div>{"}"}</div>
            
            {/* Con trỏ nhấp nháy */}
            <motion.div 
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-green-400 inline-block ml-1 align-middle"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-6">
            About Me
          </h3>

          <p className="opacity-70 leading-relaxed">
            I love the combination of logic and creativity in Frontend Development. 
            My passion is to build beautiful and intuitive websites that help users solve 
            their problems. I am always eager to learn new things, explore new technologies, 
            and challenge myself with personal projects to become a better developer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
