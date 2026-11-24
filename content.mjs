export const areas = [
  { slug:'sites', icon:'monitor', title:'Sites estratégicos', desc:'Arquitetura de conteúdo, navegação e experiência mobile.', body:['Parto das dúvidas que a pessoa traz ao chegar à página. Organizo a navegação e o conteúdo para que ela consiga entender o contexto, encontrar a informação e decidir como seguir.','Depois da implementação, verifico a experiência em telas menores e acompanho os caminhos mais usados.'], points:['Hierarquia e clareza das informações','Desempenho e navegação mobile','Eventos de navegação e contato'] },
  { slug:'landing-pages', icon:'browser', title:'Landing pages', desc:'Páginas de destino alinhadas à mensagem e à intenção da visita.', body:['Mapeio a promessa do anúncio e a expectativa de quem vai clicar. Essas duas informações orientam o texto de abertura, as evidências e o próximo passo.','Avalio a qualidade da interação após o clique e uso os sinais do formulário para priorizar ajustes.'], points:['Continuidade entre anúncio e página','Clareza da ação principal','Inícios e conclusões do formulário'] },
  { slug:'trafego-pago', icon:'megaphone', title:'Tráfego pago', desc:'Planejamento, gestão e otimização de mídia paga em diferentes plataformas.', body:['Tenho experiência prática com Meta Ads, Google Ads, GPT Ads, iFood Ads e 99Ads. Escolho os canais conforme o público, o objetivo e o que é possível medir em cada etapa.','Defino o objetivo e o evento de conversão antes de estruturar campanhas. Agrupo mensagens e públicos para que a leitura dos resultados ajude a responder uma pergunta por vez.','Na análise, relaciono custo e volume aos sinais de qualidade disponíveis depois da conversão.'], points:['Estrutura de campanha e hipóteses','Custo por ação e qualidade','Desempenho por mensagem e público'] },
  { slug:'estrategia-digital', icon:'layers', title:'Estratégia digital', desc:'Diagnóstico, priorização e mensuração ao longo da jornada.', body:['Mapeio os pontos de contato e os dados já disponíveis para localizar as lacunas que mais afetam uma decisão.','Registro cada hipótese com um indicador e um critério de revisão. Esse histórico ajuda a interpretar mudanças e orientar o próximo ciclo.'], points:['Mapa da jornada','Qualidade dos dados','Prioridade e critérios de revisão'] }
];
export const projects = [
  {slug:'conceito-negocio-local', category:'Sites', type:'Projeto conceitual', brand:'Estúdio Vale Cedral', title:'Presença digital para negócio local', desc:'Estrutura de site institucional, hierarquia de conteúdo e caminho de contato.', image:'projeto-negocio-local.jpg', body:[
    ['Desafio','Uma pessoa que chega pelo celular precisa entender rapidamente a área atendida, os horários e as formas de contato. O exercício parte dessa jornada.'],
    ['Decisões de estrutura','Organizei a página em apresentação, informações essenciais e contato. O menu separa as tarefas principais e o CTA aparece após o contexto necessário para a decisão.'],
    ['Como avaliaria','Observaria a frequência de acesso às informações essenciais e a proporção de visitantes que alcançam o caminho de contato. Este exercício não tem dados de produção.']
  ]},
  {slug:'conceito-aquisicao-digital', category:'Tráfego pago', type:'Projeto conceitual', brand:'Ponte Miravale', title:'Estratégia de aquisição digital', desc:'Modelo que conecta campanha, página de destino e mensuração de oportunidades.', image:'projeto-aquisicao.jpg', body:[
    ['Desafio','Projetar uma jornada que permita distinguir volume de visitas, conclusão do formulário e relevância dos contatos.'],
    ['Decisões de campanha','Organizei os anúncios por intenção, com uma mensagem específica por grupo. A página de destino preserva essa mensagem e pede somente os dados necessários para avançar.'],
    ['Mensuração proposta','O plano registra visualização, início, erro e conclusão do formulário. A avaliação final depende da qualidade observada após a conversão. Esta é uma demonstração sem resultados de cliente.']
  ]}
];
export const posts = [
  {slug:'campanhas-meta-ads',category:'Mídia paga',title:'Como estruturar campanhas no Meta Ads',desc:'Critérios para organizar objetivos, públicos e hipóteses criativas.',image:'blog-meta-ads.jpg',body:[
    ['Comece pela ação que importa','Descreva a ação que caracteriza avanço na jornada e verifique como ela é medida. Para um formulário, por exemplo, acompanhe sua conclusão e registre a qualidade do contato em uma etapa posterior.'],
    ['Organize hipóteses que possam ser lidas','Defina o que você quer aprender com cada grupo de anúncios. Testar uma mensagem específica ajuda a atribuir diferenças observadas ao conteúdo que mudou, desde que público, objetivo e condições de veiculação sejam comparáveis.'],
    ['Use sinais de etapas diferentes','Clique e conversão respondem a perguntas diferentes. Se há cliques e poucas conclusões, confira a coerência da mensagem, a experiência no celular e os eventos do formulário antes de fazer novas alterações.']
  ]},
  {slug:'site-que-converte',category:'Experiência web',title:'Site que converte: 5 elementos essenciais',desc:'O que ajuda uma página a apresentar uma proposta e orientar o próximo passo.',image:'blog-experiencia-web.jpg',body:[
    ['Mensagem clara','Na abertura, responda o que a pessoa encontra e por que isso tem relação com a busca que a trouxe ali. Use palavras familiares ao público.'],
    ['Ação principal visível','Dê destaque à ação esperada e nomeie o que vai acontecer ao clicar. Preserve o acesso ao longo da leitura quando houver mais de um ponto natural de decisão.'],
    ['Evidência contextual','Inclua documentação, demonstrações ou resultados verificáveis perto das afirmações que eles sustentam. Explique o contexto de cada exemplo.'],
    ['Experiência no celular','Teste os caminhos principais com uma tela pequena e uma conexão mais lenta. Confira a leitura, a área de toque e a progressão do formulário com o teclado aberto.'],
    ['Mensuração do caminho','Acompanhe eventos que expliquem o progresso. Por exemplo, compare visitas, inícios e conclusões de formulário para decidir onde investigar primeiro.']
  ]},
  {slug:'demanda-qualificada',category:'Performance',title:'Tráfego pago e demanda qualificada',desc:'Como relacionar custo por contato a sinais do que acontece depois da conversão.',image:'blog-demanda.jpg',body:[
    ['Defina qualidade antes de comparar','Descreva quais características indicam que um contato é relevante. Onde houver dados suficientes, considere o avanço para a próxima etapa e o tempo até a resposta.'],
    ['Vincule ações a origens','Registre campanha e página de entrada junto aos eventos. Compare os contatos que compartilham o mesmo critério de qualificação, em períodos que tenham tempo suficiente para a avaliação.'],
    ['Dê espaço para a leitura','Use volume, custo e qualidade em conjunto. Se os contatos são poucos, registre a direção observada e reavalie quando houver informação suficiente para decidir.']
  ]},
{
    "slug": "funil-estrategico-crm",
    "category": "Growth e CRM",
    "title": "Funil estratégico e CRM: do clique ao cliente",
    "desc": "Como conectar origem, etapas do pipeline e qualidade dos leads para orientar a mídia.",
    "image": "blog-demanda.jpg",
    "body": [
      [
        "Desenhe as etapas antes de configurar o CRM",
        "Mapeie o caminho da primeira interação até o fechamento. Defina o que precisa acontecer para um contato passar de novo lead para lead qualificado e quando uma negociação deve ser aberta. No HubSpot ou em outro CRM, documente responsáveis e critérios de passagem."
      ],
      [
        "Registre a origem sem perder o histórico",
        "Padronize UTMs na mídia e guarde a origem no CRM quando o contato entrar. Separe os campos de aquisição dos campos operacionais: o estágio pode mudar várias vezes, enquanto o canal de origem ajuda a entender como o lead chegou."
      ],
      [
        "Compare volume com avanço no funil",
        "Calcule a taxa de qualificação e o custo por oportunidade por canal. Exemplo simulado: 100 leads e 20 oportunidades a R$ 2.000 significam 20% de avanço e R$ 100 por oportunidade. Use uma janela que dê tempo para as etapas acontecerem."
      ],
      [
        "Use o CRM para orientar o próximo teste",
        "Se há muitos contatos e poucas oportunidades, compare os motivos de descarte e o tempo de resposta. Ajuste primeiro o ponto com mais evidência: público, formulário, oferta ou abordagem comercial. Registre a hipótese e a data em que será reavaliada."
      ]
    ]
  },
  {
    "slug": "auditoria-gestao-trafego",
    "category": "Mídia paga",
    "title": "Auditoria de tráfego pago: o que revisar antes de escalar",
    "desc": "Um roteiro de análise para revisar mensuração, orçamento e qualidade das conversões.",
    "image": "blog-meta-ads.jpg",
    "body": [
      [
        "Valide os eventos e o objetivo",
        "Liste as ações usadas para otimizar a campanha e verifique se elas correspondem ao objetivo do negócio. Faça uma conversão de teste e confira se o evento dispara na etapa correta, com os parâmetros esperados e sem duplicidade."
      ],
      [
        "Leia investimento e resultado na mesma janela",
        "Compare orçamento, gasto, conversões, CPA e qualidade com períodos equivalentes. Em vendas, confronte o ROAS com descontos, devoluções e margem. Em geração de leads, olhe o avanço no CRM antes de concluir que o menor CPL é o melhor resultado."
      ],
      [
        "Encontre o ponto que limita a campanha",
        "Segmente a leitura por canal, criativo e página. Uma taxa de clique baixa aponta para perguntas diferentes de uma taxa de conversão baixa depois do clique. Registre o que mudou na conta para evitar atribuir a variação ao fator errado."
      ],
      [
        "Feche com plano de ação",
        "Defina responsável, hipótese, mudança e indicador. Combine a próxima data de revisão e documente o que será mantido se o teste não tiver volume suficiente para uma decisão."
      ]
    ]
  },
  {
    "slug": "rotina-head-operacional",
    "category": "Operações",
    "title": "Como estruturar a rotina de um Head Operacional",
    "desc": "Priorização, capacidade, qualidade de entrega e comunicação com clientes em um mesmo fluxo.",
    "image": "blog-experiencia-web.jpg",
    "body": [
      [
        "Dê uma porta de entrada às demandas",
        "Use um formulário ou uma lista única no ClickUp. Cada demanda precisa descrever objetivo, responsável, prazo, contexto e critério de aceite. Antes de assumir o prazo, confira dependências e disponibilidade do time."
      ],
      [
        "Separe calendário, documentação e execução",
        "Use o Google Agenda para reuniões e marcos, o Google Workspace para documentos e decisões, e o ClickUp para tarefas e aprovações. Registre o próximo responsável quando uma entrega passa de uma pessoa para outra."
      ],
      [
        "Acompanhe qualidade e capacidade",
        "Revise o trabalho em andamento, tarefas bloqueadas e entregas atrasadas. Acompanhe retrabalho e gargalos por etapa. Quando uma área está no limite, negocie prioridades em vez de acumular entregas com o mesmo prazo."
      ],
      [
        "Transforme recorrência em processo",
        "Documente passos e verificações de uma rotina antes de automatizá-la. Para começar com n8n, experimente uma notificação simples em ambiente de teste e mantenha uma alternativa manual. Ao executar IA localmente, avalie qualidade, consumo de recursos e acesso aos dados antes de usar resultados em produção."
      ]
    ]
  },
  {
    "slug": "cardapio-digital-delivery",
    "category": "Delivery",
    "title": "Cardápio digital para iFood, 99Food e Keeta",
    "desc": "Como estruturar produtos, adicionais e disponibilidade para manter o cardápio pronto para operar.",
    "image": "projeto-negocio-local.jpg",
    "body": [
      [
        "Comece pelo que a cozinha consegue entregar",
        "Confirme horários, itens disponíveis e capacidade antes de montar as categorias. Separe pratos principais, combos e bebidas de um jeito que faça sentido para quem pede pelo celular."
      ],
      [
        "Padronize produtos e adicionais",
        "Prepare uma ficha com nome, descrição objetiva, preço, foto, variações e adicionais. Especifique o que acompanha o produto e confira se as escolhas obrigatórias fazem sentido no fluxo do pedido."
      ],
      [
        "Revise cada plataforma",
        "Cadastre e revise o cardápio no iFood, 99Food e Keeta de acordo com os recursos disponíveis no painel de cada operação. Verifique preço, disponibilidade e a ordem de exibição. Confira a versão que o cliente vê antes de divulgar."
      ],
      [
        "Meça e mantenha o cardápio",
        "Acompanhe pedidos, ticket e disponibilidade por item. Atualize produtos fora de estoque rapidamente e compare alterações com o histórico antes de mudar preço ou destacar um combo."
      ]
    ]
  }
];

