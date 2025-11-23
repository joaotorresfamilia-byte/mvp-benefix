"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, ClipboardList, BookOpen, User, Home, Settings, Shield, Wallet, TrendingUp, Briefcase, Users, Baby, Heart, CheckCircle2, ArrowRight, Star, ChevronLeft, MessageSquare, Crown, Sparkles, Send, Mail, Phone, Calendar, MapPin, FileCheck, AlertCircle, Info, Package } from "lucide-react"

type UserData = {
  nome: string
  cpf: string
  email: string
  senha: string
  genero?: string
  estado?: string
  cidade?: string
  dataNascimento?: string
  telefone?: string
  beneficioInteresse?: string
  situacaoAtual?: string
  processoAberto?: string
  numeroProtocolo?: string
}

type QuizStep = {
  pergunta: string
  opcoes: { valor: string; label: string }[]
}

const beneficios = [
  { id: "inss", nome: "INSS", icon: Shield, cor: "from-blue-500 to-cyan-500", descricao: "Aposentadorias e auxílios previdenciários" },
  { id: "fgts", nome: "FGTS", icon: Wallet, cor: "from-green-500 to-emerald-500", descricao: "Fundo de garantia do trabalhador" },
  { id: "pis", nome: "PIS/PASEP", icon: TrendingUp, cor: "from-purple-500 to-violet-500", descricao: "Abono salarial anual" },
  { id: "seguro", nome: "Seguro-Desemprego", icon: Briefcase, cor: "from-orange-500 to-amber-500", descricao: "Assistência financeira temporária" },
  { id: "bolsa", nome: "Bolsa Família", icon: Users, cor: "from-pink-500 to-rose-500", descricao: "Transferência de renda" },
  { id: "auxilio-maternidade", nome: "Auxílio Maternidade", icon: Baby, cor: "from-rose-400 to-pink-500", descricao: "Benefício para gestantes e mães" },
  { id: "auxilio-doenca", nome: "Auxílio Doença", icon: Heart, cor: "from-red-500 to-rose-600", descricao: "Para incapacidade temporária" },
  { id: "bpc-loas", nome: "BPC/LOAS", icon: User, cor: "from-indigo-500 to-blue-600", descricao: "Assistência a idosos e deficientes" },
]

const estadosBrasil = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", 
  "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
]

const quizSteps: QuizStep[] = [
  {
    pergunta: "Qual benefício você quer entender ou consultar?",
    opcoes: [
      { valor: "inss", label: "INSS (Aposentadorias)" },
      { valor: "fgts", label: "FGTS" },
      { valor: "pis", label: "PIS/PASEP" },
      { valor: "seguro", label: "Seguro-Desemprego" },
      { valor: "bolsa", label: "Bolsa Família" },
      { valor: "outro", label: "Outro benefício" },
    ]
  },
  {
    pergunta: "Você já recebe este benefício?",
    opcoes: [
      { valor: "sim", label: "Sim, já recebo" },
      { valor: "nao", label: "Não, quero saber se tenho direito" },
      { valor: "tentando", label: "Estou tentando solicitar" },
    ]
  },
  {
    pergunta: "Possui algum processo em andamento?",
    opcoes: [
      { valor: "sim", label: "Sim, tenho processo aberto" },
      { valor: "nao", label: "Não tenho processo" },
      { valor: "negado", label: "Meu pedido foi negado" },
    ]
  },
  {
    pergunta: "Tem dificuldades com documentos ou prazos?",
    opcoes: [
      { valor: "sim", label: "Sim, preciso de ajuda" },
      { valor: "nao", label: "Não, está tudo organizado" },
      { valor: "duvidas", label: "Tenho algumas dúvidas" },
    ]
  },
  {
    pergunta: "Deseja receber orientações personalizadas?",
    opcoes: [
      { valor: "sim", label: "Sim, quero orientação completa" },
      { valor: "basico", label: "Só informações básicas" },
      { valor: "premium", label: "Quero suporte premium" },
    ]
  }
]

