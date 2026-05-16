'use client'

import React from 'react'

export default function CabenseCrest({ className = '', glow = true }) {
  return (
    <svg viewBox="0 0 200 240" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Escudo Cabense">
      <defs>
        <linearGradient id="goldGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#b8901f" />
          <stop offset="50%" stopColor="#f7d871" />
          <stop offset="100%" stopColor="#b8901f" />
        </linearGradient>
        <linearGradient id="blueDeep" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#0B5FFF" />
          <stop offset="100%" stopColor="#061B44" />
        </linearGradient>
        <clipPath id="shieldClip">
          <path d="M100 18 L178 44 L178 130 C178 172 144 208 100 222 C56 208 22 172 22 130 L22 44 Z" />
        </clipPath>
        <filter id="crestGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="b" />
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
        {/* White inner shield */}
        <path
          d="M100 18 L178 44 L178 130 C178 172 144 208 100 222 C56 208 22 172 22 130 L22 44 Z"
          fill="#ffffff"
        />

        <g clipPath="url(#shieldClip)">
          {/* Vertical blue stripes */}
          <rect x="42" y="18" width="14" height="210" fill="#0B5FFF" />
          <rect x="74" y="18" width="14" height="210" fill="#0B5FFF" />
          <rect x="112" y="18" width="14" height="210" fill="#0B5FFF" />
          <rect x="144" y="18" width="14" height="210" fill="#0B5FFF" />

          {/* Top section background (slightly more saturated for the lighthouse area) */}
          <rect x="0" y="18" width="200" height="44" fill="#ffffff" opacity="0.0" />

          {/* Lighthouse silhouette */}
          <g transform="translate(100 50)">
            {/* base */}
            <path d="M-12 8 L12 8 L9 -2 L-9 -2 Z" fill="#c0392b" />
            {/* tower */}
            <rect x="-5" y="-16" width="10" height="14" fill="#fff" stroke="#c0392b" strokeWidth="1.5" />
            {/* lamp */}
            <rect x="-3.5" y="-22" width="7" height="6" fill="#c0392b" />
            {/* top dome */}
            <circle cx="0" cy="-23" r="2" fill="#c0392b" />
          </g>

          {/* Middle blue band with ADC */}
          <rect x="22" y="100" width="156" height="34" fill="url(#blueDeep)" />
          <rect x="22" y="100" width="156" height="2" fill="#D4AF37" opacity="0.85" />
          <rect x="22" y="132" width="156" height="2" fill="#D4AF37" opacity="0.85" />
          <text
            x="100" y="125"
            textAnchor="middle"
            fontFamily="Oswald, sans-serif"
            fontWeight="700"
            fontSize="22"
            fill="#ffffff"
            letterSpacing="4"
          >ADC</text>

          {/* Bottom blue field with star */}
          <rect x="22" y="160" width="156" height="62" fill="url(#blueDeep)" />
          <polygon
            points="100,176 105,190 119,190 108,199 112,213 100,205 88,213 92,199 81,190 95,190"
            fill="#f7d871" stroke="#b8901f" strokeWidth="0.8"
          />
        </g>

        {/* Outer thin border line */}
        <path
          d="M100 18 L178 44 L178 130 C178 172 144 208 100 222 C56 208 22 172 22 130 L22 44 Z"
          fill="none" stroke="#0B5FFF" strokeWidth="1.5" opacity="0.6"
        />
      </g>
    </svg>
  )
}
