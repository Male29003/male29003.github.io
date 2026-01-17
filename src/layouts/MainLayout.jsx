import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function MainLayout({children}){
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > lastScrollY && window.scrollY > 100){
                setIsHidden(true)
            } else {
                setIsHidden(false)
            }

            setLastScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [lastScrollY])
    
    return(
        <div className="bg-slate-900 text-slate-200 min-h-screen">
            <Header isHidden={isHidden} />
            <main>{children}</main>
        </div>
    )
}