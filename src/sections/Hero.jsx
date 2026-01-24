import avatar from '../assets/portfolio-avatar.jpg';
import cv from '../assets/KNam_CV.pdf';

import { motion } from 'motion/react';
import SocialList from '../components/SocialList';

export default function Hero() {
  return (
    <section id="hero" className="relative isolate px-6 pt-10 lg:px-8 overflow-hidden min-h-screen">
      {/* --- Background Blur Effect (Top) --- */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-5xl py-12 sm:py-20 lg:py-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-18">
          
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
              Hi, I'm <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight via-primary to-accent">
                Nam Nguyen
              </span>
            </h1>
            
            <h2 className="mt-4 text-xl md:text-2xl font-medium text-slate-400">
              I am Frontend Developer
            </h2>

            <p className="mt-6 text-sm md:text-base lg:text-lg leading-5  text-slate-300 max-w-xl mx-auto md:mx-0">
              I enjoy building clean, responsive, and user-friendly web interfaces. 
              Currently focusing on <span className="font-semibold text-highlight">React, TailwindCSS, and React Native</span> with an emphasis on performance and smooth UX.
            </p>

            <div className='mt-8 flex items-center justify-center md:justify-start gap-5'>
              <SocialList icon_size={22} />

              <div className="h-8 w-[1px] bg-slate-700 mx-2" />
              <motion.a 
                href={cv}
                download="Nguyen_Khanh_Nam_CV.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                className="download_cv_btn px-3 md:px-6 py-2.5 rounded-full font-medium text-sm text-white shadow-lg shadow-primary/20 bg-gradient-to-r from-primary to-accent hover:shadow-accent/40 transition-all cursor-pointer">
                My CV
              </motion.a>
            </div>
          </div>

          {/* --- Image --- */}
          <div className="relative shrink-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-highlight to-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full ring-white/10 shadow-2xl overflow-hidden">
              <img 
                src={avatar} 
                alt="avatar" 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
      
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-primary opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      
    </section>
  )
}
