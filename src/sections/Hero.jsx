import avatar from '../assets/portfolio-avatar.jpg';
import { FaFacebook, FaLinkedin, FaGithub  } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="min-h-[calc(100vh-2.5rem)] max-w-7xl mx-auto flex justify-center items-center gap-12 px-5">
            <div className="bg-primary rounded-3xl py-20">
                <p className="text-green-400 font-mono mb-4">Hi, my name is</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Nam Nguyen</h1>
                <h2 className="text-xl opacity-80 max-w-xl">
                    I am a frontend developer.
                </h2>
                <p className="text-sm opacity-70 max-w-2xl mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="socials flex items-center mt-5 h-10">
                    <p className="opacity-90 max-w-3xl">You can reach me at: </p>
                    <div className="flex gap-4 justify-center items-center m-4 h-full">
                        <a href="https://www.linkedin.com/in/nam-nguyen-2a2b991b4/"
                            rel="noopener noreferrer">
                            <FaLinkedin size={17}/>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61568359450216">
                            <FaFacebook size={17}/>
                        </a>
                        <a href="https://github.com/Male29003/">
                            <FaGithub size={17}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-img w-80 h-80 rounded-full overflow-hidden">
                <img src={avatar} alt="avatar-picture" className="w-full h-full object-cover"/>
            </div>
        </section>
    )
}