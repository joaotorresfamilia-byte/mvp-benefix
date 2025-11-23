"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle2, FileText, AlertCircle, ArrowLeft, Crown } from "lucide-react"
import Link from "next/link"

export default function GuiaINSSPage() {
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
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold">Guia Completo do INSS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Guia Completo do INSS
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre aposentadorias, auxílios e benefícios previdenciários
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-4xl font-bold text-white">
              R$ 19,90
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">pagamento único</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <Crown className="w-3 h-3" />
                Premium: R$ 13,93 (30% OFF)
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Comprar Agora
          </Button>
        </div>
      </section>

      {/* Conteúdo do Guia */}
      <section className="py-16 px-4 bg-[#15132b]/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que você vai aprender
          </h2>
          
          <div className="space-y-6">
            {/* Quem tem direito */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-500" />
                  Quem tem direito ao INSS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Trabalhadores CLT (carteira assinada)</p>
                <p>• Contribuintes individuais e MEIs</p>
                <p>• Empregadas domésticas</p>
                <p>• Contribuintes facultativos</p>
                <p>• Trabalhadores rurais</p>
              </CardContent>
            </Card>

            {/* Tipos de Aposentadorias */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cyan-500" />
                  Tipos de Aposentadorias
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• <strong>Aposentadoria por Idade:</strong> Requisitos e regras atualizadas</p>
                <p>• <strong>Aposentadoria por Tempo de Contribuição:</strong> Como calcular</p>
                <p>• <strong>Aposentadoria por Invalidez:</strong> Documentação necessária</p>
                <p>• <strong>Aposentadoria Especial:</strong> Para atividades insalubres</p>
                <p>• <strong>Regras de Transição:</strong> Entenda as mudanças da Reforma</p>
              </CardContent>
            </Card>

            {/* Auxílios e Regras */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-6 h-6 text-purple-500" />
                  Auxílios e Regras
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Auxílio-Doença: quando solicitar e como funciona</p>
                <p>• Auxílio-Acidente: direitos e procedimentos</p>
                <p>• Salário-Maternidade: para mães e pais</p>
                <p>• Pensão por Morte: quem tem direito</p>
                <p>• Auxílio-Reclusão: requisitos e documentação</p>
              </CardContent>
            </Card>

            {/* Checklist de Documentos */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  Checklist de Documentos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Documentos pessoais obrigatórios</p>
                <p>• Comprovantes de contribuição</p>
                <p>• Carteira de trabalho e contratos</p>
                <p>• Documentos específicos por tipo de benefício</p>
                <p>• Como organizar sua documentação</p>
              </CardContent>
            </Card>

            {/* Passo a Passo */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-500" />
                  Passo a Passo para Solicitar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Como criar conta no Gov.br e Meu INSS</p>
                <p>• Preenchimento correto do formulário</p>
                <p>• Envio de documentos digitalizados</p>
                <p>• Acompanhamento do processo</p>
                <p>• O que fazer após a aprovação</p>
              </CardContent>
            </Card>

            {/* Erros Comuns */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  Erros Comuns e Como Evitar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Documentação incompleta ou incorreta</p>
                <p>• Não conferir o tempo de contribuição</p>
                <p>• Perder prazos importantes</p>
                <p>• Não acompanhar o processo regularmente</p>
                <p>• Como corrigir erros após negativa</p>
              </CardContent>
            </Card>

            {/* Perguntas Frequentes */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Quanto tempo demora a análise?</p>
                  <p className="text-sm">Em média 45 a 90 dias, dependendo do tipo de benefício e da complexidade do caso.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Posso trabalhar enquanto recebo auxílio-doença?</p>
                  <p className="text-sm">Não. O auxílio-doença é para quem está temporariamente incapacitado para o trabalho.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">O que fazer se meu pedido for negado?</p>
                  <p className="text-sm">Você pode entrar com recurso em até 30 dias ou solicitar nova análise com documentação complementar.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Preciso de advogado?</p>
                  <p className="text-sm">Não é obrigatório, mas pode ajudar em casos mais complexos ou recursos.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
            <CardContent className="p-12 text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Garanta seu Guia Completo do INSS
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Acesso vitalício a todo o conteúdo atualizado
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg rounded-xl shadow-lg"
              >
                Comprar por R$ 19,90
              </Button>
              <p className="text-sm mt-4 opacity-75">
                Assinantes Premium pagam apenas R$ 13,93 (30% de desconto)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