// Informações detalhadas dos benefícios (para página explicativa)
const beneficiosDetalhes: Record<string, {
  nome: string
  descricao: string
  quemTemDireito: string[]
  documentosBasicos: string[]
  comoSolicitar: string
  produtoRelacionado: string
}> = {
  inss: {
    nome: "INSS - Aposentadorias e Benefícios",
    descricao: "O INSS (Instituto Nacional do Seguro Social) é responsável por diversos benefícios previdenciários, incluindo aposentadorias por idade, tempo de contribuição, invalidez, auxílios e pensões.",
    quemTemDireito: [
      "Trabalhadores com carteira assinada que contribuem mensalmente",
      "Contribuintes individuais (autônomos, MEI)",
      "Segurados especiais (trabalhadores rurais)",
      "Dependentes de segurados (pensão por morte)"
    ],
    documentosBasicos: [
      "Documento de identificação com foto (RG ou CNH)",
      "CPF",
      "Comprovante de residência atualizado",
      "Carteira de trabalho ou carnês de contribuição",
      "Certidão de nascimento ou casamento (quando aplicável)"
    ],
    comoSolicitar: "Acesse o portal Meu INSS (gov.br/meuinss) ou aplicativo Meu INSS. Faça login com sua conta gov.br, selecione o benefício desejado e siga as instruções. Você também pode agendar atendimento presencial em uma agência do INSS.",
    produtoRelacionado: "guia-inss"
  },
  fgts: {
    nome: "FGTS - Fundo de Garantia do Tempo de Serviço",
    descricao: "O FGTS é um direito de todo trabalhador com carteira assinada. O empregador deposita mensalmente 8% do salário em uma conta vinculada ao trabalhador na Caixa Econômica Federal.",
    quemTemDireito: [
      "Trabalhadores com carteira assinada (CLT)",
      "Trabalhadores rurais, temporários e intermitentes",
      "Atletas profissionais",
      "Diretores não empregados (opcional)"
    ],
    documentosBasicos: [
      "Documento de identificação com foto",
      "CPF",
      "Número do PIS/PASEP",
      "Carteira de trabalho (para consulta)"
    ],
    comoSolicitar: "Consulte seu saldo pelo aplicativo FGTS (disponível para Android e iOS) ou no site da Caixa. Para saques, verifique se você se enquadra em alguma modalidade de saque e siga as instruções no app ou compareça a uma agência da Caixa.",
    produtoRelacionado: "guia-fgts"
  },
  pis: {
    nome: "PIS/PASEP - Abono Salarial",
    descricao: "O PIS/PASEP é um abono salarial anual pago aos trabalhadores que receberam até 2 salários mínimos médios no ano-base e trabalharam pelo menos 30 dias com carteira assinada.",
    quemTemDireito: [
      "Trabalhadores que receberam até 2 salários mínimos médios no ano-base",
      "Trabalharam pelo menos 30 dias com carteira assinada no ano-base",
      "Cadastrados no PIS/PASEP há pelo menos 5 anos",
      "Dados informados corretamente pelo empregador na RAIS"
    ],
    documentosBasicos: [
      "Documento de identificação com foto",
      "CPF",
      "Número do PIS/PASEP"
    ],
    comoSolicitar: "Consulte se tem direito pelo aplicativo Carteira de Trabalho Digital ou no site da Caixa (PIS) ou Banco do Brasil (PASEP). O saque pode ser feito em agências, lotéricas ou por transferência bancária, conforme o calendário oficial.",
    produtoRelacionado: "mini-guias"
  },
  seguro: {
    nome: "Seguro-Desemprego",
    descricao: "O Seguro-Desemprego é uma assistência financeira temporária concedida ao trabalhador dispensado sem justa causa. O valor e número de parcelas variam conforme o tempo trabalhado.",
    quemTemDireito: [
      "Trabalhadores dispensados sem justa causa",
      "Trabalhadores com carteira assinada por pelo menos 12 meses nos últimos 18 meses (primeira solicitação)",
      "Não possuir renda própria suficiente",
      "Não estar recebendo benefício previdenciário (exceto pensão por morte ou auxílio-acidente)"
    ],
    documentosBasicos: [
      "Requerimento do Seguro-Desemprego (fornecido pelo empregador)",
      "Documento de identificação com foto",
      "CPF",
      "Carteira de trabalho",
      "Termo de rescisão do contrato de trabalho"
    ],
    comoSolicitar: "Solicite pelo portal gov.br ou aplicativo Carteira de Trabalho Digital. Você também pode solicitar presencialmente em um posto do SINE ou Superintendência Regional do Trabalho. O prazo para solicitar é de 7 a 120 dias após a demissão.",
    produtoRelacionado: "mini-guias"
  },
  bolsa: {
    nome: "Bolsa Família",
    descricao: "O Bolsa Família é um programa de transferência de renda do governo federal destinado a famílias em situação de pobreza e extrema pobreza. O valor varia conforme a composição familiar.",
    quemTemDireito: [
      "Famílias com renda per capita de até R$ 218,00 por mês",
      "Famílias inscritas no Cadastro Único (CadÚnico)",
      "Famílias com dados atualizados no CadÚnico",
      "Cumprimento das condicionalidades (saúde e educação)"
    ],
    documentosBasicos: [
      "Documento de identificação de todos os membros da família",
      "CPF do responsável familiar",
      "Comprovante de residência",
      "Carteira de trabalho (se houver)",
      "Comprovante de matrícula escolar dos filhos"
    ],
    comoSolicitar: "Procure o CRAS (Centro de Referência de Assistência Social) do seu município para fazer o cadastro no CadÚnico. Após o cadastro, o governo federal avalia automaticamente se a família tem direito ao benefício. Acompanhe pelo aplicativo Bolsa Família.",
    produtoRelacionado: "mini-guias"
  },
  "auxilio-maternidade": {
    nome: "Auxílio Maternidade (Salário-Maternidade)",
    descricao: "O Salário-Maternidade é um benefício pago às seguradas do INSS durante o período de licença maternidade, que pode ser de 120 dias (parto) ou 180 dias (em empresas do Programa Empresa Cidadã).",
    quemTemDireito: [
      "Trabalhadoras com carteira assinada",
      "Contribuintes individuais e facultativas (com carência de 10 meses)",
      "Seguradas especiais (trabalhadoras rurais)",
      "Desempregadas em período de graça (mantém qualidade de segurada)"
    ],
    documentosBasicos: [
      "Documento de identificação com foto",
      "CPF",
      "Certidão de nascimento ou natimorto da criança",
      "Atestado médico (em caso de aborto não criminoso)",
      "Termo de guarda (em caso de adoção)"
    ],
    comoSolicitar: "Para trabalhadoras CLT, o benefício é pago pela empresa. Para demais casos, solicite pelo Meu INSS (aplicativo ou site gov.br/meuinss). O pedido pode ser feito a partir de 28 dias antes do parto.",
    produtoRelacionado: "mini-guias"
  },
  "auxilio-doenca": {
    nome: "Auxílio-Doença",
    descricao: "O Auxílio-Doença é um benefício pago ao segurado do INSS que fica temporariamente incapaz de trabalhar por motivo de doença ou acidente por mais de 15 dias consecutivos.",
    quemTemDireito: [
      "Segurados do INSS incapacitados temporariamente para o trabalho",
      "Carência de 12 contribuições mensais (exceto em casos de acidente ou doenças graves)",
      "Qualidade de segurado mantida",
      "Incapacidade comprovada por perícia médica do INSS"
    ],
    documentosBasicos: [
      "Documento de identificação com foto",
      "CPF",
      "Atestados médicos, exames e laudos que comprovem a doença",
      "Carteira de trabalho ou carnês de contribuição",
      "Documentos que comprovem tratamento médico"
    ],
    comoSolicitar: "Solicite pelo Meu INSS (aplicativo ou site). Agende a perícia médica e compareça com todos os documentos médicos. Os primeiros 15 dias são pagos pelo empregador (se CLT), e a partir do 16º dia o INSS assume o pagamento se a perícia aprovar.",
    produtoRelacionado: "mini-guias"
  },
  "bpc-loas": {
    nome: "BPC/LOAS - Benefício de Prestação Continuada",
    descricao: "O BPC/LOAS é um benefício assistencial de um salário mínimo mensal pago a idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade, que comprovem não possuir meios de se sustentar.",
    quemTemDireito: [
      "Idosos com 65 anos ou mais",
      "Pessoas com deficiência de longo prazo (mínimo 2 anos)",
      "Renda familiar per capita inferior a 1/4 do salário mínimo",
      "Inscrição no Cadastro Único (CadÚnico)",
      "Não receber nenhum benefício previdenciário"
    ],
    documentosBasicos: [
      "Documento de identificação com foto",
      "CPF",
      "Comprovante de residência",
      "Documentos que comprovem a deficiência (laudos médicos, exames)",
      "Documentos de todos os membros da família (para cálculo de renda)"
    ],
    comoSolicitar: "Faça o cadastro no CadÚnico no CRAS do seu município. Depois, solicite o BPC pelo Meu INSS (aplicativo ou site). Será necessário passar por avaliação médica e social. O benefício não gera pensão por morte e deve ser revisado a cada 2 anos.",
    produtoRelacionado: "mini-guias"
  }
}