export const questions = [
  ['Quais são minhas áreas de atuação?','Atuo em sites, landing pages, tráfego pago e estratégia digital, com foco na relação entre aquisição e mensuração.'],
  ['Como organizo um projeto?','Começo pelo diagnóstico, defino a hipótese e a forma de medir, implemento e documento o que os dados mostram.'],
  ['O que são os projetos conceituais?','São demonstrações que explicam decisões de estrutura, mídia e mensuração em cenários ilustrativos.'],
  ['Sobre o que escrevo?','Escrevo sobre campanhas, experiência web e leitura dos dados de marketing.']
];

export const professionalSkills = [
  {icon:'megaphone', title:'Mídia paga multiplataforma', desc:'Planejamento, gestão e otimização de campanhas em Meta Ads, Google Ads, GPT Ads, iFood Ads e 99Ads.', href:'/servicos/trafego-pago/'},
  {icon:'layers', title:'Processos e automação com IA', desc:'Criação e melhoria de fluxos internos, com ClickUp, Google Workspace e automação com IA para reduzir tarefas manuais. Tenho conhecimento básico de n8n.'},
  {icon:'target', title:'Liderança de marketing', desc:'Coordenação de equipes, definição de prioridades, acompanhamento de entregas e participação em contratações.'},
  {icon:'bolt', title:'Relacionamento com clientes', desc:'Onboarding, gestão de contas e Customer Success, com acompanhamento de resultados, alinhamento de expectativas e retenção.'},
  {icon:'bars', title:'Mensuração e conversão', desc:'Implementação de tags com GTM, análise de funis e testes A/B para orientar decisões de mídia e conversão.'},
  {icon:'monitor', title:'Experiência web', desc:'Criação de sites responsivos, landing pages e cardápios digitais com foco na jornada do usuário.', href:'/servicos/sites/'}
];

