import SocialLink from "./SocialLink";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function SocialList({ icon_size }) {
    return(
        <div className="flex items-center justify-center gap-6 mt-5 text-xl">
            <SocialLink href="tel:+84707941024" icon={<FaPhoneAlt size={icon_size} />} />
            <SocialLink href="https://www.linkedin.com/in/nam-nguy%E1%BB%85n-17b807346/" icon={<FaLinkedin size={icon_size} />} />
            <SocialLink href="https://github.com/Male29003/" icon={<FaGithub size={icon_size} />} />
            <SocialLink href="mailto:namnguyen29003@gmail.com" icon={<FaEnvelope size={icon_size} />} />
        </div>
    )
}