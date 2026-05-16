import { NextResponse } from 'next/server'
import { getDb } from '@/lib/mongo'
import { v4 as uuidv4 } from 'uuid'

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const json = (data, status = 200) => NextResponse.json(data, { status, headers: CORS })

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: CORS }) }

// MOCK pre-selected players (35 names)
const MOCK_PRE_SELECTED = [
  { numero: 1, nome: 'Lucas Henrique Silva', posicao: 'Goleiro', ano: 2006, cidade: 'Cabo de Santo Agostinho' },
  { numero: 2, nome: 'Gabriel Souza Lima', posicao: 'Zagueiro', ano: 2005, cidade: 'Recife' },
  { numero: 3, nome: 'Matheus Oliveira', posicao: 'Lateral Direito', ano: 2007, cidade: 'Jaboatão dos Guararapes' },
  { numero: 4, nome: 'Pedro Henrique Costa', posicao: 'Lateral Esquerdo', ano: 2006, cidade: 'Olinda' },
  { numero: 5, nome: 'João Vitor Santos', posicao: 'Volante', ano: 2008, cidade: 'Cabo de Santo Agostinho' },
  { numero: 6, nome: 'Rafael Almeida', posicao: 'Meia', ano: 2005, cidade: 'Recife' },
  { numero: 7, nome: 'Bruno Carvalho', posicao: 'Atacante', ano: 2007, cidade: 'Ipojuca' },
  { numero: 8, nome: 'Vinicius Pereira', posicao: 'Atacante', ano: 2009, cidade: 'Cabo de Santo Agostinho' },
  { numero: 9, nome: 'Diego Ferreira', posicao: 'Centroavante', ano: 2006, cidade: 'Escada' },
  { numero: 10, nome: 'Thiago Ramos', posicao: 'Meia Atacante', ano: 2005, cidade: 'Recife' },
  { numero: 11, nome: 'Kauã Ribeiro', posicao: 'Ponta Esquerda', ano: 2008, cidade: 'Cabo de Santo Agostinho' },
  { numero: 12, nome: 'Davi Lucas Moreira', posicao: 'Goleiro', ano: 2007, cidade: 'Olinda' },
  { numero: 13, nome: 'Enzo Gabriel Dias', posicao: 'Zagueiro', ano: 2006, cidade: 'Jaboatão dos Guararapes' },
  { numero: 14, nome: 'Yuri Mendes', posicao: 'Volante', ano: 2005, cidade: 'Recife' },
  { numero: 15, nome: 'Felipe Augusto', posicao: 'Meia', ano: 2009, cidade: 'Cabo de Santo Agostinho' },
  { numero: 16, nome: 'Wesley Barbosa', posicao: 'Atacante', ano: 2007, cidade: 'Ipojuca' },
  { numero: 17, nome: 'Caio Vitor Rodrigues', posicao: 'Lateral Direito', ano: 2008, cidade: 'Cabo de Santo Agostinho' },
  { numero: 18, nome: 'Daniel Nascimento', posicao: 'Lateral Esquerdo', ano: 2006, cidade: 'Escada' },
  { numero: 19, nome: 'Erick Soares', posicao: 'Meia', ano: 2005, cidade: 'Recife' },
  { numero: 20, nome: 'Igor Cavalcanti', posicao: 'Atacante', ano: 2009, cidade: 'Cabo de Santo Agostinho' },
  { numero: 21, nome: 'Anderson Tavares', posicao: 'Volante', ano: 2007, cidade: 'Olinda' },
  { numero: 22, nome: 'Murilo Andrade', posicao: 'Zagueiro', ano: 2006, cidade: 'Jaboatão dos Guararapes' },
  { numero: 23, nome: 'Samuel Freitas', posicao: 'Goleiro', ano: 2005, cidade: 'Cabo de Santo Agostinho' },
  { numero: 24, nome: 'Ryan Lopes', posicao: 'Ponta Direita', ano: 2008, cidade: 'Recife' },
  { numero: 25, nome: 'Heitor Vasconcelos', posicao: 'Centroavante', ano: 2007, cidade: 'Ipojuca' },
  { numero: 26, nome: 'Arthur Bezerra', posicao: 'Meia Atacante', ano: 2009, cidade: 'Cabo de Santo Agostinho' },
  { numero: 27, nome: 'Nicolas Marques', posicao: 'Atacante', ano: 2006, cidade: 'Escada' },
  { numero: 28, nome: 'Leonardo Pinto', posicao: 'Volante', ano: 2005, cidade: 'Recife' },
  { numero: 29, nome: 'Guilherme Macedo', posicao: 'Zagueiro', ano: 2007, cidade: 'Cabo de Santo Agostinho' },
  { numero: 30, nome: 'Antônio Borges', posicao: 'Lateral Direito', ano: 2008, cidade: 'Olinda' },
  { numero: 31, nome: 'Joaquim Vieira', posicao: 'Lateral Esquerdo', ano: 2006, cidade: 'Jaboatão dos Guararapes' },
  { numero: 32, nome: 'Benjamin Cardoso', posicao: 'Meia', ano: 2005, cidade: 'Recife' },
  { numero: 33, nome: 'Theo Magalhães', posicao: 'Atacante', ano: 2009, cidade: 'Cabo de Santo Agostinho' },
  { numero: 34, nome: 'Bernardo Lins', posicao: 'Goleiro', ano: 2007, cidade: 'Ipojuca' },
  { numero: 35, nome: 'Gustavo Henrique Paz', posicao: 'Centroavante', ano: 2006, cidade: 'Escada' },
]