export const portfolioWebsites = [
  {title:'Mr. Hoppy', category:'Gastronomia', url:'https://mrhoppy.com.br'},
  {title:'Loja Disko', category:'Comércio eletrônico', url:'https://www.lojadisko.com.br'},
  {title:'HD Lubrificantes', category:'Indústria e logística', url:'https://hdlubrificantes.com.br'},
  {title:'Renov Administradora', category:'Serviços', url:'https://renovadm.com'},
  {title:'Renov Portaria', category:'Serviços', url:'https://renovportaria.com.br/home/'},
  {title:'Marques Araújo', category:'Serviços', url:'https://marquesaraujo.adv.br'},
  {title:'BPower Motorsport', category:'Automotivo', url:'https://bpowermotorsport.com.br'},
  {title:'HD Express', category:'Indústria e logística', url:'https://hdexpress.com.br'},
  {title:'Patrick Ribeiro', category:'Serviços', url:'https://patrickribeiro.com.br'},
  {title:'Gráfica Cartex', category:'Indústria e logística', url:'https://graficacartex.com.br'},
  {title:'Vivazhen Veterinária', category:'Saúde animal', url:'https://vivazhenveterinaria.com.br'}
];

export const portfolioWork = [
  {icon:'megaphone', title:'Mídia paga', desc:'Planejamento, gestão e análise de campanhas de aquisição, com acompanhamento de leads e conversões.'},
  {icon:'bolt', title:'Automação com IA', desc:'Aplicações de IA para apoiar rotinas de trabalho, com execução local de ferramentas e noções básicas de n8n.'},
  {icon:'browser', title:'Conteúdo e produção', desc:'Trabalhos em social media, design, cardápios digitais e edição de vídeo para peças de conteúdo e infoprodutos.'}
];

