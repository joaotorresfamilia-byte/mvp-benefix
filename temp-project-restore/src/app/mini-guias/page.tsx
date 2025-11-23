"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Briefcase, Shield, Heart, Zap, Users, ArrowLeft, Crown } from "lucide-react"
import Link from "next/link"

const miniGuias = [
  {
    id: "pis-pasep",
    nome: "Guia Rápido do PIS/PASEP",
    icon: TrendingUp,
    cor: "from-purple-500 to-violet-500",
    preco: "7,90",
    descricao: "Tudo sobre o abono salarial anual",
    conteudo: {
      explicacao: "O PIS/PASEP é um abono salarial pago anualmente aos trabalhadores que atendem aos requisitos estabelecidos.",
      criterios: [
        "Estar cadastrado no PIS/PASEP há pelo menos 5 anos",
        "Ter recebido até 2 salários mínimos médios no ano-base",
        "Ter trabalhado pelo menos 30 dias no ano-base",
        "Dados informados corretamente pelo empregador"
      ],
      documentos: [
        "Número do PIS/PASEP",
        "Documento de identificação (RG ou CNH)",
        "CPF"
      ],
      passoAPasso: [
        "Consulte se tem direito no site da Caixa ou Banco do Brasil",
        "Verifique o calendário de pagamento pelo mês de nascimento",
        "Saque na Caixa (PIS) ou BB (PASEP) com documento",
        "Ou receba automaticamente se tiver conta"
      ],
      perguntas: [
        { pergunta: "Quanto vou receber?", resposta: "O valor é proporcional aos meses trabalhados, até 1 salário mínimo." },
        { pergunta: "Quando é pago?", resposta: "Entre julho e dezembro, conforme calendário oficial." },
        { pergunta: "Perco o direito se não sacar?", resposta: "Não, mas o valor fica disponível apenas até uma data limite." }
      ]
    }
  },
  {
    id: "seguro-desemprego",
    nome: "Guia Rápido do Seguro-Desemprego",
    icon: Briefcase,
    cor: "from-orange-500 to-amber-500",
    preco: "7,90",
    descricao: "Como solicitar e receber o benefício",
    conteudo: {
      explicacao: "O Seguro-Desemprego é uma assistência financeira temporária para trabalhadores demitidos sem justa causa.",
      criterios: [
        "Ter sido demitido sem justa causa",
        "Ter trabalhado pelo menos 12 meses nos últimos 18 meses (primeira solicitação)",
        "Não estar recebendo outro benefício (exceto pensão por morte)",
        "Não ter renda própria suficiente"
      ],
      documentos: [
        "Carteira de trabalho",
        "Termo de rescisão do contrato",
        "Documento de identificação",
        "CPF",
        "Comprovante de residência"
      ],
      passoAPasso: [
        "Solicite no portal Gov.br ou app Carteira de Trabalho Digital",
        "Preencha o requerimento com dados corretos",
        "Aguarde análise (geralmente 30 dias)",
        "Receba as parcelas mensalmente"
      ],
      perguntas: [
        { pergunta: "Quantas parcelas vou receber?", resposta: "De 3 a 5 parcelas, dependendo do tempo trabalhado." },
        { pergunta: "Qual o valor?", resposta: "Calculado com base no salário médio dos últimos 3 meses." },
        { pergunta: "Posso trabalhar recebendo?", resposta: "Não. Se conseguir emprego, o benefício é cancelado." }
      ]
    }
  },
  {
    id: "bpc-loas",
    nome: "Guia Rápido do BPC/LOAS",
    icon: Shield,
    cor: "from-indigo-500 to-blue-600",
    preco: "9,90",
    descricao: "Benefício para idosos e pessoas com deficiência",
    conteudo: {
      explicacao: "O BPC/LOAS é um benefício assistencial de 1 salário mínimo para idosos e pessoas com deficiência em situação de vulnerabilidade.",
      criterios: [
        "Ter 65 anos ou mais, OU ter deficiência de longo prazo",
        "Renda familiar per capita inferior a 1/4 do salário mínimo",
        "Estar inscrito no CadÚnico",
        "Não receber nenhum outro benefício"
      ],
      documentos: [
        "Documentos pessoais (RG, CPF)",
        "Comprovante de residência",
        "Inscrição no CadÚnico atualizada",
        "Laudos médicos (para pessoa com deficiência)",
        "Comprovantes de renda de todos os moradores"
      ],
      passoAPasso: [
        "Faça ou atualize seu cadastro no CadÚnico",
        "Solicite o BPC pelo Meu INSS (site ou app)",
        "Aguarde perícia médica (se for por deficiência)",
        "Aguarde avaliação social",
        "Acompanhe o processo pelo Meu INSS"
      ],
      perguntas: [
        { pergunta: "Preciso ter contribuído ao INSS?", resposta: "Não. O BPC é assistencial, não previdenciário." },
        { pergunta: "Posso trabalhar recebendo BPC?", resposta: "Sim, mas a renda pode afetar o benefício." },
        { pergunta: "O BPC gera pensão por morte?", resposta: "Não. O BPC não gera direito a pensão." }
      ]
    }
  },
  {
    id: "tarifa-social",
    nome: "Guia Rápido da Tarifa Social de Energia",
    icon: Zap,
    cor: "from-yellow-500 to-orange-500",
    preco: "7,90",
    descricao: "Desconto na conta de luz",
    conteudo: {
      explicacao: "A Tarifa Social de Energia Elétrica oferece descontos de até 65% na conta de luz para famílias de baixa renda.",
      criterios: [
        "Estar inscrito no CadÚnico com renda per capita até meio salário mínimo",
        "OU receber BPC/LOAS",
        "OU ter membro da família com doença que necessite uso contínuo de equipamentos elétricos"
      ],
      documentos: [
        "Número de Identificação Social (NIS)",
        "CPF do titular da conta de energia",
        "Número da instalação (conta de luz)",
        "Laudo médico (se aplicável)"
      ],
      passoAPasso: [
        "Verifique se está no CadÚnico atualizado",
        "Entre em contato com sua distribuidora de energia",
        "Solicite a Tarifa Social informando seu NIS",
        "Aguarde análise e aprovação",
        "O desconto será aplicado automaticamente na próxima fatura"
      ],
      perguntas: [
        { pergunta: "Qual o desconto?", resposta: "De 10% a 65%, dependendo do consumo mensal." },
        { pergunta: "Preciso renovar todo ano?", resposta: "Não, mas o CadÚnico deve estar atualizado." },
        { pergunta: "Posso perder o benefício?", resposta: "Sim, se sair dos critérios ou não atualizar o CadÚnico." }
      ]
    }
  },
  {
    id: "bolsa-familia",
    nome: "Guia Rápido do Bolsa Família",
    icon: Users,
    cor: "from-pink-500 to-rose-500",
    preco: "9,90",
    descricao: "Programa de transferência de renda",
    conteudo: {
      explicacao: "O Bolsa Família é um programa de transferência de renda para famílias em situação de pobreza e extrema pobreza.",
      criterios: [
        "Renda per capita de até R$ 218,00 por pessoa",
        "Estar inscrito no CadÚnico",
        "Manter crianças na escola (se houver)",
        "Manter vacinação em dia (se houver crianças)",
        "Fazer acompanhamento pré-natal (gestantes)"
      ],
      documentos: [
        "Documentos de todos os membros da família",
        "Comprovante de residência",
        "Comprovantes de renda (se houver)",
        "Carteira de trabalho",
        "Certidões de nascimento das crianças"
      ],
      passoAPasso: [
        "Procure o CRAS mais próximo",
        "Faça o cadastro no CadÚnico",
        "Aguarde análise (pode levar até 45 dias)",
        "Se aprovado, receba o cartão do Bolsa Família",
        "Saque mensalmente na Caixa ou lotéricas"
      ],
      perguntas: [
        { pergunta: "Qual o valor do benefício?", resposta: "Varia conforme composição familiar, mínimo de R$ 600,00." },
        { pergunta: "Posso trabalhar recebendo?", resposta: "Sim, desde que a renda familiar não ultrapasse o limite." },
        { pergunta: "O que são as condicionalidades?", resposta: "São compromissos com saúde e educação que devem ser cumpridos." }
      ]
    }
  }
]