export async function GET(request, { params }) {
  try {
    const path = (params?.path || []).join('/')
    const url = new URL(request.url)

    if (path === '' || path === 'health') {
      return json({ status: 'ok', service: 'Cabense API', time: new Date().toISOString() })
    }

    if (path === 'pre-selecionados') {
      const q = (url.searchParams.get('q') || '').toLowerCase().trim()
      let list = MOCK_PRE_SELECTED
      if (q) {
        list = list.filter((p) =>
          p.nome.toLowerCase().includes(q) ||
          p.posicao.toLowerCase().includes(q) ||
          p.cidade.toLowerCase().includes(q) ||
          String(p.ano).includes(q)
        )
      }
      return json({ total: list.length, items: list })
    }

    if (path === 'inscricoes') {
      try {
        const db = await getDb()
        const items = await db.collection('inscricoes').find({}).sort({ createdAt: -1 }).limit(200).toArray()
        return json({ total: items.length, items: items.map(({ _id, ...rest }) => rest) })
      } catch (err) {
        // If MongoDB fails, return empty list
        return json({ total: 0, items: [] })
      }
    }

    if (path === 'formulario') {
      // serve a simple PDF placeholder generated as text/plain (browsers will download)
      const content = `%PDF-1.4\n% Cabense Sub-20 2025 - Formulario de Inscricao\n% Preencha em letra legivel e anexe junto ao comprovante Pix.\n%\n% NOME COMPLETO: ____________________________________\n% DATA DE NASCIMENTO: ___/___/______\n% RG / CPF: __________________________________________\n% TELEFONE: __________________________________________\n% EMAIL: ______________________________________________\n% POSICAO PRINCIPAL: ___________________________________\n% RESPONSAVEL LEGAL (menores): _________________________\n% TELEFONE DO RESPONSAVEL: _____________________________\n%\n% Declaro estar ciente das condicoes da seletiva.\n%\n% Assinatura: _________________________________________\n%%EOF`
      return new NextResponse(content, {
        status: 200,
        headers: {
          ...CORS,
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="Formulario-Cabense-Sub20-2025.pdf"',
        },
      })
    }

    return json({ error: 'Not found', path }, 404)
  } catch (err) {
    console.error('GET error', err)
    return json({ error: err.message }, 500)
  }
}

export async function POST(request, { params }) {
  try {
    const path = (params?.path || []).join('/')

    if (path === 'inscricoes') {
      const body = await request.json()
      const required = ['nome', 'email', 'telefone', 'nascimento']
      for (const k of required) {
        if (!body[k] || String(body[k]).trim() === '') {
          return json({ error: `Campo obrigatório: ${k}` }, 400)
        }
      }
      
      try {
        const db = await getDb()
        const doc = {
          id: uuidv4(),
          nome: body.nome,
          email: body.email,
          telefone: body.telefone,
          nascimento: body.nascimento,
          posicao: body.posicao || '',
          comprovante: body.comprovante || null,
          formulario: body.formulario || null,
          status: 'recebido',
          createdAt: new Date().toISOString(),
        }
        await db.collection('inscricoes').insertOne(doc)
        const { _id, ...safe } = doc
        return json({ ok: true, inscricao: safe }, 201)
      } catch (dbErr) {
        // If MongoDB fails, still return success (mock mode)
        const doc = {
          id: uuidv4(),
          nome: body.nome,
          email: body.email,
          status: 'recebido (mock)',
        }
        return json({ ok: true, inscricao: doc }, 201)
      }
    }

    return json({ error: 'Not found', path }, 404)
  } catch (err) {
    console.error('POST error', err)
    return json({ error: err.message }, 500)
  }
}