export const mediaCases = [
  {
    slug:'midia-geracao-de-leads', category:'Serviços B2B', title:'Geração de leads B2B',
    desc:'Comparação entre captação em busca e em redes sociais, com foco em leads qualificados.',
    conversion:'Leads', quality:'Leads qualificados', budget:6000, period:'30 dias',
    rows:[
      {channel:'Google Ads · Busca', spend:3500, clicks:1600, conversions:130, qualified:52},
      {channel:'Meta Ads · Prospecção', spend:2500, clicks:2200, conversions:120, qualified:30}
    ],
    challenge:'Como distribuir o orçamento quando uma plataforma gera contatos mais baratos, mas a outra entrega mais oportunidades qualificadas?',
    method:'Separar as campanhas de busca e prospecção, registrar as origens com UTMs e combinar conversões do site com os critérios de qualificação do CRM.',
    decision:'Neste cenário, a busca concentra mais leads qualificados e tem menor custo por qualificado. O próximo teste seria mover parte do orçamento para termos de alta intenção e revisar a segmentação de prospecção.'
  },
  {
    slug:'midia-ecommerce', category:'Comércio eletrônico', title:'Aquisição para e-commerce',
    desc:'Leitura de compras e receita para comparar prospecção e remarketing.',
    conversion:'Compras', budget:8500, period:'30 dias',
    rows:[
      {channel:'Google Ads · Shopping', spend:5000, clicks:3900, conversions:125, revenue:16500},
      {channel:'Meta Ads · Remarketing', spend:3500, clicks:2700, conversions:90, revenue:11250}
    ],
    challenge:'Como avaliar a qualidade do investimento quando os canais participam de etapas diferentes da jornada de compra?',
    method:'Acompanhar compras e receita atribuídas a cada canal, adotar uma janela de análise comum e usar uma base deduplicada antes de consolidar os números.',
    decision:'Neste cenário, Shopping traz mais volume e um ROAS ligeiramente maior. Manteria o remarketing em teste e avaliaria margem por categoria e sobreposição antes de aumentar investimento.'
  },
  {
    slug:'midia-gastronomia', category:'Gastronomia', title:'Mídia para delivery',
    desc:'Comparação do custo por pedido e do retorno sobre mídia em plataformas de delivery.',
    conversion:'Pedidos', budget:3200, period:'30 dias',
    rows:[
      {channel:'iFood Ads', spend:2000, clicks:1600, conversions:125, revenue:6125},
      {channel:'99Ads', spend:1200, clicks:1100, conversions:75, revenue:3375}
    ],
    challenge:'Como priorizar canais e horários para um delivery com capacidade de atendimento variável ao longo da semana?',
    method:'Acompanhar pedidos, custo e receita em cada plataforma. Cruzar resultados por horário com disponibilidade do cardápio, capacidade de atendimento e ticket médio.',
    decision:'Os dois canais têm o mesmo custo por pedido neste cenário. Antes de redistribuir orçamento, compararia taxas das plataformas e margem por horário para entender o retorno líquido.'
  }
];

