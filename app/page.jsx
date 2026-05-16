'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Trophy, Calendar, MapPin, Users, DollarSign, Search, Upload, Copy, Check,
  Download, ShoppingBag, Instagram, Facebook, Youtube, Mail, Phone,
  ShieldCheck, GraduationCap, Briefcase, Sparkles, ArrowRight, Menu, X,
  FileText, Shirt, Droplet, Droplets, ShoppingBasket, IdCard, UserCheck,
  ChevronRight, Star, Flame
} from 'lucide-react'

import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Card } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Button } from './components/ui/button'
import CabenseCrest from './components/CabenseCrest'

const HERO_IMG = 'https://images.unsplash.com/photo-1571080096484-2204ed7a3f17?auto=format&fit=crop&w=1400&q=80'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=1400&q=80'
const STADIUM_IMG = 'https://images.unsplash.com/photo-1659346330058-e4aa255e3fc5?auto=format&fit=crop&w=1600&q=80'
const JERSEY_IMG = 'https://images.unsplash.com/photo-1560750976-125913e9f892?auto=format&fit=crop&w=1200&q=80'

const NAV_LINKS = [
  { href: '#sobre', label: 'O Clube' },
  { href: '#seletiva', label: 'Seletiva' },
  { href: '#pre-selecionados', label: 'Pré-selecionados' },
  { href: '#inscricao', label: 'Inscrição' },
  { href: '#loja', label: 'Loja' },
]

