import SectionTitle from "../components/SectionTitle"

export default function About() {
  return (
    <section id="about" className="py-32">
        <SectionTitle>About me</SectionTitle>
        <p className="max-w-2xl opacity-80">
          I'm a frontend developer focused on building clean, accessible,
          and delightful user experiences.
        </p>
    </section>
  )
}