export const portfolioBrands = [
  {
    "title": "RE/MAX Brasil",
    "category": "Mercado imobiliário",
    "url": "https://www.remax.com.br/",
    "mark": "canva-remax.png"
  },
  {
    "title": "Boteco em Casa",
    "category": "Gastronomia",
    "url": "https://botecoemcasa.com.br/",
    "mark": "marca-boteco.png"
  },
  {
    "title": "Lavblue",
    "category": "Serviços",
    "url": "https://www.lavblue.com.br/",
    "mark": "marca-lavblue.png"
  },
  {
    "title": "Instituto Chiavenato",
    "category": "Educação",
    "url": "https://chiavenato.com/pt/",
    "mark": "marca-chiavenato.png"
  },
  {
    "title": "Casa Matarazzo Pizzaria",
    "category": "Gastronomia",
    "url": "https://www.instagram.com/casamatarazzo_pizzaria/",
    "mark": "canva-casa-matarazzo.png"
  },
  {
    "title": "FH Motos",
    "category": "Automotivo",
    "url": "https://www.fhmotos.com.br/empresa",
    "mark": "marca-fh.png"
  },
  {
    "title": "Freedom Sports",
    "category": "Esporte",
    "url": "https://www.usefreedomsports.com.br/",
    "mark": "marca-freedom.png"
  },
  {
    "title": "Biomist",
    "category": "Comércio e varejo",
    "url": "https://www.biomist.com.br/",
    "mark": "marca-biomist.png"
  },
  {
    "title": "Bubble Box",
    "category": "Serviços",
    "url": "https://bubblebox.com.br/",
    "mark": "marca-bubble.png"
  },
  {
    "title": "ALC Foods",
    "category": "Gastronomia",
    "url": "https://www.instagram.com/alcfoods/",
    "mark": "canva-alcfoods.png"
  },
  {
    "title": "MegaIP Connect",
    "category": "Telecomunicações",
    "url": "https://megaipconnect.com.br/",
    "mark": "canva-megaip.png"
  },
  {
    "title": "Artsolda",
    "category": "Indústria e logística",
    "url": "https://artsolda.com.br/contatos.asp",
    "mark": "marca-artsolda.png"
  },
  {
    "title": "Indústrias RC",
    "category": "Indústria e logística",
    "url": "https://www.industriasrc.com.br/",
    "mark": "marca-industrias.svg"
  },
  {
    "title": "Vivazhen Veterinária",
    "category": "Saúde animal",
    "url": "https://vivazhenveterinaria.com.br",
    "mark": "canva-vivazhen.png"
  },
  {
    "title": "Mr. Hoppy",
    "category": "Gastronomia",
    "url": "https://mrhoppy.com.br",
    "mark": "marca-mister.png"
  },
  {
    "title": "Loja Disko",
    "category": "Comércio eletrônico",
    "url": "https://www.lojadisko.com.br",
    "mark": "marca-disko.svg"
  },
  {
    "title": "HD Lubrificantes",
    "category": "Indústria e logística",
    "url": "https://hdlubrificantes.com.br",
    "mark": "marca-hdlub.jpg"
  },
  {
    "title": "Renov Administradora",
    "category": "Serviços",
    "url": "https://renovadm.com",
    "mark": "marca-renov.png"
  },
  {
    "title": "Renov Portaria",
    "category": "Serviços",
    "url": "https://renovportaria.com.br/home/",
    "mark": "marca-portaria.png"
  },
  {
    "title": "Marques Araújo",
    "category": "Serviços",
    "url": "https://marquesaraujo.adv.br",
    "mark": "marca-marques.png"
  },
  {
    "title": "BPower Motorsport",
    "category": "Automotivo",
    "url": "https://bpowermotorsport.com.br",
    "mark": "marca-bpower.png"
  },
  {
    "title": "HD Express",
    "category": "Indústria e logística",
    "url": "https://hdexpress.com.br",
    "mark": "marca-hdexpress.png"
  },
  {
    "title": "Gráfica Cartex",
    "category": "Indústria e logística",
    "url": "https://graficacartex.com.br",
    "mark": "marca-cartex.png"
  }
];

