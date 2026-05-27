'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Trophy, Calendar, MapPin, Users, DollarSign, Search, Upload, Copy, Check,
  Download, ShoppingBag, Instagram, Facebook, Youtube, Mail, Phone,
  ShieldCheck, GraduationCap, Briefcase, Sparkles, ArrowRight, Menu, X,
  FileText, Shirt, Droplet, Droplets, ShoppingBasket, IdCard, UserCheck,
  ChevronRight, Star, Flame, Lock
} from 'lucide-react'

import { Card } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import CabenseCrest from './components/CabenseCrest'

const HERO_IMG = 'https://customer-assets.emergentagent.com/job_inscricao-sub20/artifacts/pcw2snky_image.png'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80'
const STADIUM_IMG = 'https://images.unsplash.com/photo-1659346330058-e4aa255e3fc5?auto=format&fit=crop&w=1600&q=80'
const JERSEY_IMG = 'https://customer-assets.emergentagent.com/job_inscricao-sub20/artifacts/pcw2snky_image.png'
const BANNER_IMG = './camisa_propaganda.png'

const NAV_LINKS = [
  { href: '#sobre', label: 'O Clube' },
  { href: '#loja', label: 'Loja' },
]

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll(); window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2 backdrop-blur-xl bg-[#040d24]/85 border-b border-blue-500/15' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <CabenseCrest className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-xl tracking-wider">CABENSE</div>
            <div className="text-[10px] text-blue-300/80 tracking-[0.25em] uppercase">Assoc. Desportiva</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-blue-100/80 hover:text-white transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button onClick={() => {
            const section = document.getElementById('produtos');
            if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }} className="hidden sm:inline-flex bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] text-white border border-blue-300/30 shadow-lg shadow-blue-600/30 font-heading uppercase tracking-wider text-xs">
            Compre Agora <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Button>
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-white/90">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden overflow-hidden bg-[#040d24]/95 backdrop-blur-xl border-t border-blue-500/15">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-blue-100 hover:text-white">{l.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-hero-glow noise pt-24 pb-16 lg:pt-32">
      {/* Background crest glow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <CabenseCrest className="w-[95vw] max-w-[920px] opacity-[0.08]" />
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <span key={i} className="particle"
            style={{
              width: 4 + (i % 5) * 2,
              height: 4 + (i % 5) * 2,
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              opacity: 0.35 + (i % 4) * 0.1,
              animationDelay: `${(i * 0.4) % 5}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }} />
        ))}
      </div>

      {/* Stadium background */}
      <div className="absolute inset-0 -z-10">
        <img src={STADIUM_IMG} alt="" loading="eager" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040d24]/60 via-[#040d24]/70 to-[#040d24]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <Badge className="bg-[#D4AF37]/15 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#f7d871] mb-6 font-heading uppercase tracking-[0.2em] text-[11px] px-3 py-1">
            <Flame className="w-3 h-3 mr-1.5" />Temporada 2026
          </Badge>
          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
            <span className="block text-white">VISTA A</span>
            <span className="block">
              <span className="gold-shine animate-shine">PAIXÃO</span>
              <span className="text-white ml-3">CABENSE</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-blue-100/90 font-light">
            Carregue as cores da <span className="text-white font-medium">Associação Desportiva Cabense</span> dentro e fora dos gramados.
          </p>
          <p className="mt-3 max-w-xl text-blue-200/70">
            Garanta agora a nova camisa oficial da temporada 2026 e faça parte desta história.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" onClick={() => {
              const section = document.getElementById('produtos');
              if (section) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }} className="bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] text-white border border-blue-300/30 font-heading uppercase tracking-wider px-7 h-12 animate-pulse-glow">
              Comprar Agora <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" onClick={() => document.getElementById('loja')?.scrollIntoView({ behavior: 'smooth', block: 'start' })} variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/25 font-heading uppercase tracking-wider px-7 h-12">
              Ver Detalhes
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: 'TEMPORADA 2026', v: 'Lançamento' },
              { k: 'OFICIAL', v: 'Modelo' },
              { k: 'R$ 100,00', v: 'Preço' },
            ].map((s, i) => (
              <div key={i} className="glass rounded-xl px-3 py-2.5 flex flex-col items-center justify-center">
                <div className="font-display text-2xl text-white tracking-wide text-center">{s.k}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-200/70 text-center">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Jersey showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#0B5FFF]/40 to-transparent blur-3xl" />
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#D4AF37]/15 blur-3xl" />
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden glow-ring bg-gradient-to-br from-[#0B5FFF]/30 to-[#061B44]">
            <img src={HERO_IMG} alt="Camisa oficial Cabense" className="w-full h-full object-cover animate-float" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d24] via-transparent to-transparent" />
            <div className='absolute bottom-4 left-4 right-4 glass-strong rounded-xl px-4 py-3 flex items-center gap-3'>
              <CabenseCrest className="w-11 h-11 shrink-0" />
              <div>
                <div className='font-heading uppercase tracking-wider text-sm'>Tradição e Orgulho</div>
                <div className='text-xs text-blue-200/70'>A nova pele da Cabense para 2026</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Section header helper ---------- */
function SectionHeader({ kicker, title, subtitle, accent = 'gold' }) {
  return (
    <div className="text-center mb-12 lg:mb-16">
      <div className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] mb-3 ${accent === 'gold' ? 'text-[#f7d871]' : 'text-[#3478ff]'}`}>
        <span className="h-px w-8 bg-current opacity-60" />{kicker}<span className="h-px w-8 bg-current opacity-60" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95]">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl mx-auto text-blue-100/70">{subtitle}</p>}
    </div>
  )
}

/* ---------- About ---------- */
function About() {
  const items = [
    { icon: GraduationCap, title: 'Formação de Atletas', desc: 'Metodologia profissional que desenvolve talentos técnicos e táticos.' },
    { icon: ShieldCheck, title: 'Estrutura Profissional', desc: 'Comissão técnica qualificada e gramado oficial.' },
    { icon: Briefcase, title: 'Oportunidade de Carreira', desc: 'Vitrine real para clubes maiores do futebol brasileiro.' },
    { icon: Trophy, title: 'Desenvolvimento Esportivo', desc: 'Acompanhamento físico, mental e técnico personalizado.' },
  ]
  return (
    <section id="sobre" className="relative py-24 lg:py-32 stripe-pattern">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Sobre o Clube" title={<>Tradição, <span className="gold-shine animate-shine">Paixão</span> e Futuro</>}
          subtitle="A Associação Desportiva Cabense representa tradição, orgulho e paixão pelo futebol. Vista as cores do clube e faça parte dessa história adquirindo a nova camisa oficial da temporada 2026." />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden glow-ring">
            <img src={ABOUT_IMG} alt="Cabense em ação" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d24] to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-3xl">UM CLUBE.<br/>UMA HISTÓRIA.</div>
              <div className="text-blue-200/80 mt-1 text-sm">Cabo de Santo Agostinho — PE</div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((it, i) => {
              const Ic = it.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="glass border-blue-500/20 hover:border-[#D4AF37]/50 transition-all hover:-translate-y-1 p-5 h-full bg-transparent">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0B5FFF] to-[#0a3da8] flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
                      <Ic className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-heading text-lg uppercase tracking-wide text-white">{it.title}</div>
                    <p className="text-sm text-blue-100/70 mt-1.5">{it.desc}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Loja ---------- */
function Loja() {
  return (
    <section id="loja" className="relative py-24 lg:py-32 bg-pitch-gradient noise">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Loja Oficial" title={<>Nova <span className="gold-shine animate-shine">Temporada</span> 2026</>}
          subtitle="A nova camisa do Cabense está chegando. Mais paixão, mais tradição, mais ação e garra." />

        {/* Official banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto mb-10 rounded-2xl overflow-hidden glow-ring border border-[#D4AF37]/30">
          <img src={BANNER_IMG} alt="Novas Camisas Temporada 2026 — Associação Desportiva Cabense" className="w-full h-auto" />
        </motion.div>

        <div id="produtos" className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tag: 'HOME', name: 'Camisa Oficial I', accent: 'from-[#0B5FFF] to-[#0a3da8]' },
            { tag: 'AWAY', name: 'Camisa Oficial II', accent: 'from-white/20 to-white/5' },
            { tag: 'THIRD', name: 'Camisa Oficial III', accent: 'from-[#D4AF37]/40 to-[#b8901f]/20' },
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="glass border-blue-500/25 hover:border-[#D4AF37]/50 transition-all overflow-hidden bg-transparent group">
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${c.accent} overflow-hidden`}>
                  <img src={JERSEY_IMG} alt={c.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 1 ? 'opacity-40 grayscale blur-md' : i === 2 ? 'opacity-60 sepia blur-md' : ''}`} />
                  {i > 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                      <Lock className="w-14 h-14 text-white/80" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040d24] via-transparent to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#f7d871] font-heading tracking-wider">
                    {c.tag}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-display text-2xl text-white">{c.name}</div>
                    <div className="text-xs text-blue-200/70">Temporada 2026</div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <span className={`text-xs uppercase tracking-wider ${i === 0 ? 'text-[#D4AF37]' : 'text-blue-200/70'}`}>
                    {i === 0 ? 'Agora Disponível' : 'Lançamento'}
                  </span>
                  <Button 
                    size="sm" 
                    disabled={i > 0}
                    className={i === 0 
                      ? "bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] text-white border border-blue-300/30 font-heading uppercase tracking-wider text-[11px]" 
                      : "bg-white/5 border-white/15 text-white/70 font-heading uppercase tracking-wider text-[11px]"
                    }
                  >
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" /> {i === 0 ? 'Comprar' : 'Em breve'}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="relative pt-20 pb-8 bg-[#02070f] border-t border-blue-500/15 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0B5FFF]/10 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <CabenseCrest className="w-14 h-14 shrink-0" />
              <div>
                <div className="font-display text-2xl tracking-wide">ASSOC. DESPORTIVA CABENSE</div>
                <div className="text-xs text-[#f7d871] tracking-[0.2em] uppercase">Tradição • Paixão • Futuro</div>
              </div>
            </div>
            <p className="text-blue-100/70 text-sm max-w-md">
              Clube de futebol brasileiro fundado em 1953, sediado no Cabo de Santo Agostinho — Pernambuco.
              Formando atletas para o futuro do futebol nacional.
            </p>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube].map((Ic, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg glass border border-blue-500/25 flex items-center justify-center hover:border-[#D4AF37]/50 hover:bg-[#0B5FFF]/20 transition-all">
                  <Ic className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="font-heading uppercase tracking-wider text-sm text-white mb-4">Contato</div>
            <ul className="space-y-3 text-sm text-blue-100/75">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#f7d871]" /> contato@cabense.com.br</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#f7d871]" /> (81) 98513-3528</li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[#f7d871] mt-0.5" /> Estádio Gileno de Carli<br/>Cabo de Santo Agostinho — PE</li>
            </ul>
          </div>
          <div>
            <div className="font-heading uppercase tracking-wider text-sm text-white mb-4">Navegação</div>
            <ul className="space-y-2 text-sm text-blue-100/75">
              {NAV_LINKS.map(l => (
                <li key={l.href}><a href={l.href} className="hover:text-[#f7d871] transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-blue-500/15 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-blue-200/50">
          <div>© 2025 Associação Desportiva Cabense. Todos os direitos reservados.</div>
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-[#f7d871]" /> Ação, Garra e Tradição
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ---------- Root ---------- */
export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Loja />
      <Footer />
    </main>
  )
}
