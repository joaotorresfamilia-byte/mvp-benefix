          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-none shadow-2xl hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Plano Benefix</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 14,90</p>
                <p className="text-white/80 text-sm mb-4">/mês</p>
                <ul className="space-y-2 mb-6 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Chat IA ilimitado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Explicações detalhadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Modelos de documentos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Organizador de processos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Guias completos</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-white text-[#6b2cff] hover:bg-gray-100 font-bold"
                  onClick={() => window.location.href = "https://checkout.keoto.com/683b6b90-fb28-444d-a7de-27c2a3c42dff"}
                >
                  Assinar Benefix
                </Button>
              </CardContent>
            </Card>
          </div>