export const portfolioAccounts = [
  ['Althearin Cristais','Comércio e varejo'],
  ['Soraya Frignani Advogados','Serviços'],
  ['Lig Lig Restaurante Chinês','Gastronomia',true,'marca-lig.png'],
  ['Farmarcas','Comércio e varejo',false,'marca-farmarcas.jpg'],
  ['Lopes','Mercado imobiliário',false,'marca-lopes.png'],
  ['Old Ways Barbearia','Serviços'],
  ['LATAM Viagens','Viagens',false,'marca-latam.png'],
  ['Onivino','Comércio eletrônico',false,'marca-onivino.png'],
  ['MF Carnes','Gastronomia'],
  ['Pastéis LM','Gastronomia',true,'canva-pasteis-lm.png'],
  ['Ju Folheados','Comércio e varejo',false,'marca-ju.png'],
  ['VSCloset','Comércio e varejo'],
  ['Empório Coisas de Minas','Gastronomia',false,'marca-emporio.png'],
  ['Nataluz · ElevenTickets','Eventos'],
  ['Oktoberfest · ElevenTickets','Eventos'],
  ['Thomas Case','Recrutamento e seleção',false,'marca-thomas.png']
];

export const fictionalScenarios = [
  {
    sector:'Restaurantes e delivery', caseSlug:'midia-gastronomia', tone:'copper',
    brands:['Forno Cedrim','Panela Vilaré','Massa Sete Folhas','Bistrô Sazoni','Brasa Campo Nove'],
    caseTitle:'Do cardápio à operação de mídia',
    result:'200 pedidos no cenário · R$ 16 por pedido',
    summary:'O exercício combina revisão do cardápio digital, campanhas por horário e comparação de custo por pedido entre canais.',
    quote:'O painel do exercício me mostrou quais horários mereciam um teste antes de ampliar o orçamento.',
    speaker:'Clara Vilar · Gestão do Forno Cedrim'
  },
  {
    sector:'E-commerce e varejo', caseSlug:'midia-ecommerce', tone:'plum',
    brands:['Vitrine Avelumi','Casa Miralto','Trama Lunária','Ateliê Ponto Violeta','Loja Senda Norte'],
    caseTitle:'Aquisição por categoria de produto',
    result:'215 compras no cenário · ROAS de 3,26×',
    summary:'O cenário usa dados simulados de Shopping e remarketing para priorizar categorias conforme margem e receita atribuída.',
    quote:'O exemplo tornou mais fácil discutir quais categorias testar primeiro e por quê.',
    speaker:'Mateus Lira · Coordenação de Vitrine Avelumi'
  },
  {
    sector:'Serviços B2B', caseSlug:'midia-geracao-de-leads', tone:'blue',
    brands:['Nexorla Operações','Ponte Valeo','Rota Ímpar Consultoria','Oficina Sétima Linha','Rede Córvia Serviços'],
    caseTitle:'Análise de qualidade dos leads',
    result:'250 leads no cenário · 82 qualificados',
    summary:'O exercício conecta a origem da conversão a dados de qualificação do CRM para comparar canais além do custo por cadastro.',
    quote:'A comparação ajudou a visualizar a diferença entre volume de cadastros e oportunidades para o comercial.',
    speaker:'Renata Sá · Operações da Nexorla'
  }
];

