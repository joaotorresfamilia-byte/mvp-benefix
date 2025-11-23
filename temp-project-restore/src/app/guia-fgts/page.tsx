"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, CheckCircle2, FileText, Calendar, AlertCircle, ArrowLeft, Crown } from "lucide-react"
import Link from "next/link"

export default function GuiaFGTSPage() {
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
              <Wallet className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold">FGTS Descomplicado</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
            <Wallet className="w-10 h-10" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            FGTS Descomplicado
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entenda todas as modalidades de saque e seus direitos como trabalhador
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="text-4xl font-bold text-white">
              R$ 12,90
            </div>
            <div className="text-left">
              <div className="text-sm text-gray-400">pagamento único</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <Crown className="w-3 h-3" />
                Premium: R$ 9,03 (30% OFF)
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-2xl transition-all"
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
            {/* Modalidades de Saque */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Wallet className="w-6 h-6 text-green-500" />
                  Todas as Modalidades de Saque
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• <strong>Saque-Aniversário:</strong> Como funciona e quando aderir</p>
                <p>• <strong>Saque-Rescisão:</strong> Demissão sem justa causa</p>
                <p>• <strong>Saque por Doença Grave:</strong> Requisitos e documentação</p>
                <p>• <strong>Compra da Casa Própria:</strong> Como usar o FGTS</p>
                <p>• <strong>Aposentadoria:</strong> Saque integral do saldo</p>
                <p>• <strong>Calamidade Pública:</strong> Saques emergenciais</p>
                <p>• <strong>Conta Inativa:</strong> Como sacar contas antigas</p>
              </CardContent>
            </Card>

            {/* Como Consultar */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  Como Consultar Saldo no App Oficial
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Passo a passo para baixar e instalar o app FGTS</p>
                <p>• Como fazer login com Gov.br</p>
                <p>• Consultar saldo disponível e extrato completo</p>
                <p>• Verificar contas ativas e inativas</p>
                <p>• Simular valores de saque-aniversário</p>
              </CardContent>
            </Card>

            {/* Checklist de Documentos */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-500" />
                  Checklist de Documentos para Saque
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Documentos pessoais necessários (RG, CPF)</p>
                <p>• Carteira de trabalho e comprovantes</p>
                <p>• Documentos específicos por modalidade de saque</p>
                <p>• Laudos médicos (quando aplicável)</p>
                <p>• Comprovantes de residência e conta bancária</p>
              </CardContent>
            </Card>

            {/* Direitos do Trabalhador */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  Direitos do Trabalhador
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Como funciona o depósito mensal do FGTS</p>
                <p>• Rendimento e correção do saldo</p>
                <p>• Multa de 40% na demissão sem justa causa</p>
                <p>• Direito ao saque em caso de demissão</p>
                <p>• O que fazer se o empregador não depositar</p>
              </CardContent>
            </Card>

            {/* Calendário */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-orange-500" />
                  Calendário Atualizado de Saques
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Datas de liberação do saque-aniversário por mês de nascimento</p>
                <p>• Prazos para saque após demissão</p>
                <p>• Calendário de saques emergenciais (quando houver)</p>
                <p>• Prazo de validade para retirada dos valores</p>
              </CardContent>
            </Card>

            {/* Saque-Aniversário vs Rescisão */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-yellow-500" />
                  Saque-Aniversário vs Saque-Rescisão
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• <strong>Saque-Aniversário:</strong> Vantagens e desvantagens</p>
                <p>• <strong>Saque-Rescisão:</strong> Quando é mais vantajoso</p>
                <p>• Como fazer a mudança entre modalidades</p>
                <p>• Prazo de carência para alteração</p>
                <p>• Simulação: qual opção é melhor para você</p>
              </CardContent>
            </Card>

            {/* Perguntas Frequentes */}
            <Card className="bg-[#15132b] border-[#26233f]">
              <CardHeader>
                <CardTitle className="text-white">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-4">
                <div>
                  <p className="font-semibold text-white mb-1">Quanto tempo demora para cair o FGTS após demissão?</p>
                  <p className="text-sm">O saque fica disponível imediatamente após a homologação da rescisão.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Posso sacar o FGTS se pedir demissão?</p>
                  <p className="text-sm">Não. O saque-rescisão só é permitido em demissão sem justa causa ou acordo.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Como saber se tenho contas inativas?</p>
                  <p className="text-sm">Consulte no app FGTS ou no site da Caixa com seu CPF e senha.</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Vale a pena aderir ao saque-aniversário?</p>
                  <p className="text-sm">Depende da sua situação. Se você tem estabilidade no emprego, pode ser vantajoso.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Card className="bg-gradient-to-r from-green-500 to-emerald-500 border-0">
            <CardContent className="p-12 text-center">
              <Wallet className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Domine o FGTS de uma vez por todas
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Acesso vitalício a todo o conteúdo atualizado
              </p>
              <Button 
                size="lg" 
                className="bg-white text-green-600 hover:bg-gray-100 px-12 py-6 text-lg rounded-xl shadow-lg"
              >
                Comprar por R$ 12,90
              </Button>
              <p className="text-sm mt-4 opacity-75">
                Assinantes Premium pagam apenas R$ 9,03 (30% de desconto)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