export default function HomePage() {
  const [step, setStep] = useState<"home" | "quiz" | "cadastro" | "login" | "dashboard" | "beneficio" | "chat" | "premium">("home")
  const [quizAtual, setQuizAtual] = useState(0)
  const [respostasQuiz, setRespostasQuiz] = useState<Record<number, string>>({})
  const [beneficioSelecionado, setBeneficioSelecionado] = useState<string>("")
  const [userData, setUserData] = useState<UserData>({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    genero: "",
    estado: "",
    cidade: "",
    dataNascimento: "",
    telefone: "",
    beneficioInteresse: "",
    situacaoAtual: "",
    processoAberto: "",
    numeroProtocolo: ""
  })
  const [chatMessages, setChatMessages] = useState<{role: string, content: string}[]>([])
  const [chatInput, setChatInput] = useState("")

  // Máscaras de formatação
  const formatCPF = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1")
  }

  const formatTelefone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1")
  }

  const formatData = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})\d+?$/, "$1")
  }

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("dashboard")
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("dashboard")
  }

  const getBeneficioInfo = (id: string) => {
    return beneficios.find(b => b.id === id) || beneficios[0]
  }

  const abrirBeneficio = (id: string) => {
    setBeneficioSelecionado(id)
    setStep("beneficio")
  }

  const enviarMensagemChat = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, 
        { role: "user", content: chatInput },
        { role: "assistant", content: "Olá! Sou a IA do Benefix. Estou aqui para ajudar com suas dúvidas sobre benefícios sociais. Como posso te ajudar hoje?" }
      ])
      setChatInput("")
    }
  }

  const proximaEtapaQuiz = (resposta: string) => {
    setRespostasQuiz({ ...respostasQuiz, [quizAtual]: resposta })
    
    if (quizAtual < quizSteps.length - 1) {
      setQuizAtual(quizAtual + 1)
    } else {
      // Quiz finalizado - preenche dados do usuário
      setUserData({
        ...userData,
        beneficioInteresse: respostasQuiz[0] || resposta,
        situacaoAtual: respostasQuiz[1] || "",
        processoAberto: respostasQuiz[2] || ""
      })
      setStep("cadastro")
    }
  }

  const voltarQuiz = () => {
    if (quizAtual > 0) {
      setQuizAtual(quizAtual - 1)
    } else {
      setStep("home")
    }
  }

  // Página de Quiz
  if (step === "quiz") {
    const etapaAtual = quizSteps[quizAtual]
    const progresso = ((quizAtual + 1) / quizSteps.length) * 100

    return (
      <div className="min-h-screen bg-[#0d0b24] text-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <Button
            variant="ghost"
            onClick={voltarQuiz}
            className="text-gray-400 hover:text-white mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-[#cfcfe1]">Pergunta {quizAtual + 1} de {quizSteps.length}</span>
              <span className="text-sm text-[#cfcfe1]">{Math.round(progresso)}%</span>
            </div>
            <div className="w-full h-2 bg-[#15132b] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] transition-all duration-500"
                style={{ width: `${progresso}%` }}
              />
            </div>
          </div>

          <Card className="bg-[#15132b] border-none shadow-2xl">
            <CardContent className="p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-tight">
                {etapaAtual.pergunta}
              </h2>

              <div className="space-y-4">
                {etapaAtual.opcoes.map((opcao) => (
                  <button
                    key={opcao.valor}
                    onClick={() => proximaEtapaQuiz(opcao.valor)}
                    className="w-full p-6 bg-[#0d0b24] border-2 border-[#26233f] rounded-2xl text-left hover:border-[#6b2cff] hover:bg-[#1a1833] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-lg font-medium group-hover:text-[#ff3ea5] transition-colors">
                        {opcao.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#cfcfe1] group-hover:text-[#ff3ea5] group-hover:translate-x-1 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Página de Detalhes do Benefício (página explicativa gratuita)
  if (step === "beneficio" && beneficioSelecionado) {
    const beneficioInfo = getBeneficioInfo(beneficioSelecionado)
    const detalhes = beneficiosDetalhes[beneficioSelecionado]
    const Icon = beneficioInfo.icon

    return (
      <div className="min-h-screen bg-[#0d0b24] text-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => setStep("dashboard")}
            className="text-gray-400 hover:text-white mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Voltar ao Dashboard
          </Button>

          <div className={`bg-gradient-to-r ${beneficioInfo.cor} rounded-3xl p-8 mb-8 shadow-2xl`}>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{detalhes.nome}</h1>
                <p className="text-white/90 text-lg">{beneficioInfo.descricao}</p>
              </div>
            </div>
          </div>

          <Card className="bg-[#15132b] border-none shadow-2xl mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-4">O que é?</h2>
              <p className="text-[#cfcfe1] leading-relaxed mb-8">
                {detalhes.descricao}
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Quem tem direito?</h2>
              <ul className="space-y-3 mb-8">
                {detalhes.quemTemDireito.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-[#cfcfe1]">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Documentos básicos necessários</h2>
              <ul className="space-y-3 mb-8">
                {detalhes.documentosBasicos.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-[#cfcfe1]">{doc}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">Como solicitar oficialmente</h2>
              <p className="text-[#cfcfe1] leading-relaxed">
                {detalhes.comoSolicitar}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-none shadow-2xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Crown className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Quer orientações mais detalhadas?</h3>
              </div>
              <p className="text-white/90 mb-6">
                Acesse nossos guias premium com passo a passo completo, modelos de documentos, dicas de especialistas e suporte prioritário.
              </p>
              <Button 
                onClick={() => setStep("premium")}
                className="w-full h-14 rounded-2xl bg-white text-[#6b2cff] hover:bg-gray-100 font-bold text-lg"
              >
                Ver Guias Premium
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Página de Chat IA
  if (step === "chat") {
    return (
      <div className="min-h-screen bg-[#0d0b24] text-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => setStep("dashboard")}
            className="text-gray-400 hover:text-white mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Voltar ao Dashboard
          </Button>

          <div className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] rounded-3xl p-8 mb-8 shadow-2xl">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Chat com IA</h1>
                <p className="text-white/90 text-lg">Pergunte sobre qualquer benefício social. O atendimento é automático.</p>
              </div>
            </div>
          </div>

          <Card className="bg-[#15132b] border-none shadow-2xl h-[600px] flex flex-col">
            <CardContent className="flex-1 p-6 overflow-y-auto space-y-4">
              {chatMessages.length === 0 ? (
                <div className="text-center py-20 text-[#cfcfe1]">
                  <MessageSquare className="w-16 h-16 mx-auto mb-4 text-gray-600" />
                  <p className="text-lg mb-2">Olá! Como posso ajudar?</p>
                  <p className="text-sm">Pergunte sobre qualquer benefício social</p>
                </div>
              ) : (
                chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-[#6b2cff] to-[#ff3ea5] text-white' 
                        : 'bg-[#1a1833] text-[#cfcfe1]'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
            <div className="p-6 border-t border-[#26233f]">
              <div className="flex gap-3">
                <Input
                  placeholder="Digite sua mensagem..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && enviarMensagemChat()}
                  className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500"
                />
                <Button 
                  onClick={enviarMensagemChat}
                  className="h-14 px-8 rounded-2xl bg-gradient-to-r from-[#6b2cff] to-[#ff3ea5] hover:opacity-90"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Página Premium
  if (step === "premium") {
    return (
      <div className="min-h-screen bg-[#0d0b24] text-white">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => setStep("dashboard")}
            className="text-gray-400 hover:text-white mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Voltar ao Dashboard
          </Button>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b2cff]/10 to-[#ff3ea5]/10 border border-[#6b2cff]/20 rounded-full px-6 py-3 mb-8">
              <Crown className="w-5 h-5 text-[#ff3ea5]" />
              <span className="text-sm font-semibold text-gray-200">Produtos Premium</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
                Escolha Seu Plano
              </span>
            </h1>
            
            <p className="text-2xl text-[#cfcfe1] max-w-3xl mx-auto">
              Desbloqueie recursos avançados e tenha suporte prioritário
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {/* Plano Premium Mensal */}
            <Card className="bg-gradient-to-br from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-none shadow-2xl hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Plano Premium</h3>
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
                <Button className="w-full bg-white text-[#6b2cff] hover:bg-gray-100 font-bold">
                  Assinar Premium
                </Button>
              </CardContent>
            </Card>

            {/* Guia INSS */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Guia INSS</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 12,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">pagamento único</p>
                <p className="text-[#cfcfe1] text-sm mb-6">
                  Guia completo sobre aposentadorias, auxílios e benefícios do INSS.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white font-bold">
                  Comprar Guia
                </Button>
              </CardContent>
            </Card>

            {/* Guia FGTS */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Guia FGTS</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 9,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">pagamento único</p>
                <p className="text-[#cfcfe1] text-sm mb-6">
                  Tudo sobre saques, modalidades e como consultar seu FGTS.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white font-bold">
                  Comprar Guia
                </Button>
              </CardContent>
            </Card>

            {/* Mini-Guias */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Mini-Guias</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 4,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">cada guia</p>
                <p className="text-[#cfcfe1] text-sm mb-6">
                  Guias rápidos e objetivos sobre benefícios específicos.
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:opacity-90 text-white font-bold">
                  Ver Mini-Guias
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Página de Login
  if (step === "login") {
    return (
      <div className="min-h-screen bg-[#0d0b24] py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-md">
          <Card className="bg-[#15132b] border-none shadow-2xl">
            <CardHeader className="space-y-6 pb-10">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6b2cff] to-[#ff3ea5] rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                <User className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-4xl text-center text-white font-bold">Entrar</CardTitle>
              <CardDescription className="text-center text-lg text-[#cfcfe1]">
                Acesse sua conta do Benefix
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="email-login" className="text-white font-semibold text-base">E-mail</Label>
                  <Input
                    id="email-login"
                    type="email"
                    placeholder="seu@email.com"
                    value={userData.email}
                    onChange={(e) => setUserData({...userData, email: e.target.value})}
                    className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="senha-login" className="text-white font-semibold text-base">Senha</Label>
                  <Input
                    id="senha-login"
                    type="password"
                    placeholder="Sua senha"
                    value={userData.senha}
                    onChange={(e) => setUserData({...userData, senha: e.target.value})}
                    className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                    required
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 h-14 rounded-2xl bg-transparent border-[#26233f] text-white hover:bg-[#1a1833] text-base font-semibold"
                    onClick={() => setStep("home")}
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-14 rounded-2xl bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] hover:opacity-90 text-white font-bold text-base shadow-xl"
                  >
                    Entrar
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setStep("cadastro")}
                    className="text-[#ff3ea5] hover:text-[#ff3ea5]/80 font-semibold"
                  >
                    Não tem conta? Cadastre-se
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Página de Cadastro
  if (step === "cadastro") {
    return (
      <div className="min-h-screen bg-[#0d0b24] py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-[#15132b] border-none shadow-2xl">
            <CardHeader className="space-y-6 pb-10">
              <div className="w-24 h-24 bg-gradient-to-br from-[#6b2cff] to-[#ff3ea5] rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <User className="w-12 h-12 text-white" />
              </div>
              <CardTitle className="text-4xl sm:text-5xl text-center text-white font-bold">
                Crie sua Conta
              </CardTitle>
              <CardDescription className="text-center text-lg sm:text-xl text-[#cfcfe1] max-w-2xl mx-auto leading-relaxed">
                Complete seu cadastro para ver seu resultado personalizado
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 sm:px-10">
              <form onSubmit={handleCadastro} className="space-y-8">
                {/* Dados Pessoais */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white border-b border-[#26233f] pb-3">Dados Pessoais</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="nome" className="text-white font-semibold text-base flex items-center gap-2">
                        <User className="w-4 h-4 text-[#ff3ea5]" />
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        placeholder="Digite seu nome completo"
                        value={userData.nome}
                        onChange={(e) => setUserData({...userData, nome: e.target.value})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="cpf" className="text-white font-semibold text-base flex items-center gap-2">
                        <FileCheck className="w-4 h-4 text-[#ff3ea5]" />
                        CPF *
                      </Label>
                      <Input
                        id="cpf"
                        placeholder="000.000.000-00"
                        value={userData.cpf}
                        onChange={(e) => setUserData({...userData, cpf: formatCPF(e.target.value)})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        maxLength={14}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-white font-semibold text-base flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#ff3ea5]" />
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="senha" className="text-white font-semibold text-base flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-[#ff3ea5]" />
                        Criar Senha *
                      </Label>
                      <Input
                        id="senha"
                        type="password"
                        placeholder="Mínimo 6 caracteres"
                        value={userData.senha}
                        onChange={(e) => setUserData({...userData, senha: e.target.value})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        required
                        minLength={6}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <Label className="text-white font-semibold text-base">Gênero *</Label>
                      <Select value={userData.genero} onValueChange={(value) => setUserData({...userData, genero: value})}>
                        <SelectTrigger className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#15132b] border-[#26233f]">
                          <SelectItem value="masculino" className="text-white">Masculino</SelectItem>
                          <SelectItem value="feminino" className="text-white">Feminino</SelectItem>
                          <SelectItem value="outro" className="text-white">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="dataNascimento" className="text-white font-semibold text-base flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#ff3ea5]" />
                        Data de Nascimento *
                      </Label>
                      <Input
                        id="dataNascimento"
                        placeholder="DD/MM/AAAA"
                        value={userData.dataNascimento}
                        onChange={(e) => setUserData({...userData, dataNascimento: formatData(e.target.value)})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        maxLength={10}
                        required
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="telefone" className="text-white font-semibold text-base flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#ff3ea5]" />
                        Telefone
                      </Label>
                      <Input
                        id="telefone"
                        placeholder="(00) 00000-0000"
                        value={userData.telefone}
                        onChange={(e) => setUserData({...userData, telefone: formatTelefone(e.target.value)})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        maxLength={15}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-white font-semibold text-base flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#ff3ea5]" />
                        Estado *
                      </Label>
                      <Select value={userData.estado} onValueChange={(value) => setUserData({...userData, estado: value})}>
                        <SelectTrigger className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white">
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#15132b] border-[#26233f] max-h-60">
                          {estadosBrasil.map(estado => (
                            <SelectItem key={estado} value={estado} className="text-white">{estado}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="cidade" className="text-white font-semibold text-base">Cidade *</Label>
                      <Input
                        id="cidade"
                        placeholder="Digite sua cidade"
                        value={userData.cidade}
                        onChange={(e) => setUserData({...userData, cidade: e.target.value})}
                        className="h-14 rounded-2xl bg-[#0d0b24] border-[#26233f] text-white placeholder:text-gray-500 text-base"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Termos */}
                <div className="flex items-start gap-4 p-6 border-2 border-[#26233f] rounded-2xl bg-[#0d0b24]">
                  <input type="checkbox" required className="w-5 h-5 mt-1 accent-[#6b2cff]" />
                  <Label className="text-[#cfcfe1] text-sm leading-relaxed cursor-pointer">
                    Aceito os termos de uso e política de privacidade do Benefix.
                  </Label>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 h-16 rounded-2xl bg-transparent border-2 border-[#26233f] text-white hover:bg-[#1a1833] text-lg font-semibold"
                    onClick={() => setStep("home")}
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 h-16 rounded-2xl bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] hover:opacity-90 text-white font-bold text-lg shadow-2xl"
                  >
                    Criar Conta Grátis
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="button"
                    onClick={() => setStep("login")}
                    className="text-[#ff3ea5] hover:text-[#ff3ea5]/80 font-semibold text-base"
                  >
                    Já tem conta? Faça login
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Dashboard do Usuário
  if (step === "dashboard") {
    const beneficioNome = userData.beneficioInteresse 
      ? beneficios.find(b => b.id === userData.beneficioInteresse)?.nome 
      : "Não selecionado"

    return (
      <div className="min-h-screen bg-[#0d0b24] pb-24">
        {/* Header fixo com nome Benefix */}
        <div className="bg-[#15132b] border-b border-[#26233f] sticky top-0 z-40">
          <div className="container mx-auto px-4 py-4 max-w-7xl">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
              Benefix
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Olá, {userData.nome.split(' ')[0] || "Usuário"}! 👋
            </h2>
            <p className="text-[#cfcfe1] text-lg">
              Benefício de interesse: <span className="text-white font-semibold">{beneficioNome}</span>
            </p>
          </div>

          {/* Cards de Ações Rápidas */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <Card className="bg-[#15132b] border-none shadow-lg hover:shadow-[0_0_30px_rgba(107,44,255,0.2)] transition-all cursor-pointer" onClick={() => setStep("chat")}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="w-10 h-10 text-blue-400" />
                  <ArrowRight className="w-5 h-5 text-[#cfcfe1]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Chat com IA</h3>
                <p className="text-sm text-[#cfcfe1]">Tire suas dúvidas sobre benefícios</p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-none shadow-lg hover:shadow-[0_0_30px_rgba(107,44,255,0.2)] transition-all cursor-pointer" onClick={() => setStep("premium")}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Crown className="w-10 h-10 text-yellow-400" />
                  <ArrowRight className="w-5 h-5 text-[#cfcfe1]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Ver Premium</h3>
                <p className="text-sm text-[#cfcfe1]">Recursos avançados e guias completos</p>
              </CardContent>
            </Card>

            <Card className="bg-[#15132b] border-none shadow-lg hover:shadow-[0_0_30px_rgba(107,44,255,0.2)] transition-all cursor-pointer" onClick={() => setStep("home")}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Shield className="w-10 h-10 text-green-400" />
                  <ArrowRight className="w-5 h-5 text-[#cfcfe1]" />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">Ver Benefícios</h3>
                <p className="text-sm text-[#cfcfe1]">Explore todos os benefícios disponíveis</p>
              </CardContent>
            </Card>
          </div>

          {/* Alertas Genéricos Oficiais */}
          <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-none shadow-2xl mb-10">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Info className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <AlertCircle className="w-6 h-6" />
                    Orientações Importantes
                  </h3>
                  <ul className="space-y-3 text-white/95">
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">📱</span>
                      <span><strong>FGTS:</strong> Consulte seu saldo no aplicativo oficial FGTS.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">🏦</span>
                      <span><strong>PIS/PASEP:</strong> Verifique seu direito no site do Banco do Brasil ou Caixa.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">🔐</span>
                      <span><strong>INSS:</strong> Acompanhe benefícios pelo portal Meu INSS (gov.br/meuinss).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-white mt-1">📋</span>
                      <span><strong>Use o Benefix</strong> para organizar documentos e acompanhar processos.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grid de Benefícios */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-6">Acesso Rápido aos Benefícios</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((beneficio) => {
                const Icon = beneficio.icon
                return (
                  <Card 
                    key={beneficio.id}
                    onClick={() => abrirBeneficio(beneficio.id)}
                    className="bg-[#15132b] border-none hover:shadow-[0_0_30px_rgba(107,44,255,0.2)] transition-all cursor-pointer group hover:scale-105"
                  >
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 bg-gradient-to-br ${beneficio.cor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white mb-2">{beneficio.nome}</h3>
                      <p className="text-xs text-[#cfcfe1]">{beneficio.descricao}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Seção de Pendências (estrutura vazia) */}
          <Card className="bg-[#15132b] border-none shadow-lg mb-10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Suas Pendências</h3>
              <p className="text-[#cfcfe1] text-center py-8">
                Você ainda não registrou nenhuma pendência. Use o Benefix para organizar seus processos e documentos.
              </p>
            </CardContent>
          </Card>

          {/* Botão para Guias Premium */}
          <Card className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-none shadow-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Acesse os Guias Premium</h3>
                  <p className="text-white/90">
                    Orientações completas, modelos de documentos e suporte prioritário
                  </p>
                </div>
                <Button 
                  onClick={() => setStep("premium")}
                  className="bg-white text-[#6b2cff] hover:bg-gray-100 font-bold px-8 py-6 text-lg rounded-2xl"
                >
                  Ver Guias
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Navegação Inferior Fixa */}
          <div className="fixed bottom-0 left-0 right-0 bg-[#15132b]/95 backdrop-blur-lg border-t border-[#26233f] shadow-2xl z-50">
            <div className="container mx-auto px-4 max-w-7xl">
              <div className="flex items-center justify-around py-4">
                <button
                  onClick={() => setStep("dashboard")}
                  className="flex flex-col items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#6b2cff]/10 to-[#ff3ea5]/10 text-[#ff3ea5]"
                >
                  <Home className="w-7 h-7" />
                  <span className="text-xs font-semibold">Início</span>
                </button>

                <button
                  onClick={() => setStep("chat")}
                  className="flex flex-col items-center gap-2 px-6 py-3 rounded-2xl text-[#cfcfe1] hover:text-white transition-all"
                >
                  <MessageSquare className="w-7 h-7" />
                  <span className="text-xs font-semibold">Chat IA</span>
                </button>

                <button
                  onClick={() => setStep("premium")}
                  className="flex flex-col items-center gap-2 px-6 py-3 rounded-2xl text-[#cfcfe1] hover:text-white transition-all"
                >
                  <Crown className="w-7 h-7" />
                  <span className="text-xs font-semibold">Premium</span>
                </button>

                <button
                  onClick={() => setStep("home")}
                  className="flex flex-col items-center gap-2 px-6 py-3 rounded-2xl text-[#cfcfe1] hover:text-white transition-all"
                >
                  <Settings className="w-7 h-7" />
                  <span className="text-xs font-semibold">Sair</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Página Home
  return (
    <div className="min-h-screen bg-[#0d0b24] text-white">
      {/* Header fixo com nome Benefix */}
      <div className="bg-[#15132b] border-b border-[#26233f] sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
            Benefix
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-20 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20 sm:mb-28">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b2cff]/10 to-[#ff3ea5]/10 border border-[#6b2cff]/20 rounded-full px-6 py-3 mb-8 animate-pulse">
            <Star className="w-5 h-5 text-[#ff3ea5]" />
            <span className="text-sm font-semibold text-gray-200">100% Gratuito • Sem Burocracia</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
              Seus Benefícios
            </span>
            <br />
            <span className="text-white">Organizados e Claros</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#cfcfe1] mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubra seus direitos, organize documentos e acompanhe processos — tudo em um só lugar
          </p>

          <Button 
            size="lg"
            className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] hover:opacity-90 text-white font-bold px-16 py-8 text-xl rounded-3xl shadow-2xl hover:shadow-[0_0_60px_rgba(107,44,255,0.5)] transition-all duration-300 hover:scale-105"
            onClick={() => setStep("quiz")}
          >
            Começar Agora — É Grátis
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>

          <p className="text-sm text-[#cfcfe1] mt-6">
            ✓ Sem cartão de crédito • ✓ Cadastro em 2 minutos
          </p>
        </div>

        {/* Por que usar o Benefix */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
              Por que usar o Benefix?
            </span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#6b2cff] to-[#ff3ea5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Simples e Direto</h3>
              <p className="text-[#cfcfe1] leading-relaxed">Sem juridiquês. Explicações claras que você entende.</p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#ff3ea5] to-[#3fa9ff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <ClipboardList className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">Tudo Organizado</h3>
              <p className="text-[#cfcfe1] leading-relaxed">Documentos, prazos e processos em um só lugar.</p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3fa9ff] to-[#6b2cff] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-white mb-3 text-xl">IA que Ajuda</h3>
              <p className="text-[#cfcfe1] leading-relaxed">Chat inteligente para tirar suas dúvidas na hora.</p>
            </div>
          </div>
        </div>

        {/* Sessão de Benefícios Reduzida */}
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
              Principais Benefícios
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {beneficios.slice(0, 4).map((beneficio) => {
              const Icon = beneficio.icon
              return (
                <Card 
                  key={beneficio.id}
                  onClick={() => abrirBeneficio(beneficio.id)}
                  className="bg-[#15132b] border-none hover:shadow-[0_0_30px_rgba(107,44,255,0.2)] transition-all cursor-pointer group hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${beneficio.cor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{beneficio.nome}</h3>
                    <p className="text-xs text-[#cfcfe1]">{beneficio.descricao}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Sessão Premium com Preços Corrigidos */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6b2cff]/10 to-[#ff3ea5]/10 border border-[#6b2cff]/20 rounded-full px-6 py-3 mb-6">
              <Package className="w-5 h-5 text-[#ff3ea5]" />
              <span className="text-sm font-semibold text-gray-200">Conteúdos Premium</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
                Guias Completos
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Plano Premium */}
            <Card className="bg-gradient-to-br from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-none shadow-2xl hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                  <Crown className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Premium</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 14,90</p>
                <p className="text-white/80 text-sm mb-4">/mês</p>
                <p className="text-white/90 text-sm mb-4">
                  Acesso completo a todos os recursos
                </p>
                <Button className="w-full bg-white text-[#6b2cff] hover:bg-gray-100 font-bold">
                  Assinar
                </Button>
              </CardContent>
            </Card>

            {/* Guia INSS */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Guia INSS</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 12,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">único</p>
                <p className="text-[#cfcfe1] text-sm mb-4">
                  Tudo sobre aposentadorias
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white font-bold">
                  Comprar
                </Button>
              </CardContent>
            </Card>

            {/* Guia FGTS */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Guia FGTS</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 9,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">único</p>
                <p className="text-[#cfcfe1] text-sm mb-4">
                  Todos os tipos de saque
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white font-bold">
                  Comprar
                </Button>
              </CardContent>
            </Card>

            {/* Mini-Guias */}
            <Card className="bg-[#15132b] border-[#26233f] shadow-lg hover:scale-105 transition-all">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-2">Mini-Guias</h3>
                <p className="text-3xl font-bold text-white mb-1">R$ 4,90</p>
                <p className="text-[#cfcfe1] text-sm mb-4">cada</p>
                <p className="text-[#cfcfe1] text-sm mb-4">
                  Guias rápidos e objetivos
                </p>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:opacity-90 text-white font-bold">
                  Ver Guias
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Simplificado */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] bg-clip-text text-transparent">
              Perguntas Frequentes
            </span>
          </h2>
          <div className="space-y-4">
            <Card className="bg-[#15132b] border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-2">O Benefix é realmente gratuito?</h3>
                <p className="text-[#cfcfe1]">Sim! O acesso básico é 100% gratuito. Você pode consultar informações sobre todos os benefícios sem pagar nada.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#15132b] border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-2">O que são os guias premium?</h3>
                <p className="text-[#cfcfe1]">São materiais completos com passo a passo detalhado, modelos de documentos e orientações avançadas para cada benefício.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#15132b] border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-2">O Benefix solicita benefícios por mim?</h3>
                <p className="text-[#cfcfe1]">Não. O Benefix é uma ferramenta de organização e informação. As solicitações oficiais devem ser feitas nos canais do governo.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-[#6b2cff] via-[#ff3ea5] to-[#3fa9ff] border-0 shadow-2xl">
            <CardContent className="p-10 sm:p-16">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Pronto para Começar?
                  </h2>
                  <p className="text-white/90 text-lg sm:text-xl mb-8">
                    Cadastre-se gratuitamente e organize seus benefícios agora
                  </p>
                  <Button 
                    size="lg"
                    className="bg-white text-[#6b2cff] hover:bg-gray-100 font-bold px-12 py-7 text-lg rounded-2xl shadow-xl hover:scale-105 transition-all"
                    onClick={() => setStep("quiz")}
                  >
                    Criar Conta Grátis
                  </Button>
                </div>
                <div className="w-40 h-40 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                  <Wallet className="w-20 h-20 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Rodapé */}
        <div className="border-t border-[#26233f] pt-8 text-center">
          <p className="text-[#cfcfe1] text-sm">
            © 2024 Benefix. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
