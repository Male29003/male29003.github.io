import avatar from '../assets/portfolio-avatar.jpg';
import { FaFacebook, FaLinkedin, FaGithub  } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" 
            className="min-h-[calc(100vh-3rem)] max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-10">
            <div className="bg-primary rounded-3xl text-center md:text-left md:py-20">
                <h1 className="text-2xl text-green-400 font-mono">Hi, my name is</h1>
                <span className="text-4xl md:text-5xl font-bold">Nam Nguyen</span>
                <h2 className="text-xl opacity-80 max-w-xl">
                    I am a frontend developer.
                </h2>
                <p className="text-sm opacity-70 max-w-2xl mt-6">
                    I enjoys building clean, responsive, and user-friendly web interfaces. Currently, I focus on modern React, TailwindCSS, React Native 
                    with an emphasis on performance, accessibility, and smooth user experience.
                </p>
                <div className="socials md:flex items-center mt-5 h-10">
                    <p className="opacity-90 max-w-3xl">You can reach me at: </p>
                    <div className="flex gap-4 justify-center items-center m-2 h-full">
                        <a href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-17b807346/"
                            target="_blank"
                        >
                            <FaLinkedin size={17}/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568359450216"
                            target="_blank"
                        >
                            <FaFacebook size={17}/>
                        </a>
                        <a href="https://github.com/Male29003/"
                            target="_blank"
                        >
                            <FaGithub size={17}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-img w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden">
                <img src={avatar} alt="avatar-picture" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-black/10" />
            </div>
        </section>
    )
}