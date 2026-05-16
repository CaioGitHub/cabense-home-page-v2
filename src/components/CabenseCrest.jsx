'use client'

import React from 'react'

export default function CabenseCrest({ className = '', glow = true }) {
  return (
    <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Escudo Cabense">
      <defs>
        <linearGradient id="shieldBlue" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5FFF" />
          <stop offset="55%" stopColor="#0a3da8" />
          <stop offset="100%" stopColor="#061B44" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b8901f" />
          <stop offset="50%" stopColor="#f7d871" />
          <stop offset="100%" stopColor="#b8901f" />
        </linearGradient>
        <filter id="crestGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={glow ? 'url(#crestGlow)' : undefined}>
        {/* Outer gold border */}
        <path
          d="M100 8 L186 38 L186 130 C186 178 148 218 100 232 C52 218 14 178 14 130 L14 38 Z"
          fill="url(#goldGrad)"
        />
        {/* Inner shield */}
        <path
          d="M100 18 L178 44 L178 130 C178 172 144 208 100 222 C56 208 22 172 22 130 L22 44 Z"
          fill="url(#shieldBlue)"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />
        {/* Diagonal white band */}
        <path
          d="M22 78 L178 132 L178 152 L22 98 Z"
          fill="#ffffff"
          opacity="0.95"
        />
        {/* Stars on band */}
        <g fill="#061B44">
          <polygon points="55,93 58,101 67,101 60,107 63,115 55,110 47,115 50,107 43,101 52,101" />
          <polygon points="100,108 103,116 112,116 105,122 108,130 100,125 92,130 95,122 88,116 97,116" />
          <polygon points="145,123 148,131 157,131 150,137 153,145 145,140 137,145 140,137 133,131 142,131" />
        </g>
        {/* Top "ADC" monogram */}
        <text
          x="100" y="62"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight="700"
          fontSize="34"
          fill="#ffffff"
          letterSpacing="2"
        >ADC</text>
        {/* Bottom year */}
        <text
          x="100" y="192"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight="600"
          fontSize="16"
          fill="#D4AF37"
          letterSpacing="3"
        >CABENSE</text>
        <text
          x="100" y="210"
          textAnchor="middle"
          fontFamily="Oswald, sans-serif"
          fontWeight="500"
          fontSize="11"
          fill="#ffffff"
          opacity="0.85"
          letterSpacing="3"
        >FUNDADO EM 1953</text>
      </g>
    </svg>
  )
}
