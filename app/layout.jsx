import { Inter, Bebas_Neue, Oswald } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata = {
  title: 'Associação Desportiva Cabense — Seletiva Sub-20 2025',
  description: 'Tradição, paixão e futuro. Inscreva-se na Seletiva Sub-20 2025 da Associação Desportiva Cabense e mostre seu talento.',
  keywords: 'Cabense, ADC, Seletiva Sub-20, futebol, Cabo de Santo Agostinho, Pernambuco, futebol de base',
  openGraph: {
    title: 'Seletiva Sub-20 2025 — Associação Desportiva Cabense',
    description: 'Chegou a sua hora de fazer parte do Cabense. Inscreva-se agora.',
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
