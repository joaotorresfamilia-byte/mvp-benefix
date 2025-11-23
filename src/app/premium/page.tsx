"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Crown, MessageSquare, FileText, Bell, Star, ArrowLeft, Sparkles, Shield, X } from "lucide-react"
import Link from "next/link"

export default function PremiumPage() {
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
            <div className="flex items-center gap-2">
              <Crown className="w-6 h-6 text-yellow-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
                Benefix Premium
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 🟣 SEÇÃO 1 — HERO */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Benefix Premium — Entenda Seus Benefícios Sem Burocracia.
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Acesso ilimitado ao Assistente IA + Guias completos + Modelos de documentos por apenas R$ 14,90/mês.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] hover:opacity-90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Assinar Agora — R$ 14,90/mês
          </Button>
        </div>
      </section>

      {/* 🟦 SEÇÃO 2 — O QUE O USUÁRIO RECEBE */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            Tudo o que você precisa para entender e organizar seus benefícios sociais.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6b2cff] to-[#ff3ea5] flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Chat IA ilimitado</CardTitle>
                <CardDescription className="text-gray-400">
                  Pergunte qualquer coisa sobre INSS, FGTS, Bolsa Família, PIS, Seguro-Desemprego e receba orientação clara e objetiva.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff3ea5] to-[#3fa9ff] flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Guias completos e atualizados</CardTitle>
                <CardDescription className="text-gray-400">
                  Conteúdos profissionais sobre todos os benefícios sociais.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3fa9ff] to-[#6b2cff] flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Modelos de documentos prontos</CardTitle>
                <CardDescription className="text-gray-400">
                  Pedido de revisão, requerimentos, contestações e recursos administrativos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#ff3ea5] to-[#6b2cff] flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Organizador de processos</CardTitle>
                <CardDescription className="text-gray-400">
                  Registre protocolos, datas, pendências e tudo que envolve seus benefícios.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6b2cff] to-[#3fa9ff] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Checklist personalizado</CardTitle>
                <CardDescription className="text-gray-400">
                  A IA monta uma lista de documentos e passos que você precisa seguir.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f] hover:border-[#6b2cff] transition-all">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3fa9ff] to-[#ff3ea5] flex items-center justify-center mb-4">
                  <Star className="w-6 h-6" />
                </div>
                <CardTitle className="text-white">Suporte prioritário</CardTitle>
                <CardDescription className="text-gray-400">
                  Atendimento mais rápido para assinantes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <p className="text-center text-xl text-gray-300 mt-12">
            Por R$ 14,90 você tem clareza, organização e orientação real.
          </p>
        </div>
      </section>

      {/* 🟡 SEÇÃO 3 — PARA QUEM É */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Feito para quem quer entender seus direitos sem depender de ninguém.
          </h2>
          
          <Card className="bg-[#15132b] border-[#26233f]">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-6 text-lg">
                Se você fica perdido entre regras, documentos, aplicativos e exigências do governo, o Premium te ajuda a:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>entender o que pode pedir</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>entender como pedir</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>não perder prazos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>não esquecer documentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span>não cometer erros que atrasam processos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🔴 SEÇÃO 4 — GRATUITO VS PREMIUM */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Plano Gratuito vs. Plano Premium
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#26233f]">
                  <th className="text-left p-4 text-white font-semibold">Função</th>
                  <th className="text-center p-4 text-white font-semibold">Grátis</th>
                  <th className="text-center p-4 text-white font-semibold">Premium</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Chat IA</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 text-green-400 font-semibold">✔ Ilimitado</td>
                </tr>
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Guias</td>
                  <td className="text-center p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 text-green-400 font-semibold">✔ Completos</td>
                </tr>
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Modelos de documentos</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 text-green-400 font-semibold">✔ Incluídos</td>
                </tr>
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Checklist personalizado</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Organizador de processos</td>
                  <td className="text-center p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                  <td className="text-center p-4 text-green-400 font-semibold">✔ Melhorado</td>
                </tr>
                <tr className="border-b border-[#26233f]">
                  <td className="p-4">Suporte prioritário</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Atualizações automáticas</td>
                  <td className="text-center p-4">
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  </td>
                  <td className="text-center p-4">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🟩 SEÇÃO 5 — FUNCIONAMENTO DO ASSISTENTE IA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Seu Assistente pessoal para benefícios sociais.
          </h2>
          
          <Card className="bg-[#15132b] border-[#26233f]">
            <CardContent className="p-8">
              <p className="text-gray-300 mb-6 text-lg">
                O Chat IA do Benefix funciona como um especialista.<br />
                Ele explica:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>como pedir cada benefício</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>documentos necessários</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>links oficiais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>etapas reais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>motivos comuns de indeferimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>como resolver cada pendência</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span>checklist do que você precisa preparar</span>
                </li>
              </ul>
              <p className="text-gray-400 mt-6 text-sm italic">
                Tudo isso sem inventar dados, sem simular valores e sem prometer o que não pode.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🟣 SEÇÃO 6 — PROVA SOCIAL */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Por que as pessoas usam o Benefix?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "Finalmente entendi como funciona o INSS."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "A IA explica melhor do que qualquer atendimento presencial."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic">
                  "Melhor R$ 14,90 que já gastei."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🟧 SEÇÃO 7 — GARANTIA E SEGURANÇA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Sem pegadinha. Sem multa. Sem contrato.
          </h2>
          
          <Card className="bg-[#15132b] border-[#26233f]">
            <CardContent className="p-8 text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 text-green-400" />
              <p className="text-gray-300 text-lg">
                Cancele quando quiser, diretamente pelo aplicativo.<br />
                Seu acesso Premium libera na hora.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 🟨 SEÇÃO 8 — FAQ */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">1. O Benefix consulta meu FGTS ou INSS?</h3>
                <p className="text-gray-300">Não. Você consulta pelo app oficial. Nós orientamos o passo a passo.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">2. O Chat IA é ilimitado mesmo?</h3>
                <p className="text-gray-300">Sim, somente no Plano Premium.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">3. Posso cancelar quando quiser?</h3>
                <p className="text-gray-300">Sim. Sem multa ou burocracia.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-[#26233f]">
              <CardContent className="p-6">
                <h3 className="font-semibold text-white mb-2">4. O Benefix é seguro?</h3>
                <p className="text-gray-300">Sim. Seus dados são criptografados e você controla tudo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 🟢 SEÇÃO 9 — CTA FINAL */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-0">
            <CardContent className="p-12 text-center">
              <Crown className="w-16 h-16 mx-auto mb-6" />
              <Button 
                size="lg" 
                className="bg-white text-[#6b2cff] hover:bg-gray-100 px-12 py-6 text-lg rounded-xl shadow-lg mb-6"
              >
                Assinar Benefix Premium — R$ 14,90/mês
              </Button>
              <p className="text-lg text-white/90">
                Organize sua vida social de forma simples e clara.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
