export default function SocialLink({ href, icon }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-slate-400 hover:text-highlight hover:scale-110 hover:-translate-y-1 duration-300"
    >
      {icon}
    </a>
  );
}