export default function MiniGuiasPage() {
  return (
    <div className="min-h-screen bg-[#0d0b24] text-white">
      {/* Header */}
      <header className="border-b border-[#26233f] bg-[#15132b]/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Button>
            </Link>
            <span className="text-xl font-bold">Mini-Guias</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
            Mini-Guias Práticos
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Guias rápidos e objetivos sobre os principais benefícios sociais
          </p>
          
          <div className="inline-flex items-center gap-2 bg-[#15132b] border border-[#26233f] px-6 py-3 rounded-full">
            <Crown className="w-5 h-5 text-yellow-500" />
            <span className="text-sm">Assinantes Premium têm 30% de desconto em todos os guias</span>
          </div>
        </div>
      </section>

      {/* Lista de Mini-Guias */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniGuias.map((guia) => {
              const Icon = guia.icon
              return (
                <Card key={guia.id} className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${guia.cor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="text-white text-lg">{guia.nome}</CardTitle>
                    <CardDescription className="text-gray-400">{guia.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-white">R$ {guia.preco}</span>
                      <span className="text-sm text-gray-400">pagamento único</span>
                    </div>
                    <Button 
                      className={`w-full bg-gradient-to-r ${guia.cor} hover:opacity-90`}
                      onClick={() => {
                        // Scroll para detalhes do guia
                        document.getElementById(guia.id)?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Detalhes de Cada Mini-Guia */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-5xl space-y-16">
          {miniGuias.map((guia) => {
            const Icon = guia.icon
            return (
              <div key={guia.id} id={guia.id} className="scroll-mt-20">
                <Card className="bg-[#15132b] border-[#26233f]">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${guia.cor} flex items-center justify-center`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-2xl">{guia.nome}</CardTitle>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-2xl font-bold text-white">R$ {guia.preco}</span>
                          <span className="text-xs text-green-400">Premium: R$ {(parseFloat(guia.preco) * 0.7).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Explicação */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">O que é</h4>
                      <p className="text-gray-300">{guia.conteudo.explicacao}</p>
                    </div>

                    {/* Critérios */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Critérios Básicos</h4>
                      <ul className="space-y-1 text-gray-300">
                        {guia.conteudo.criterios.map((criterio, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>{criterio}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documentos */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Documentos Necessários</h4>
                      <ul className="space-y-1 text-gray-300">
                        {guia.conteudo.documentos.map((doc, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Passo a Passo */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Passo a Passo</h4>
                      <ol className="space-y-2 text-gray-300">
                        {guia.conteudo.passoAPasso.map((passo, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${guia.cor} flex items-center justify-center text-sm font-bold`}>
                              {idx + 1}
                            </span>
                            <span>{passo}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Perguntas Frequentes */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Perguntas Frequentes</h4>
                      <div className="space-y-3">
                        {guia.conteudo.perguntas.map((pf, idx) => (
                          <div key={idx}>
                            <p className="font-semibold text-white mb-1">{pf.pergunta}</p>
                            <p className="text-sm text-gray-300">{pf.resposta}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Botão de Compra */}
                    <Button 
                      size="lg"
                      className={`w-full bg-gradient-to-r ${guia.cor} hover:opacity-90 text-white`}
                    >
                      Comprar por R$ {guia.preco}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-0">
            <CardContent className="p-12 text-center">
              <Crown className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Quer acesso a TODOS os guias?
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Assine o Plano Premium e tenha 30% de desconto em todos os mini-guias
              </p>
              <Link href="/premium">
                <Button 
                  size="lg" 
                  className="bg-white text-[#6b2cff] hover:bg-gray-100 px-12 py-6 text-lg rounded-xl shadow-lg"
                >
                  Conhecer o Premium
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
