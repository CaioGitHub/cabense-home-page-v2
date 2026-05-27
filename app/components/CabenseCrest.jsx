import cabenseEscudo from '@/src/assets/cabense-escudo.png'

export default function CabenseCrest({ className = '', glow = true }) {
  return (
    <span
      className={`inline-block ${className}`.trim()}
      style={{
        aspectRatio: `${cabenseEscudo.width} / ${cabenseEscudo.height}`,
        filter: glow ? 'drop-shadow(0 0 14px rgba(11, 95, 255, 0.35))' : 'none',
      }}
    >
      <img
        src={cabenseEscudo.src}
        alt="Escudo Cabense"
        className="block h-full w-full object-contain"
        draggable="false"
      />
    </span>
  )
}
