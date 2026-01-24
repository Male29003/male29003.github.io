import {
    reactIcon,
    tailwindIcon,
    nodejsIcon,
    pythonIcon,
    javascriptIcon,
    typescriptIcon,
    phpIcon,
    mysqlIcon,
    postgreSqlIcon,
    figmaIcon,
} from "../../assets/icons"

const LAYERS = {
  1: { radius: 80 },
  2: { radius: 160 },
}
const ICONS = [
  // Layer 2: on the circle
  { name: "React", src: reactIcon,            layer: 2 },
  { name: "Tailwind", src: tailwindIcon,      layer: 2 },
  { name: "Node.js", src: nodejsIcon,         layer: 2 },
  { name: "JavaScript", src: javascriptIcon,  layer: 2 },
  { name: "TypeScript", src: typescriptIcon,  layer: 2 },
  { name: "Python", src: pythonIcon,          layer: 2 },
  // Layer 1: inside the circle
  { name: "PHP", src: phpIcon,                layer: 1 },
  { name: "MySQL", src: mysqlIcon,            layer: 1 },
  { name: "PosgreSQL", src: postgreSqlIcon,   layer: 1 },
  { name: "Figma", src: figmaIcon,            layer: 1 },
]

function getPositionedIcons () {
  const result = []

  const groups = {}
  ICONS.forEach((icon) => {
    if(!groups[icon.layer]) groups[icon.layer] = []
    groups[icon.layer].push(icon);
  })

  Object.keys(groups).forEach((layerKey) => {
    const icons = groups[layerKey];
    const radius = LAYERS[layerKey].radius;
    const count = icons.length

    const angleOffset = layerKey === "1" ? Math.PI / count : 0

    icons.forEach((icon, index) => {
      const angle = (2 * Math.PI * index) / count + angleOffset;

      result.push({
        ...icon,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      })
    })
  })
  return result;
}

const positionedIcons = getPositionedIcons();

export default function FloatingStack() {
    return (
        <div className="relative w-full max-w-[20rem] aspect-square flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-slate-200/20"/>
          <div className=" absolute w-2/3 h-2/3 rounded-full border border-slate-200/20" />
          <div className=" absolute w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"/>  
          <div className=" absolute w-12 h-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl top-0 left-0"/>
          <div className=" absolute w-36 h-36 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl top-60 left-60"/>
          
          {positionedIcons.map((icon, i) => (
              <div
                key={i}
                className="absolute flex items-center justify-center w-12 h-12"
                style={{
                  transform: `translate(${icon.x}px, ${icon.y}px)`,
                }}
              >
                    <img
                        src={icon.src}
                        className="w-10 md:w-14 animate-float"
                        style={{ animationDelay: `${i * 0.3}s` }}
                        />
                </div>
          ))}
        </div>
    )
}