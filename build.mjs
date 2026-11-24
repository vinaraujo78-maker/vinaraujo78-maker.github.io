import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { areas, projects, posts, questions } from './content.mjs';

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
const card = (group, item) => `<a class="card media" href="${route(group,item)}" data-category="${item.category}">${img(item.image)}<div><small>${item.type || item.category}</small><h3>${item.title}</h3><p>${item.desc}</p></div></a>`;
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
const postCards = posts.map(p=>card('conteudos',p)).join('');
const home = `
<div class="opening"><section class="hero" id="inicio"><div class="wrap hero-grid"><div class="hero-copy">${label('Marketing & performance digital')}<h1><span>Estratégia digital</span> <span>com foco em <em>crescimento.</em></span></h1><p class="hero-lead">Atuo com mídia paga, sites e landing pages, conectando planejamento, execução e análise de desempenho.</p><div class="actions">${button('/portfolio/','Ver projetos')}${button('/sobre/','Sobre mim','ghost')}</div></div><div class="hero-art"><img src="/assets/img/retrato-hero-aprovado.jpg" alt="Retrato de Vinicius Araújo" width="494" height="281" fetchpriority="high"></div></div></section>
<div class="wrap proof">${[['bars','Planejamento','Objetivos e prioridades'],['target','Mídia paga','Aquisição digital'],['layers','Experiência web','Sites e landing pages'],['bolt','Mensuração','Análise e aprendizado']].map(([i,t,d])=>`<div>${icons[i]}<span><strong>${t}</strong><br>${d}</span></div>`).join('')}</div></div>
${section(`<div class="section-head"><div>${heading('Áreas de atuação','Estratégia e performance <em>na prática.</em>')}</div><p>Minha atuação reúne mídia paga, desenvolvimento web e mensuração ao longo da jornada.</p></div>${areaCards()}`, '', 'servicos')}
${about()}
${approach()}
${section(`<div class="split"><div>${heading('Projetos','Projetos e <em>estudos de caso.</em>','Demonstrações que exploram decisões de estrutura, mídia e mensuração.')}${button('/portfolio/','Ver todos os projetos','ghost')}</div><div class="grid two">${projectCards}</div></div>`, 'lined', 'portfolio')}
${section(`<div class="split"><div>${heading('Blog','Conteúdos sobre <em>marketing digital.</em>','Artigos sobre campanhas, páginas e análise de desempenho.')}${button('/conteudos/','Ver todos os artigos','ghost')}</div><div class="carousel" data-carousel><div class="carousel-track" tabindex="0" aria-label="Artigos">${postCards}</div><div class="carousel-controls" role="group" aria-label="Posições do carrossel" hidden><button type="button" aria-label="Ir para posição 1" aria-current="true">1</button><button type="button" aria-label="Ir para posição 2" aria-current="false">2</button></div></div></div>`, 'lined')}
${section(`<div class="split"><div>${heading('Perguntas frequentes','Sobre este <em>portfólio.</em>')}</div><div class="faq">${questions.map(([q,a],i)=>`<details ${i===0?'open':''} name="faq"><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div>`, 'lined')}
${contact()}`;

const listing = (group, items) => section(`<div data-listing data-page-size="3"><div class="filters">${group==='conteudos' ? '<label>Buscar artigos<input type="search" data-search placeholder="Ex.: tráfego pago"></label>':''}<label>Categoria<select data-filter><option value="">Todas</option>${[...new Set(items.map(i=>i.category))].map(c=>`<option>${c}</option>`).join('')}</select></label></div><div class="grid ${group==='portfolio'?'two':'three'}">${items.map(i=>card(group,i)).join('')}</div><p data-empty hidden>Nenhum item encontrado.</p><div class="pagination" data-pagination></div></div>`);
const pages = new Map();
const add = (path,title,desc,html,article) => pages.set(path,{title,desc,html,article});
add('/', 'Marketing & Performance Digital','Portfólio profissional de Vinicius Araújo, com áreas de atuação, projetos demonstrativos e artigos sobre marketing digital.',home);
add('/sobre/','Sobre','Conheça a atuação de Vinicius Araújo em marketing digital, mídia e performance.',`
<section class="page-hero"><div class="wrap hero-grid"><div>${label('Sobre mim')}<h1>Marketing, dados e <em>execução.</em></h1><p>Sou Vinicius Araújo e atuo com marketing e performance digital. Meu foco é conectar campanhas, experiência na página e mensuração para entender o caminho até a conversão.</p>${button('/portfolio/','Explorar projetos','ghost')}</div><div class="about-art">${img('retrato_hero_referencia.png','Retrato de Vinicius Araújo',true)}</div></div></section>
${section(`<div class="split"><div>${heading('Trajetória profissional','Da aquisição à <em>mensuração.</em>')}</div><div><p>Minha atuação reúne planejamento de campanhas, organização de sites e landing pages e análise dos sinais de desempenho. Começo pelo objetivo, mapeio a jornada e defino o que precisa ser acompanhado para orientar as próximas decisões.</p><p>Trabalho com temas como Google Ads, Meta Ads, eventos de conversão, estrutura de páginas e experiência mobile.</p></div></div>`, 'lined')}${areaCardsSection()}${approach()}`);
function areaCardsSection(){return section(heading('Competências','Áreas de <em>atuação.</em>')+areaCards());}
add('/servicos/','Áreas de atuação','Conheça as áreas de atuação de Vinicius Araújo em sites, landing pages, mídia paga e estratégia digital.',pageHero('Áreas de atuação','Da aquisição à <em>experiência digital.</em>','Como abordo sites, landing pages, mídia paga e estratégias de mensuração.')+section(areaCards())+approach());
for(const item of areas) add(route('servicos',item),item.title,item.desc,pageHero('Áreas de atuação',item.title,item.desc)+section(`<div class="narrow"><h2>Minha abordagem</h2>${item.body.map(p=>`<p>${p}</p>`).join('')}<h2>O que acompanho</h2><ul>${item.points.map(p=>`<li>${p}</li>`).join('')}</ul>${button('/portfolio/','Explorar projetos','ghost')}</div>`,'lined'));
add('/portfolio/','Projetos','Estudos conceituais sobre presença digital, páginas de destino e aquisição.',pageHero('Portfólio','Projetos e <em>estudos de caso.</em>','Explore demonstrações que tornam visíveis as decisões de planejamento, design e mensuração.')+listing('portfolio',projects));
for(const item of projects) add(route('portfolio',item),item.title,item.desc,pageHero(item.type,item.title,item.desc)+section(`<div class="narrow article">${img(item.image)}${item.body.map(([h,p])=>`<h2>${h}</h2><p>${p}</p>`).join('')}${button('/portfolio/','Todos os projetos','ghost')}</div>`,'lined'));
add('/conteudos/','Blog','Artigos sobre mídia paga, experiências web e mensuração.',pageHero('Blog','Marketing digital <em>na prática.</em>','Artigos sobre como organizar campanhas, estruturar páginas e interpretar indicadores.')+listing('conteudos',posts));
for(const item of posts) add(route('conteudos',item),item.title,item.desc,pageHero(item.category,item.title,item.desc)+section(`<article class="narrow article"><p class="byline">Por <a href="/sobre/">Vinicius Araújo</a> · ${Math.max(1,Math.ceil(item.body.flat().join(' ').split(/\s+/).length/180))} min de leitura</p>${img(item.image)}<nav aria-label="Sumário"><h2>Neste artigo</h2><ol>${item.body.map(([h],i)=>`<li><a href="#parte-${i+1}">${h}</a></li>`).join('')}</ol></nav>${item.body.map(([h,p],i)=>`<h2 id="parte-${i+1}">${h}</h2><p>${p}</p>`).join('')}<button type="button" class="button ghost" data-share>Compartilhar artigo</button><span role="status" data-share-status></span></article>`,'lined')+section(heading('Blog','Leituras <em>relacionadas.</em>')+`<div class="grid two">${posts.filter(p=>p!==item).map(p=>card('conteudos',p)).join('')}</div>`),item);
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
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"><meta name="theme-color" content="#101016"><title>${title}</title><meta name="description" content="${desc}">${url?`<link rel="canonical" href="${url}"><meta property="og:url" content="${url}"><meta property="og:image" content="${base}/assets/img/${page.article?.image || 'retrato_hero_referencia.png'}">`:'<meta name="robots" content="noindex,nofollow">'}
<meta property="og:title" content="${title}"><meta property="og:description" content="${desc}"><meta property="og:type" content="${page.article?'article':'website'}"><meta property="og:locale" content="pt_BR">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/assets/css/site.css"><script defer src="/assets/js/config.js"></script><script defer src="/assets/js/site.js"></script>${data?`<script type="application/ld+json">${JSON.stringify(data).replaceAll('<','\\u003c')}</script>`:''}</head>
<body><a class="skip" href="#main">Pular para o conteúdo</a><header class="top"><div class="wrap navrow">${logo}<button class="menu" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button><nav id="site-nav" aria-label="Navegação principal">${nav(path)}</nav>${button('/contato/','Contato profissional','nav-cta')}</div></header>
<main id="main">${path==='/'?'':`<nav class="wrap crumbs" aria-label="Caminho da página"><a href="/">Início</a>${group&&group[0]!==path?`<a href="${group[0]}">${group[1]}</a>`:''}<span aria-current="page">${escape(page.title)}</span></nav>`}${page.html}</main>
<footer class="footer">
  <div class="wrap">
    <div class="footer-main">
      <div class="footer-brand">${logo}<div><strong>Vinicius Araújo</strong><p>Marketing &amp; performance digital</p></div></div>
      <nav aria-label="Navegação do rodapé">${nav(path)}<span data-social></span></nav>
    </div>
    <div class="footer-bottom">
      <small>© 2026 Vinicius Araújo</small>
      <nav aria-label="Informações legais"><a href="/privacidade/">Privacidade</a><a href="/cookies/">Cookies</a></nav>
    </div>
  </div>
</footer></body></html>`);
}
await writeFile(resolve(out,'robots.txt'),base?`User-agent: *\nAllow: /\nSitemap: ${base}/sitemap.xml\n`:'User-agent: *\nDisallow: /\n');
await writeFile(resolve(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${base?[...pages.keys()].filter(p=>p!=='/404.html').map(p=>`<url><loc>${base+p}</loc></url>`).join(''):''}</urlset>\n`);
console.log(`${pages.size} páginas geradas em ${out}`);
