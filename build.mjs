import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { areas, projects, posts, questions, professionalSkills, portfolioWebsites, portfolioWork, mediaCases, portfolioBrands, portfolioAccounts, fictionalScenarios, careerRoles, operatingKnowledge } from './content.mjs';

const out = resolve(process.argv[2] || '.');
const base = (process.env.SITE_URL || '').replace(/\/$/, '');
if (base && !/^https:\/\/[a-z0-9.-]+$/i.test(base)) throw new Error('SITE_URL deve ser a origem HTTPS.');
const read = path => readFile(new URL(path, import.meta.url), 'utf8');
const iconSource = await read('./icons.json');
const icons = JSON.parse(iconSource);
const navigation = [['/', 'Início'], ['/sobre/', 'Sobre'], ['/servicos/', 'Atuação'], ['/portfolio/', 'Projetos'], ['/conteudos/', 'Blog'], ['/contato/', 'Contato']];
const img = (name, alt = '', hero = false) => `<img src="/assets/img/${name}" alt="${alt}" ${hero ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
const logo = `<a href="/" class="brand" aria-label="Vinicius Araújo, início">${img('logo-va.svg','',true)}</a>`;
const label = text => `<p class="label">${text}</p>`;
const button = (url, text, kind = '') => `<a class="button ${kind}" href="${url}">${text}</a>`;
const section = (body, cls = '', id = '') => `<section ${id ? `id="${id}"` : ''} class="section ${cls}"><div class="wrap">${body}</div></section>`;
const heading = (tag, title, lead = '') => `${label(tag)}<h2>${title}</h2>${lead ? `<p>${lead}</p>` : ''}`;
const pageHero = (tag, title, lead) => `<section class="page-hero"><div class="wrap">${label(tag)}<h1>${title}</h1><p>${lead}</p></div></section>`;
const route = (group, item) => `/${group}/${item.slug}/`;
const card = (group, item) => `<a class="card media" href="${route(group,item)}" data-category="${item.category}">${img(item.image)}<div>${item.brand ? `<div class="brand-card-head">${brandIdentity(item.brand)}<small>${item.brand} · ${item.type}</small></div>` : `<small>${item.type || item.category}</small>`}<h3>${item.title}</h3><p>${item.desc}</p></div></a>`;
const areaCards = () => `<div class="grid four">${areas.map((a,i) => `<a href="${route('servicos',a)}" class="card area ${i===1?'featured':''}">${icons[a.icon]}<h3>${a.title}</h3><p>${a.desc}</p><span aria-hidden="true">→</span></a>`).join('')}</div>`;
const approach = () => section(`<div class="split"><div>${heading('Metodologia','Do diagnóstico à <em>otimização.</em>')}</div><ol class="grid four steps">${[['Diagnóstico','Entendo o contexto e defino o problema.'],['Estratégia','Priorizo hipóteses e escolho indicadores.'],['Execução','Implemento a solução e verifico a mensuração.'],['Otimização','Analiso os sinais e documento os próximos passos.']].map(([t,d],i)=>`<li class="card"><h3><span>${String(i+1).padStart(2,'0')}</span>${t}</h3><p>${d}</p></li>`).join('')}</ol></div>`, 'lined');
const contact = () => section(`<div class="contact-panel"><div>${heading('Contato','Conexões <em>profissionais.</em>','Use este espaço para trocar ideias sobre marketing digital, comentar um conteúdo ou conversar sobre trajetória profissional.')}<div data-channels></div></div>
<form id="contact-form" action="/enviar.php" method="post" data-contact><fieldset disabled><div class="form-grid">
<label>Nome<input name="name" autocomplete="name" maxlength="100" required></label>
<label>E-mail<input name="email" type="email" autocomplete="email" maxlength="254" required></label>
<label>Celular com DDD <small>(opcional)</small><input type="tel" name="phone" autocomplete="tel-national" maxlength="22"></label>
<label>Assunto<select name="subject" required><option value="">Selecione</option><option>Networking</option><option>Conteúdo do portfólio</option><option>Trajetória profissional</option><option>Outro assunto</option></select></label>
</div><label>Mensagem<textarea name="message" rows="4" minlength="10" maxlength="3000" required></textarea></label>
<div class="trap" aria-hidden="true"><label>Website<input name="website" tabindex="-1" autocomplete="off"></label></div>
<input type="hidden" name="token"><p class="form-note">Ao enviar, seus dados serão usados para responder à mensagem. <a href="/privacidade/">Política de privacidade</a></p>
<button class="button" type="submit">Enviar mensagem</button></fieldset><p data-status role="status">O envio de mensagens está indisponível nesta prévia.</p></form></div>`, '', 'contato');
const about = () => section(`<div class="center">${heading('Sobre mim','Quem é <em>Vinicius Araújo?</em>','Atuo em marketing e performance digital. Conecto planejamento, execução e análise para entender o que acontece entre o primeiro clique e a conversão.')}${button('/sobre/','Conheça minha atuação','ghost')}</div><div class="grid three traits">${[['target','Estratégia','Objetivos e hipóteses antes de escolher canais.'],['bolt','Execução','Planejamento traduzido em campanhas e páginas.'],['bars','Análise','Indicadores para avaliar o que pode melhorar.']].map(([i,t,d])=>`<div>${icons[i]}<div><h3>${t}</h3><p>${d}</p></div></div>`).join('')}</div>`, 'about', 'sobre');
const projectCards = projects.map(p=>card('portfolio',p)).join('');
const postCards = posts.slice(-3).map(p=>card('conteudos',p)).join('');
const home = `
<div class="opening"><section class="hero" id="inicio"><div class="wrap hero-grid"><div class="hero-copy">${label('Especialista em gestão de tráfego e análise de mídia')}<h1><span>Estratégia digital</span> <span>com foco em <em>crescimento.</em></span></h1><p class="hero-lead">Atuo com gestão de tráfego e análise de mídia. Também desenvolvo sites e landing pages para conectar campanhas à experiência de conversão.</p><div class="actions">${button('/portfolio/','Ver projetos')}${button('/sobre/','Sobre mim','ghost')}</div></div><div class="hero-art"><img src="/assets/img/retrato-hero-integrado.png" alt="Retrato de Vinicius Araújo" width="960" height="546" fetchpriority="high"></div></div></section>
<div class="wrap proof">${[['bars','Planejamento','Objetivos e prioridades'],['target','Mídia paga','Aquisição digital'],['layers','Experiência web','Sites e landing pages'],['bolt','Mensuração','Análise e aprendizado']].map(([i,t,d])=>`<div>${icons[i]}<span><strong>${t}</strong><br>${d}</span></div>`).join('')}</div></div>
${section(`<div class="section-head"><div>${heading('Áreas de atuação','Estratégia e performance <em>na prática.</em>')}</div><p>Minha atuação reúne mídia paga, desenvolvimento web e mensuração ao longo da jornada.</p></div>${areaCards()}`, '', 'servicos')}
${about()}
${approach()}
${section(`<div class="split"><div>${heading('Projetos','Projetos e <em>estudos de caso.</em>','Veja demonstrações de análise de mídia e trabalhos de presença digital.')}${button('/portfolio/','Ver todos os projetos','ghost')}</div><div class="grid two">${mediaCases.slice(0,2).map(mediaCard).join('')}</div></div>`, 'lined', 'portfolio')}
${section(`<div class="split"><div>${heading('Blog','Conteúdos sobre <em>marketing digital.</em>','Artigos sobre campanhas, páginas e análise de desempenho.')}${button('/conteudos/','Ver todos os artigos','ghost')}</div><div class="carousel" data-carousel><div class="carousel-track" tabindex="0" aria-label="Artigos">${postCards}</div><div class="carousel-controls" role="group" aria-label="Posições do carrossel" hidden><button type="button" aria-label="Ir para posição 1" aria-current="true">1</button><button type="button" aria-label="Ir para posição 2" aria-current="false">2</button></div></div></div>`, 'lined')}
${section(`<div class="split"><div>${heading('Perguntas frequentes','Sobre este <em>portfólio.</em>')}</div><div class="faq">${questions.map(([q,a],i)=>`<details ${i===0?'open':''} name="faq"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div>`, 'lined')}
${contact()}`;

const listing = (group, items) => section(`<div data-listing data-page-size="3"><div class="filters">${group==='conteudos' ? '<label>Buscar artigos<input type="search" data-search placeholder="Ex.: tráfego pago"></label>':''}<label>Categoria<select data-filter><option value="">Todas</option>${[...new Set(items.map(i=>i.category))].map(c=>`<option>${c}</option>`).join('')}</select></label></div><div class="grid ${group==='portfolio'?'two':'three'}">${items.map(i=>card(group,i)).join('')}</div><p data-empty hidden>Nenhum item encontrado.</p><div class="pagination" data-pagination></div></div>`);
const pages = new Map();
const add = (path,title,desc,html,article) => pages.set(path,{title,desc,html,article});
add('/', 'Marketing & Performance Digital','Portfólio profissional de Vinicius Araújo, com áreas de atuação, projetos selecionados e artigos sobre marketing digital.',home);
const skills = professionalSkills.map(({icon,title,desc,href}) => {
  const content = `${icons[icon]}<h3>${title}</h3><p>${desc}</p>`;
  return href ? `<a class="card area" href="${href}">${content}</a>` : `<article class="card area">${content}</article>`;
}).join('');
const careerRolesSection = section(heading('Funções e frentes de atuação','Onde aplico <em>minha experiência.</em>','Funções que já exerci e responsabilidades que fizeram parte da minha trajetória.')+`
  <div class="grid three career-roles">${careerRoles.map(([title,desc])=>`<article class="card"><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>`,'lined about-section','funcoes');
const operatingSection = section(heading('Competências e ferramentas','Da aquisição à <em>operação.</em>','Meu repertório reúne gestão de tráfego, funil estratégico, relacionamento e liderança operacional.')+`
  <div class="grid three">${operatingKnowledge.map(([title,desc])=>`<article class="card"><h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>`,'lined about-section','ferramentas');
const sectors = ['B2B e B2C','Gastronomia','Comércio eletrônico','Clínicas','Indústria','Mercado imobiliário','Infoprodutos'];
add('/sobre/','Sobre','Trajetória de Vinicius Araújo em mídia paga, Growth Marketing, estratégia digital, liderança, gestão de contas e Customer Success.',`
<section class="page-hero about-intro"><div class="wrap">${label('Sobre mim')}<h1>Marketing, performance e <em>operações.</em></h1><p>Sou Vinicius Araújo, especialista em gestão de tráfego e análise de mídia. Uso dados de campanhas, funis e canais para orientar decisões de investimento. Minha experiência em liderança também me ensinou a organizar equipes, estruturar processos e acompanhar de perto a jornada dos clientes.</p><div class="actions">${button('/portfolio/','Explorar projetos','ghost')}<span class="about-linkedin" data-social></span></div></div></section>
${section(`<div class="split"><div>${heading('Trajetória profissional','Campanhas, equipes e <em>processos.</em>')}</div><div class="career-copy"><p>Comecei no marketing digital desenvolvendo páginas, criando campanhas e acompanhando a geração de leads. Passei pela gestão de tráfego pago e ampliei minha atuação para testes, mensuração de conversões e análise da jornada depois do clique.</p><p>Como Head de Performance Marketing, coordenei equipes, acompanhei a carteira de clientes e participei de contratações. Estruturei fluxos de trabalho e apliquei IA para reduzir etapas manuais. Também atuei no onboarding, na gestão de contas e no acompanhamento do cliente após a entrada.</p><p>Hoje atuo como analista de mídia, com foco em geração de leads e conversão. Analiso métricas e etapas do funil para decidir o que testar, onde ajustar campanhas e como priorizar o investimento.</p></div></div>`, 'lined about-section')}
${careerRolesSection}
${operatingSection}
${section(heading('Competências','O que aplico <em>no trabalho.</em>')+`<div class="grid three">${skills}</div>`,'about-section')}
${section(`<div class="split"><div>${heading('Experiência por setor','Diferentes modelos <em>de negócio.</em>')}</div><div><p>Já trabalhei com operações B2B e B2C, com destaque para e-commerce e negócios de gastronomia. Também atuei com clínicas, indústrias e mercado imobiliário, e participei da produção de infoprodutos.</p><ul class="sector-list">${sectors.map(sector=>`<li>${sector}</li>`).join('')}</ul></div></div>`,'lined about-section')}
${approach()}
`);
add('/servicos/','Áreas de atuação','Conheça as áreas de atuação de Vinicius Araújo em sites, landing pages, mídia paga e estratégia digital.',pageHero('Áreas de atuação','Da aquisição à <em>experiência digital.</em>','Como abordo sites, landing pages, mídia paga e estratégias de mensuração.')+section(areaCards())+approach());
for(const item of areas) add(route('servicos',item),item.title,item.desc,pageHero('Áreas de atuação',item.title,item.desc)+section(`<div class="narrow"><h2>Minha abordagem</h2>${item.body.map(p=>`<p>${p}</p>`).join('')}<h2>O que acompanho</h2><ul>${item.points.map(p=>`<li>${p}</li>`).join('')}</ul>${button('/portfolio/','Explorar projetos','ghost')}</div>`,'lined'));
const fictionalClients = fictionalScenarios.flatMap(group=>group.brands.map((title,index)=>({title,category:group.sector,tone:group.tone,index,demo:true})));
function brandIdentity(title,mark,tone,index) {
  if (mark) return `<img class="directory-mark" src="/assets/img/${mark}" width="64" height="64" loading="lazy" alt="">`;
  const words = title.match(/[\p{L}\p{N}]+/gu);
  const glyph = words.length>1 ? words.slice(0,2).map(word=>word[0]).join('') : words[0].slice(0,2);
  const seed = Array.from(title).reduce((value,char)=>(value*31+char.codePointAt(0))>>>0,0);
  const color = tone || ['copper','plum','blue','mint','rose','sand'][seed%6];
  return `<span class="fictional-mark" data-tone="${color}" data-variant="${index ?? seed%5}" aria-hidden="true">${glyph.toUpperCase()}</span>`;
}
function mediaCard(item) {
  const group = fictionalScenarios.find(group=>group.caseSlug===item.slug);
  return `<a class="card media-case documented-card" href="${route('portfolio',item)}"><div class="brand-card-head">${brandIdentity(group.brands[0],null,group.tone,0)}<small>Estudo de campanha</small></div><strong class="result-number">${group.result}</strong><h3>${group.brands[0]} · ${item.title}</h3><p>${item.desc}</p><span aria-hidden="true">Ver case →</span></a>`;
}
const mediaPortfolio = section(heading('Mídia paga','Resultados de <em>campanha.</em>','Cases conceituais para demonstrar minha abordagem de análise, mensuração e otimização. Os indicadores desta seção são ilustrativos.')+`
  <div class="grid three">${mediaCases.map(mediaCard).join('')}</div>`,'about-section');
const sectorGroups = {
  'Gastronomia':'Gastronomia e alimentação',
  'Restaurantes e delivery':'Gastronomia e alimentação',
  'E-commerce e varejo':'Varejo e consumo',
  'Comércio e varejo':'Varejo e consumo',
  'Comércio eletrônico':'Varejo e consumo',
  'Esporte':'Varejo e consumo',
  'Saúde animal':'Varejo e consumo',
  'Indústria e logística':'Indústria, logística e automotivo',
  'Automotivo':'Indústria, logística e automotivo'
};
const sectorGroup = category => sectorGroups[category] || 'Serviços, imóveis e eventos';
const realBrands = [
  ...portfolioBrands,
  ...portfolioAccounts.map(([title,category,menu,mark])=>({title,category,menu,mark}))
];
const trafficBrands = [...realBrands,...fictionalClients];
const brandCards = trafficBrands.map(({title,category,mark,menu,demo,tone,index})=>{
  const badge = brandIdentity(title,mark,tone,index);
  return `<article class="card catalog-card brand-card" data-category="${sectorGroup(category)}">
    ${badge}<h3>${title}</h3><small>${category}</small>
    ${demo ? '<p class="simulated">Estudo conceitual</p>' : menu ? '<p>Cardápios digitais para delivery</p>' : '<p>Marca da carteira</p>'}
  </article>`;
}).join('');
const brandDirectory = section(heading('Gestão de tráfego','Carteira e <em>marcas demonstrativas.</em>','Busque o nome ou filtre por nicho. Os cartões incluem marcas da carteira e estudos conceituais.')+`
  <div class="catalog" data-listing data-page-size="8">
    <div class="filters">
      <label>Buscar marca<input type="search" data-search placeholder="Nome da marca"></label>
      <label>Setor<select data-filter aria-label="Setor das marcas"><option value="">Todos os setores</option>${[...new Set(trafficBrands.map(brand=>sectorGroup(brand.category)))].sort((a,b)=>a.localeCompare(b,'pt-BR')).map(category=>`<option>${category}</option>`).join('')}</select></label>
    </div>
    <div class="grid brand-directory">${brandCards}</div>
    <p data-empty role="status" hidden>Nenhuma marca encontrada.</p>
    <div class="pagination" data-pagination role="group" aria-label="Páginas das marcas"></div>
  </div>`,'lined about-section');
const currency = new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
const count = new Intl.NumberFormat('pt-BR');
const decimal = new Intl.NumberFormat('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
for (const item of mediaCases) {
  const group = fictionalScenarios.find(group=>group.caseSlug===item.slug);
  const spend = item.rows.reduce((sum,row)=>sum+row.spend,0);
  const conversions = item.rows.reduce((sum,row)=>sum+row.conversions,0);
  const extraKey = item.quality ? 'qualified' : 'revenue';
  const extra = item.rows.reduce((sum,row)=>sum+row[extraKey],0);
  const extraHeading = item.quality || 'Receita atribuída';
  const extraFormat = item.quality ? count : currency;
  const extraMetric = item.quality ? ['Custo por lead qualificado',currency.format(spend/extra)] : ['ROAS',decimal.format(extra/spend)+'×'];
  const metrics = [['Investimento',currency.format(spend)],[item.conversion,count.format(conversions)],['Custo por conversão',currency.format(spend/conversions)],extraMetric];
  const path = route('portfolio',item);
  const columns = ['Canal','Investimento (BRL)','Cliques',item.conversion,'Custo por conversão (BRL)',extraHeading];
  const csv = [columns.join(';'),...item.rows.map(row=>[row.channel,row.spend,row.clicks,row.conversions,(row.spend/row.conversions).toFixed(2).replace('.',','),row[extraKey]].join(';'))].join('\r\n');
  const csvDir = resolve(out,'.'+path);
  await mkdir(csvDir,{recursive:true});
  await writeFile(resolve(csvDir,'campanhas-simuladas.csv'),'\uFEFF'+csv+'\r\n');
  add(path,item.title,item.desc,pageHero('Estudo conceitual · Mídia paga',group.brands[0]+' · '+item.title,item.desc)+section(`
    <article class="narrow">
      <div class="brand-card-head">${brandIdentity(group.brands[0],null,group.tone,0)}<strong>${group.brands[0]}</strong></div><p class="simulated">Dados ilustrativos · ${item.period} · orçamento previsto de ${currency.format(item.budget)}</p>
      <h2>Desafio</h2><p>${item.challenge}</p>
      <h2>Plano de mensuração</h2><p>${item.method}</p>
      <h2>Painel ilustrativo</h2>
      <dl class="metrics">${metrics.map(([title,value])=>`<div><dt>${title}</dt><dd>${value}</dd></div>`).join('')}</dl>
      <div class="campaign-table" tabindex="0" role="region" aria-label="Tabela de resultados ilustrativos">
        <table><caption>Desempenho ilustrativo por canal</caption><thead><tr>${columns.map(column=>`<th scope="col">${column}</th>`).join('')}</tr></thead>
        <tbody>${item.rows.map(row=>`<tr><th scope="row">${row.channel}</th><td>${currency.format(row.spend)}</td><td>${count.format(row.clicks)}</td><td>${count.format(row.conversions)}</td><td>${currency.format(row.spend/row.conversions)}</td><td>${extraFormat.format(row[extraKey])}</td></tr>`).join('')}</tbody></table>
      </div>
      <a class="button ghost" href="${path}campanhas-simuladas.csv" download>Baixar dados ilustrativos (CSV)</a>
      <h2>Leitura e próximo teste</h2><p>${item.decision}</p>
      ${button('/portfolio/','Ver todos os projetos','ghost')}
    </article>`,'lined'));
}
const oportunisaLink = '<a class="button ghost" href="https://oportunisa.com/" target="_blank" rel="noopener noreferrer">Visitar Oportunisa ↗</a>';
const oportunisaSpotlight = `<article class="card portfolio-spotlight">
  <img class="directory-mark" src="/assets/img/marca-oportunisa.png" alt="" width="64" height="64">
  <div>${label('Projeto desenvolvido por mim')}<h3>Oportunisa</h3><p>Portal independente de vagas, concursos e conteúdo de carreira para São Paulo, ABC e trabalho remoto.</p>
  <div class="spotlight-actions">${button('/portfolio/oportunisa/','Ver projeto')}${oportunisaLink}</div></div>
</article>`;
add('/portfolio/oportunisa/','Oportunisa','Projeto web de Vinicius Araújo para facilitar a descoberta de vagas, concursos e conteúdo de carreira.',pageHero('Projeto web','Oportunisa','Desenvolvi um portal independente para reunir vagas, concursos e orientações de carreira em uma experiência de busca e navegação.')+section(`
  <article class="narrow">
    <h2>O problema</h2><p>Quem procura emprego ou concurso costuma consultar vários canais para encontrar as informações básicas e chegar à fonte certa.</p>
    <h2>O que desenvolvi</h2><p>Organizei o portal em vagas, concursos e guias de carreira. A busca parte de cargo, empresa ou palavra-chave, e as listagens dão destaque a localidade, modalidade e informações para conferir na fonte oficial.</p>
    <h2>Como a experiência funciona</h2><p>O público pode explorar oportunidades em São Paulo, no ABC e em trabalho remoto. As páginas encaminham as pessoas ao canal responsável pela candidatura.</p>
    <div class="spotlight-actions">${oportunisaLink}${button('/portfolio/','Todos os projetos','ghost')}</div>
  </article>`,'lined'));
const menuPortfolio = section(heading('Gastronomia','Cardápios digitais para <em>delivery.</em>','Criei os cardápios digitais da maioria dos clientes de delivery apresentados no portfólio. Trabalho com cadastro de produtos, fotos, categorias, adicionais, preços e disponibilidade no iFood, 99Food e Keeta.')+`
  <ul class="sector-list" aria-label="Plataformas de delivery"><li>iFood</li><li>99Food</li><li>Keeta</li></ul>`,'lined about-section');
const fictionalPortfolio = section(heading('Laboratório de demonstração','Marcas e <em>estudos conceituais.</em>','Identidades de marca e cenários de campanha para mostrar como aplico minha metodologia. Os resultados e as falas são ilustrativos.')+`
  <div class="grid three">${fictionalScenarios.map(({sector,tone,brands,caseTitle,result,summary,quote,speaker})=>`
    <article class="card fictional-sector" data-tone="${tone}">
      <h3>${sector}</h3>
      <ul class="fictional-logos" aria-label="Marcas dos estudos conceituais">${brands.map((name,index)=>`
        <li>${brandIdentity(name,null,tone,index)}<span>${name}</span></li>`).join('')}</ul>
      <h4>${caseTitle}</h4><p class="simulated">${result}</p><p>${summary}</p>
      <figure class="fictional-review"><figcaption>Perspectiva do cenário</figcaption><blockquote>“${quote}”</blockquote><div class="brand-card-head">${brandIdentity(brands[0],null,tone,0)}<small>${speaker}</small></div></figure>
    </article>`).join('')}</div>`,'lined about-section');
const websitePortfolio = section(`
  ${heading('Experiência web','Sites em <em>destaque.</em>','Trabalhos de presença digital reunidos no meu portfólio. Cada cartão abre o endereço do projeto em uma nova aba.')}
  ${oportunisaSpotlight}<div class="catalog" data-listing data-page-size="6">
    <div class="filters">
      <label>Buscar projeto<input type="search" data-search placeholder="Nome ou endereço"></label>
      <label>Setor<select data-filter aria-label="Setor"><option value="">Todos os setores</option>${[...new Set(portfolioWebsites.map(item=>item.category))].map(category=>`<option>${category}</option>`).join('')}</select></label>
    </div>
    <div class="grid three">
      ${portfolioWebsites.map(({title,category,url})=>`<a class="card catalog-card" data-category="${category}" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${title}, abrir site em nova aba"><div class="brand-card-head">${brandIdentity(title,portfolioBrands.find(brand=>brand.title===title)?.mark)}<div><small>${category}</small><h3>${title}</h3></div></div><span class="catalog-domain">${new URL(url).hostname.replace(/^www\./,'')}</span><span class="catalog-action" aria-hidden="true">Visitar site ↗</span></a>`).join('')}
    </div>
    <p data-empty role="status" hidden>Nenhum projeto encontrado.</p>
    <div class="pagination" data-pagination role="group" aria-label="Páginas da vitrine"></div>
  </div>`,'about-section');
const workPortfolio = section(heading('Experiência aplicada','Mídia, automação e <em>conteúdo.</em>')+`
  <div class="grid three">${portfolioWork.map(({icon,title,desc})=>`<article class="card area">${icons[icon]}<h3>${title}</h3><p>${desc}</p></article>`).join('')}</div>`,'lined about-section');
const conceptPortfolio = section(heading('Estudos conceituais','Estratégias <em>em prática.</em>','Exercícios que mostram como estruturo um site institucional ou uma jornada de aquisição.')+`
  <div class="grid two">${projectCards}</div>`,'lined about-section');
add('/portfolio/','Projetos','Trabalhos selecionados de Vinicius Araújo em sites, mídia paga, automação e conteúdo, com estudos conceituais de estratégia digital.',pageHero('Portfólio','Projetos e <em>trabalhos selecionados.</em>','Uma seleção do meu portfólio, com sites, mídia paga, automação e produção de conteúdo.')+mediaPortfolio+brandDirectory+websitePortfolio+menuPortfolio+workPortfolio+conceptPortfolio+fictionalPortfolio);
for(const item of projects) add(route('portfolio',item),item.title,item.desc,pageHero(item.type,item.title,item.desc)+section(`<div class="narrow article"><div class="brand-card-head">${brandIdentity(item.brand)}<strong>${item.brand}</strong></div>${img(item.image)}${item.body.map(([h,p])=>`<h2>${h}</h2><p>${p}</p>`).join('')}${button('/portfolio/','Todos os projetos','ghost')}</div>`,'lined'));
add('/conteudos/','Blog','Artigos sobre mídia paga, experiências web e mensuração.',pageHero('Blog','Marketing digital <em>na prática.</em>','Artigos sobre como organizar campanhas, estruturar páginas e interpretar indicadores.')+listing('conteudos',posts));
for(const item of posts) add(route('conteudos',item),item.title,item.desc,pageHero(item.category,item.title,item.desc)+section(`<article class="narrow article"><p class="byline">Por <a href="/sobre/">Vinicius Araújo</a> · ${Math.max(1,Math.ceil(item.body.flat().join(' ').split(/\s+/).length/180))} min de leitura</p>${img(item.image)}<nav aria-label="Sumário"><h2>Neste artigo</h2><ol>${item.body.map(([h],i)=>`<li><a href="#parte-${i+1}">${h}</a></li>`).join('')}</ol></nav>${item.body.map(([h,p],i)=>`<h2 id="parte-${i+1}">${h}</h2><p>${p}</p>`).join('')}<button type="button" class="button ghost" data-share>Compartilhar artigo</button><span role="status" data-share-status></span></article>`,'lined')+section(heading('Blog','Leituras <em>relacionadas.</em>')+`<div class="grid two">${posts.filter(p=>p!==item).slice(-3).map(p=>card('conteudos',p)).join('')}</div>`),item);
add('/contato/','Contato','Canal para conexões profissionais e mensagens sobre o portfólio de Vinicius Araújo.',pageHero('Contato','Contato <em>profissional.</em>','Um espaço para networking e conversas sobre marketing digital e os conteúdos do portfólio.')+contact());
add('/privacidade/','Privacidade','Informações sobre o uso de dados neste portfólio.',pageHero('Portfólio','Política de <em>privacidade.</em>','Como as informações são usadas neste site.')+section('<div class="narrow"><h2>Mensagens de contato</h2><p>Quando o envio está habilitado, o formulário usa seu nome, e-mail, telefone opcional, assunto e mensagem para encaminhar e responder ao contato. O servidor também usa uma sessão para proteger o envio e limitar tentativas.</p><h2>Seus dados</h2><p>Use a página de contato para solicitar informações sobre uma mensagem enviada ou pedir sua exclusão.</p></div>','lined'));
add('/cookies/','Cookies','Informações sobre cookies e sessões do portfólio.',pageHero('Portfólio','Política de <em>cookies.</em>','Informações sobre o armazenamento usado pelo site.')+section('<div class="narrow"><h2>Sessão do formulário</h2><p>Quando o envio está habilitado, um cookie de sessão ajuda a proteger o formulário. A versão padrão do portfólio mantém ferramentas de publicidade e análise desativadas.</p></div>','lined'));
add('/404.html','Página não encontrada','Volte ao início do portfólio.',pageHero('Erro 404','Página <em>não encontrada.</em>','O endereço pode ter mudado.')+section(button('/','Voltar ao início')));
const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
const nav = path => navigation.map(([href,text])=>`<a href="${href}" ${path===href || (href!=='/' && path.startsWith(href))?'aria-current="page"':''}>${text}</a>`).join('');
for (const [path,page] of pages) {
  const url = base && path!=='/404.html' ? base+path : '';
  const file = path==='/404.html' ? resolve(out,'404.html') : resolve(out,'.'+path,'index.html');
  await mkdir(resolve(file,'..'),{recursive:true});
  const title = escape(page.title+' | Vinicius Araújo');
  const desc = escape(page.desc);
  const data = page.article ? {'@context':'https://schema.org','@type':'BlogPosting',headline:page.title,description:page.desc,author:{'@type':'Person',name:'Vinicius Araújo',...(base?{url:base+'/sobre/'}:{})},...(url?{url,image:base+'/assets/img/'+page.article.image}:{})} : path==='/' || path==='/sobre/' ? {'@context':'https://schema.org','@type':'ProfilePage',mainEntity:{'@type':'Person',name:'Vinicius Araújo',jobTitle:'Marketing & Performance Digital',...(base?{url:base+'/sobre/'}:{})}} : null;
  const group = navigation.find(([href]) => href!=='/'&&path.startsWith(href));
  await writeFile(file,`<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><meta name="theme-color" content="#101016"><title>${title}</title><meta name="description" content="${desc}">${url?`<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"><meta property="og:image" content="${base}/assets/img/${page.article?.image || 'retrato-hero-blazer.jpg'}">`:'<meta name="robots" content="noindex,nofollow">'}
<meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:type" content="${page.article?'article':'website'}"><meta property="og:locale" content="pt_BR">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/css/site.css"><script defer src="/assets/js/config.js"></script><script defer src="/assets/js/site.js"></script>${data?`<script type="application/ld+json">${JSON.stringify(data).replaceAll('<','\\u003c')}</script>`:''}</head>
<body><a class="skip" href="#main">Pular para o conteúdo</a><header class="top"><div class="wrap navrow">${logo}<button class="menu" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button><nav id="site-nav" aria-label="Navegação principal">${nav(path)}</nav>${button('/contato/','Contato profissional','nav-cta')}</div></header>
<main id="main">${path==='/'?'':`<nav class="wrap crumbs" aria-label="Caminho da página"><a href="/">Início</a>${group&&group[0]!==path?`<a href="${group[0]}">${group[1]}</a>`:''}<span aria-current="page">${escape(page.title)}</span></nav>`}${page.html}</main>
<footer class="footer">
  <div class="wrap">
    <div class="footer-main">
      <div class="footer-brand">${logo}<div><strong>Vinicius Araújo</strong><p>Marketing &amp; performance digital</p></div></div>
      <nav aria-label="Navegação do rodapé">${nav(path)}</nav>
    </div>
    <div class="footer-bottom">
      <small>© 2026 Vinicius Araújo</small>
      <nav aria-label="Informações legais"><a href="/privacidade/">Privacidade</a><a href="/cookies/">Cookies</a></nav>
      <div class="footer-social" role="group" aria-label="Redes sociais">
        <span class="social-button" data-footer-social="linkedin" role="img" aria-label="LinkedIn" aria-disabled="true"><span class="social-linkedin" aria-hidden="true"></span></span>
        <span class="social-button" data-footer-social="instagram" role="img" aria-label="Instagram, link indisponível" aria-disabled="true"><span class="social-instagram" aria-hidden="true"></span></span>
      </div>
    </div>
  </div>
</footer></body></html>`);
}
await writeFile(resolve(out,'robots.txt'),base?`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
await writeFile(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${base?[...pages.keys()].filter(p=>p!=='/404.html').map(p=>`<url><loc>${base+p}</loc></url>`).join(''):''}</urlset>\n`);
console.log(`${pages.size} páginas geradas em ${out}`);
