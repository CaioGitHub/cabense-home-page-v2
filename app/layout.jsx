import { Inter, Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata = {
  title: 'Associação Desportiva Cabense — Nova Camisa Oficial 2026',
  description: 'Tradição, paixão e futuro. Adquira a nova camisa oficial da Associação Desportiva Cabense para a temporada 2026.',
  keywords: 'Cabense, ADC, Camisa Oficial, temporada 2026, futebol, Cabo de Santo Agostinho, Pernambuco',
  icons: {
    icon: '/cabense-escudo.png',
  },
  openGraph: {
    title: 'Nova Camisa Oficial 2026 — Associação Desportiva Cabense',
    description: 'Vista a paixão Cabense. Garanta sua nova camisa oficial para a temporada 2026.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${bebas.variable} ${oswald.variable} scroll-smooth dark`}>
      <body className="font-sans antialiased bg-[#040d24] text-white selection:bg-[#0B5FFF] selection:text-white">
        {children}
        <Toaster theme="dark" position="top-center" richColors />
      </body>
    </html>
  )
}