export const careerRoles = [
  [
    "Analista de Mídia",
    "Analiso campanhas, conversões e etapas do funil para orientar testes e decisões de investimento."
  ],
  [
    "Gestor de Tráfego Pago",
    "Planejo, opero e otimizo campanhas de mídia paga para geração de leads, vendas e pedidos."
  ],
  [
    "Growth Marketing",
    "Formulo hipóteses e acompanho testes de aquisição e conversão para identificar oportunidades de crescimento."
  ],
  [
    "Estrategista Digital",
    "Conecto objetivos de negócio, canais, jornada do cliente e indicadores em um plano de atuação."
  ],
  [
    "Head de Performance Marketing",
    "Coordenei equipes e entregas, organizei prioridades e participei de contratações."
  ],
  [
    "Account Manager · Gestão de Contas",
    "Acompanho a carteira, alinho expectativas e apresento resultados e próximos passos aos clientes."
  ],
  [
    "Customer Success (CS) · Sucesso do Cliente",
    "Conduzo onboarding, acompanho a evolução do cliente e apoio a retenção."
  ],
  [
    "Operações de Marketing e Automação",
    "Estruturo processos, uso IA em rotinas de trabalho e tenho conhecimento básico de n8n."
  ],
  [
    "Web Designer · Desenvolvimento de Sites",
    "Desenvolvo sites responsivos, landing pages e cardápios digitais com foco na jornada e na conversão."
  ]
];

export const operatingKnowledge = [
  [
    "Gestão de tráfego pago",
    "Planejamento por objetivo e canal, orçamento e ritmo de gasto, públicos, criativos, palavras-chave, testes, CPA, ROAS e análise de resultados."
  ],
  [
    "Mensuração e qualidade do dado",
    "Plano de eventos, UTMs, GTM, GA4, checagem de conversões e leitura das diferenças entre plataforma, site e CRM."
  ],
  [
    "Funil estratégico e Growth",
    "Aquisição, ativação, qualificação, fechamento e retenção. Definição de hipóteses, experimentos e métricas para cada etapa."
  ],
  [
    "HubSpot e outros CRMs",
    "Conhecimento de pipelines, etapas do ciclo de vida, critérios de passagem, origem de leads e acompanhamento da qualidade das oportunidades."
  ],
  [
    "Operação e liderança",
    "Priorização, capacidade, distribuição de tarefas, prazos, aprovações, documentação, gestão de riscos e acompanhamento de entregas."
  ],
  [
    "Account Management e Customer Success",
    "Onboarding, alinhamento de metas, gestão de expectativas, acompanhamento de contas e retenção."
  ],
  [
    "ClickUp, Google Workspace e Google Agenda",
    "Organização de tarefas, documentos, planilhas, reuniões, aprovações e cadência do time."
  ],
  [
    "n8n e IA local",
    "Conhecimento básico de n8n para fluxos simples e prática de execução de ferramentas e modelos de IA no próprio computador."
  ]
];
