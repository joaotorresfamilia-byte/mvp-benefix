"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#0d0b24] text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/premium">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Finalizar Assinatura</h1>
          <p className="text-[#cfcfe1] text-lg">Benefix Premium - R$ 14,90/mês</p>
        </div>

        <Card className="bg-[#15132b] border-[#26233f] mb-8">
          <CardHeader>
            <CardTitle className="text-white">Resumo da Assinatura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-[#26233f]">
              <span className="text-[#cfcfe1]">Plano Premium (mensal)</span>
              <span className="text-white font-bold">R$ 14,90</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span className="text-white">Total</span>
              <span className="text-white">R$ 14,90/mês</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#15132b] border-[#26233f] mb-8">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <CreditCard className="w-8 h-8 text-[#ff3ea5]" />
              <h3 className="text-xl font-bold text-white">Forma de Pagamento</h3>
            </div>
            <p className="text-[#cfcfe1] mb-6">
              A integração de pagamento será configurada em breve. Por enquanto, esta é uma página placeholder.
            </p>
            <Button 
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] hover:opacity-90 text-white font-bold"
              disabled
            >
              Pagamento em Breve
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#15132b] border-[#26233f]">
          <CardContent className="p-6">
            <div className="flex items-start gap-3 mb-4">
              <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Garantia de Segurança</h4>
                <p className="text-[#cfcfe1] text-sm">
                  Seus dados estão protegidos com criptografia de ponta a ponta. Cancele quando quiser, sem multas.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white mb-2">Acesso Imediato</h4>
                <p className="text-[#cfcfe1] text-sm">
                  Assim que o pagamento for confirmado, você terá acesso instantâneo a todos os recursos Premium.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