const PIX_KEY = '01.615.265/0001-67'

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
          <CabenseCrest className="w-10 h-12 transition-transform group-hover:scale-110" />
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
          <a href="#inscricao" className="hidden sm:inline-flex">
            <Button className="bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] text-white border border-blue-300/30 shadow-lg shadow-blue-600/30 font-heading uppercase tracking-wider text-xs">
              Inscreva-se <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Button>
          </a>
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
        <CabenseCrest className="w-[120vw] max-w-[1100px] opacity-[0.06]" />
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
            <Flame className="w-3 h-3 mr-1.5" />Temporada 2025 / 2026
          </Badge>
          <h1 className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] tracking-tight">
            <span className="block text-white">SELETIVA</span>
            <span className="block">
              <span className="gold-shine animate-shine">SUB-20</span>
              <span className="text-white ml-3">2025</span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl text-blue-100/90 font-light">
            Chegou a sua hora de fazer parte da <span className="text-white font-medium">Associação Desportiva Cabense</span>.
          </p>
          <p className="mt-3 max-w-xl text-blue-200/70">
            Mostre seu talento e tenha a chance de jogar oficialmente pelo Cabense.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inscricao">
              <Button size="lg" className="bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] text-white border border-blue-300/30 font-heading uppercase tracking-wider px-7 h-12 animate-pulse-glow">
                Inscreva-se Agora <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a href="#seletiva">
              <Button size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 text-white border-white/25 font-heading uppercase tracking-wider px-7 h-12">
                Ver Informações
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: '25/05', v: 'Data' },
              { k: '08H', v: 'Início' },
              { k: 'R$ 20', v: 'Inscrição' },
            ].map((s, i) => (
              <div key={i} className="glass rounded-xl px-3 py-2.5 text-center">
                <div className="font-display text-2xl text-white tracking-wide">{s.k}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-blue-200/70">{s.v}</div>
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
          <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden glow-ring">
            <img src={HERO_IMG} alt="Jovem atleta" className="w-full h-full object-cover animate-float" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040d24] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-xl px-4 py-3 flex items-center gap-3">
              <CabenseCrest className="w-10 h-12" />
              <div>
                <div className="font-heading uppercase tracking-wider text-sm">Ação e Garra</div>
                <div className="text-xs text-blue-200/70">Tradição desde 1953</div>
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
          subtitle="A Associação Desportiva Cabense segue investindo nas categorias de base para revelar novos talentos do futebol brasileiro. A seletiva Sub-20 2025 representa uma nova oportunidade para jovens atletas mostrarem seu potencial." />

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

/* ---------- Seletiva info ---------- */
function Seletiva() {
  const cards = [
    { icon: Calendar, label: 'Data', value: '25/05 às 08h', color: 'from-[#0B5FFF] to-[#1e88ff]' },
    { icon: MapPin, label: 'Local', value: 'Estádio Gileno de Carli', color: 'from-[#0a3da8] to-[#0B5FFF]' },
    { icon: Users, label: 'Público-alvo', value: 'Nascidos entre 2005 e 2009', color: 'from-[#0B5FFF] to-[#3478ff]' },
    { icon: DollarSign, label: 'Inscrição', value: 'R$ 20,00', color: 'from-[#b8901f] to-[#f7d871]' },
  ]
  return (
    <section id="seletiva" className="relative py-24 lg:py-32 bg-pitch-gradient noise">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="A Seletiva" title={<>Informações <span className="gold-shine animate-shine">Oficiais</span></>} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => {
            const Ic = c.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="glass border-blue-500/20 hover:border-[#D4AF37]/60 transition-all p-6 h-full bg-transparent group hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center shadow-lg mb-5`}>
                    <Ic className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70">{c.label}</div>
                  <div className="font-heading text-xl mt-1 text-white leading-tight">{c.value}</div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-2xl overflow-hidden glow-ring">
          <div className="absolute inset-0">
            <img src={STADIUM_IMG} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#040d24] via-[#061B44]/80 to-[#040d24]" />
          </div>
          <div className="relative px-6 py-12 sm:py-16 text-center">
            <Sparkles className="w-7 h-7 mx-auto text-[#f7d871] mb-3" />
            <div className="font-display text-3xl sm:text-5xl">A hora de mostrar seu talento <span className="gold-shine animate-shine">chegou</span>.</div>
            <a href="#inscricao" className="inline-block mt-7">
              <Button size="lg" className="bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] font-heading uppercase tracking-wider px-8 h-12">
                Garantir minha vaga <ChevronRight className="ml-1 w-4 h-4" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ---------- Pre-selecionados ---------- */
function PreSelecionados() {
  const [q, setQ] = useState('')
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/pre-selecionados?q=${encodeURIComponent(q)}`)
        const data = await res.json()
        setItems(data.items || [])
      } catch {
        setItems([])
      } finally { setLoading(false) }
    }
    const t = setTimeout(fetchList, 200)
    return () => clearTimeout(t)
  }, [q])

  return (
    <section id="pre-selecionados" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Convocados" title={<>Lista de <span className="gold-shine animate-shine">Pré-Selecionados</span> — Sub 20 2025</>}
          subtitle="Confira os atletas pré-selecionados para a próxima etapa da seletiva." />

        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200/60" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nome, posição, cidade ou ano..."
            className="pl-11 h-12 bg-white/5 border-blue-500/30 focus-visible:ring-[#0B5FFF] focus-visible:border-[#0B5FFF] text-white placeholder:text-blue-200/40" />
        </div>

        <div className="glass rounded-2xl overflow-hidden border border-blue-500/25">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#0B5FFF]/15 border-b border-blue-500/30">
                <tr className="text-left">
                  <th className="px-5 py-4 font-heading uppercase tracking-wider text-xs text-blue-100">#</th>
                  <th className="px-5 py-4 font-heading uppercase tracking-wider text-xs text-blue-100">Atleta</th>
                  <th className="px-5 py-4 font-heading uppercase tracking-wider text-xs text-blue-100">Posição</th>
                  <th className="px-5 py-4 font-heading uppercase tracking-wider text-xs text-blue-100">Ano</th>
                  <th className="px-5 py-4 font-heading uppercase tracking-wider text-xs text-blue-100 hidden md:table-cell">Cidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-500/10">
                {loading && (
                  <tr><td colSpan={5} className="px-5 py-12 text-center text-blue-200/60">Carregando...</td></tr>
                )}
                {!loading && items.length === 0 && (
                  <tr><td colSpan={5} className="px-5 py-12 text-center text-blue-200/60">Nenhum atleta encontrado.</td></tr>
                )}
                {!loading && items.map((p) => (
                  <tr key={p.numero} className="hover:bg-[#0B5FFF]/10 transition-colors">
                    <td className="px-5 py-4 font-display text-2xl text-[#f7d871]">{String(p.numero).padStart(2, '0')}</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0B5FFF] to-[#0a3da8] flex items-center justify-center text-xs font-bold">
                          {p.nome.split(' ').slice(0,2).map(n => n[0]).join('')}
                        </div>
                        <div className="text-white font-medium">{p.nome}</div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-blue-100/80">{p.posicao}</td>
                    <td className="px-5 py-4 text-blue-100/80">{p.ano}</td>
                    <td className="px-5 py-4 text-blue-100/60 hidden md:table-cell">{p.cidade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-3 text-xs text-blue-200/60 border-t border-blue-500/15 flex items-center justify-between">
            <span>{items.length} atleta(s)</span>
            <span className="hidden sm:inline">Lista atualizada • Sub-20 / 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- O que levar ---------- */
function OQueLevar() {
  const items = [
    { icon: IdCard, t: 'Documento de identificação' },
    { icon: Shirt, t: 'Calção branco' },
    { icon: Shirt, t: 'Meios e camisa azul' },
    { icon: UserCheck, t: 'Responsável legal para menores' },
    { icon: ShoppingBasket, t: '02 sacolas plásticas' },
    { icon: Droplets, t: '01 toalha de rosto' },
    { icon: Droplet, t: '01 squeeze ou garrafa de hidratação' },
  ]
  return (
    <section className="relative py-24 lg:py-32 bg-pitch-gradient noise">
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Checklist" title={<>O que <span className="gold-shine animate-shine">Levar</span></>}
          subtitle="Itens obrigatórios para participar da seletiva. Esteja preparado." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((it, i) => {
            const Ic = it.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass border border-blue-500/20 rounded-xl p-5 flex items-center gap-4 group hover:border-[#D4AF37]/50 transition-all">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0B5FFF] to-[#0a3da8] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Ic className="w-5 h-5 text-white" />
                </div>
                <div className="text-white/95 font-medium">{it.t}</div>
                <Check className="ml-auto w-4 h-4 text-[#f7d871] opacity-0 group-hover:opacity-100 transition" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Inscricao ---------- */
function FileDrop({ label, file, onFile, accept = '.pdf,.jpg,.jpeg,.png,.docx' }) {
  const inputRef = useRef(null)
  const [drag, setDrag] = useState(false)
  return (
    <div>
      <Label className="text-blue-100/90">{label}</Label>
      <div
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault(); setDrag(false)
          const f = e.dataTransfer.files?.[0]
          if (f) onFile(f)
        }}
        onClick={() => inputRef.current?.click()}
        className={`mt-2 rounded-xl border-2 border-dashed transition-all cursor-pointer p-5 text-center
          ${drag ? 'border-[#D4AF37] bg-[#D4AF37]/10' : 'border-blue-500/30 hover:border-[#0B5FFF] hover:bg-[#0B5FFF]/5'}`}>
        <input ref={inputRef} type="file" accept={accept} className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) onFile(f) }} />
        {file ? (
          <div className="flex items-center justify-center gap-2 text-sm text-white">
            <FileText className="w-4 h-4 text-[#f7d871]" />
            <span className="truncate max-w-[220px]">{file.name}</span>
            <span className="text-blue-200/60 text-xs">({(file.size/1024).toFixed(0)} KB)</span>
          </div>
        ) : (
          <>
            <Upload className="w-6 h-6 mx-auto text-blue-200/70 mb-2" />
            <div className="text-sm text-blue-100/80">Arraste o arquivo ou <span className="text-[#f7d871] underline underline-offset-4">selecione</span></div>
            <div className="text-[11px] text-blue-200/50 mt-1">PDF, JPG, PNG ou DOCX</div>
          </>
        )}
      </div>
    </div>
  )
}

function Inscricao() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', nascimento: '', posicao: '' })
  const [comprovante, setComprovante] = useState(null)
  const [formulario, setFormulario] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [copied, setCopied] = useState(false)
  const [success, setSuccess] = useState(null)

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY)
      setCopied(true)
      toast.success('Chave Pix copiada!')
      setTimeout(() => setCopied(false), 2000)
    } catch { toast.error('Não foi possível copiar') }
  }

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.nome || !form.email || !form.telefone || !form.nascimento) {
      toast.error('Preencha todos os campos obrigatórios.')
      return
    }
    setSubmitting(true)
    try {
      const payload = {
        ...form,
        comprovante: comprovante ? { name: comprovante.name, size: comprovante.size, type: comprovante.type } : null,
        formulario: formulario ? { name: formulario.name, size: formulario.size, type: formulario.type } : null,
      }
      const res = await fetch('/api/inscricoes', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Erro ao enviar')
      setSuccess(data.inscricao)
      toast.success('Inscrição enviada com sucesso!')
      setForm({ nome: '', email: '', telefone: '', nascimento: '', posicao: '' })
      setComprovante(null); setFormulario(null)
    } catch (err) {
      toast.error(err.message)
    } finally { setSubmitting(false) }
  }

  return (
    <section id="inscricao" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#0B5FFF]/15 blur-3xl" />
      </div>
      <div className="container mx-auto px-4">
        <SectionHeader kicker="Sua chance" title={<><span className="gold-shine animate-shine">Inscreva-se</span> Agora</>}
          subtitle="Preencha o formulário, anexe o comprovante Pix e o formulário oficial assinado." />

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="glass-strong border-blue-500/30 p-6 sm:p-8 bg-transparent">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label>Nome completo *</Label>
                  <Input value={form.nome} onChange={update('nome')} className="mt-1.5 h-11 bg-white/5 border-blue-500/30 text-white" placeholder="Ex: João da Silva" />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input type="email" value={form.email} onChange={update('email')} className="mt-1.5 h-11 bg-white/5 border-blue-500/30 text-white" placeholder="seu@email.com" />
                </div>
                <div>
                  <Label>Telefone *</Label>
                  <Input value={form.telefone} onChange={update('telefone')} className="mt-1.5 h-11 bg-white/5 border-blue-500/30 text-white" placeholder="(81) 99999-9999" />
                </div>
                <div>
                  <Label>Data de nascimento *</Label>
                  <Input type="date" value={form.nascimento} onChange={update('nascimento')} className="mt-1.5 h-11 bg-white/5 border-blue-500/30 text-white" />
                </div>
                <div className="sm:col-span-2">
                  <Label>Posição principal</Label>
                  <Input value={form.posicao} onChange={update('posicao')} className="mt-1.5 h-11 bg-white/5 border-blue-500/30 text-white" placeholder="Ex: Volante" />
                </div>
              </div>

              <FileDrop label="Comprovante Pix *" file={comprovante} onFile={setComprovante} />
              <FileDrop label="Formulário preenchido *" file={formulario} onFile={setFormulario} />

              <Button type="submit" disabled={submitting}
                className="w-full h-12 bg-gradient-to-r from-[#0B5FFF] to-[#3478ff] hover:from-[#0a4fd6] hover:to-[#2667e6] font-heading uppercase tracking-wider text-white animate-pulse-glow disabled:opacity-60">
                {submitting ? 'Enviando...' : 'Enviar Inscrição'}
                {!submitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>

              <AnimatePresence>
                {success && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-3 text-sm text-[#f7d871] flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold">Inscrição recebida!</div>
                      <div className="text-blue-100/80 text-xs mt-0.5">Protocolo: <span className="font-mono">{success.id?.slice(0, 8).toUpperCase()}</span></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Card>

          {/* Payment side */}
          <div className="space-y-5">
            <Card className="glass border-[#D4AF37]/40 p-6 bg-transparent">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#f7d871] mb-2">
                <DollarSign className="w-3.5 h-3.5" />Pagamento Pix
              </div>
              <div className="font-display text-5xl text-white">R$ 20<span className="text-2xl">,00</span></div>
              <div className="text-xs text-blue-200/70 mt-1">Taxa única de inscrição</div>

              <div className="mt-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-blue-200/70 mb-2">Chave Pix (CNPJ)</div>
                <div className="flex items-center gap-2 glass-strong rounded-lg p-2.5">
                  <code className="text-white font-mono text-sm flex-1 truncate">{PIX_KEY}</code>
                  <Button type="button" onClick={copyPix} size="sm" className="bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#f7d871] border border-[#D4AF37]/40">
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="ml-1 text-xs">{copied ? 'Copiado' : 'Copiar'}</span>
                  </Button>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-blue-100/85">
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#f7d871] mt-0.5 shrink-0" /> Realize o Pix no valor exato.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#f7d871] mt-0.5 shrink-0" /> Anexe o comprovante no formulário.</li>
                <li className="flex gap-2"><Check className="w-4 h-4 text-[#f7d871] mt-0.5 shrink-0" /> Aguarde a confirmação por email.</li>
              </ul>
            </Card>

            <Card id="formulario" className="glass border-blue-500/30 p-6 bg-transparent group">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B5FFF] to-[#0a3da8] flex items-center justify-center shadow-lg">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-heading uppercase tracking-wider text-white">Formulário Oficial</div>
                  <div className="text-xs text-blue-200/70">Baixe, preencha e anexe acima</div>
                </div>
              </div>
              <p className="text-sm text-blue-100/80 mt-4">
                Baixe o formulário oficial de inscrição, preencha e envie junto ao comprovante de pagamento.
              </p>
              <a href="/api/formulario" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 w-full bg-white text-[#061B44] hover:bg-blue-50 font-heading uppercase tracking-wider">
                  <Download className="w-4 h-4 mr-2" /> Baixar Formulário
                </Button>
              </a>
            </Card>
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

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tag: 'HOME', name: 'Camisa Oficial I', accent: 'from-[#0B5FFF] to-[#0a3da8]' },
            { tag: 'AWAY', name: 'Camisa Oficial II', accent: 'from-white/20 to-white/5' },
            { tag: 'THIRD', name: 'Camisa Oficial III', accent: 'from-[#D4AF37]/40 to-[#b8901f]/20' },
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Card className="glass border-blue-500/25 hover:border-[#D4AF37]/50 transition-all overflow-hidden bg-transparent group">
                <div className={`relative aspect-[4/5] bg-gradient-to-br ${c.accent}`}>
                  <img src={JERSEY_IMG} alt={c.name} className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${i === 1 ? 'opacity-40 grayscale' : i === 2 ? 'opacity-60 sepia' : ''}`} />
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
                  <span className="text-xs text-blue-200/70 uppercase tracking-wider">Lançamento</span>
                  <Button size="sm" variant="outline" disabled className="bg-white/5 border-white/15 text-white/70 font-heading uppercase tracking-wider text-[11px]">
                    <ShoppingBag className="w-3.5 h-3.5 mr-1.5" /> Em breve
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
              <CabenseCrest className="w-14 h-16" />
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
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#f7d871]" /> (81) 9 0000-0000</li>
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
      <Seletiva />
      <PreSelecionados />
      <OQueLevar />
      <Inscricao />
      <Loja />
      <Footer />
    </main>
  )
}
