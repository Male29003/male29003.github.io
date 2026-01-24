import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function MainLayout({children}){
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            if(window.scrollY > lastScrollY && window.scrollY > 100){
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            lastScrollY = window.scrollY;
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    
    return(
        <div className="bg-dark text-slate-200 min-h-screen">
            <Header isHidden={isHidden} />
            <main>{children}</main>
            <p className="text-xs opacity-50 text-center pb-5">
                 Designed & Built by Nam Nguyen
            </p>
        </div>
    )
}