const pages = [
  ["In�cio", "/"],
  ["Sobre", "/sobre/"],
  ["Servi�os", "/servicos/"],
  ["Portf�lio", "/portfolio/"],
  ["Conte�do", "/conteudos/"],
  ["Contato", "/contato/"]
];
const path = location.pathname.replace(/index\.html$/, "");
const asset = name => `/assets/img/${name}?v=photos20261124`;
const link = (url, label, cls = "") =>
  `<a class="${cls} ${path === url ? "active" : ""}" href="${url}">${label}</a>`;
const button = (url, label, cls = "") =>
  `<a class="btn ${cls}" href="${url}">${label}</a>`;
const header = `
  <header class="top">
    <div class="wrap navrow">
      <a class="brand" href="/" aria-label="Vinicius Ara�jo, in�cio">
        <img class="logo" src="${asset("logo-va.svg")}" alt="Vinicius Ara�jo">
      </a>
      <button class="menu" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav">?</button>
      <nav class="nav" id="site-nav" aria-label="Navega��o principal">
        ${pages.map(([name, url]) => link(url, name)).join("")}
        ${button("/contato/", "Fale comigo", "nav-cta")}
      </nav>
    </div>
  </header>`;
const footer = `
  <footer class="footer">
    <div class="wrap foot">
      <div><b>Vinicius Ara�jo</b><br>Marketing &amp; Performance Digital � S�o Paulo, SP</div>
      <nav class="footnav" aria-label="Navega��o do rodap�">${pages.map(([name, url]) => link(url, name)).join("")}</nav>
      <small>� ${new Date().getFullYear()} Vinicius Ara�jo</small>
    </div>
  </footer>`;
const eyebrow = (text, orange = true) => `<p class="eyebrow ${orange ? "orange" : ""}">${text}</p>`;
const pageHero = (label, title, lead) => `
  <section class="page-hero"><div class="wrap">
    ${eyebrow(label)}
    <h1 class="page-title">${title}</h1>
    <p class="page-lead">${lead}</p>
  </div></section>`;
const service = (icon, title, text, href = "/contato/") => `
  <a class="service-row" href="${href}">
    <span class="ico" aria-hidden="true">${icon}</span>
    <span><h3>${title}</h3><p>${text}</p></span>
    <span class="arrow" aria-hidden="true"></span>
  </a>`;
const blogCard = (image, category, title, href) => `
  <a class="card blog-card" href="${href}">
    <img class="blog-art" src="${asset(image)}" alt="" loading="lazy">
    <div class="pad"><small>${category}</small><h3>${title}</h3><span class="arrow" aria-hidden="true"></span></div>
  </a>`;
const content = {
  "/": `
    <section class="hero wrap">
      <div class="hero-copy">
        ${eyebrow("Marketing & performance digital", false)}
        <h1>Estrat�gia digital<br>para marcas que<br>querem <span class="accent">crescer.</span></h1>
        <p class="lead">Marketing, tr�fego pago, sites e performance para gerar mais visibilidade, oportunidades e resultados reais.</p>
        <div class="actions">${button("/contato/", "Fale comigo")}${button("/servicos/", "Ver servi�os", "ghost")}</div>
      </div>
      <div class="hero-visual"><img src="${asset("retrato_hero_referencia.png")}" alt="Vinicius Ara�jo, retrato de perfil"></div>
    </section>
    <section class="proof-wrap"><div class="wrap proof">
      <div><strong aria-hidden="true">?</strong><span><b>Planejamento</b><br>com objetivos claros</span></div>
      <div><strong aria-hidden="true">?</strong><span><b>Performance</b><br>com foco em resultado</span></div>
      <div><strong aria-hidden="true">?</strong><span><b>Mensura��o</b><br>para orientar decis�es</span></div>
      <div><strong aria-hidden="true">?</strong><span><b>Execu��o</b><br>do plano � otimiza��o</span></div>
    </div></section>
    <section class="section">
      <div class="wrap">
        <div class="section-head"><div>${eyebrow("Como posso te ajudar")}<h2>Solu��es digitais que<br>geram <span class="accent">resultados.</span></h2></div><p>Projetos e estrat�gias pensados para atrair, converter e dar consist�ncia ao crescimento do seu neg�cio.</p></div>
        <div class="grid three">
          <article class="card"><div class="ico" aria-hidden="true">?</div><h3>Sites e landing pages</h3><p>Experi�ncias r�pidas e responsivas, constru�das para transformar visitas em conversas e oportunidades.</p><a class="arrow" href="/servicos/sites/" aria-label="Explorar sites e landing pages"></a></article>
          <article class="card featured"><div class="ico" aria-hidden="true">?</div><h3>Gest�o de tr�fego pago</h3><p>Planejamento, configura��o e otimiza��o de campanhas em Google Ads e Meta Ads.</p><a class="arrow" href="/servicos/trafego-pago/" aria-label="Explorar gest�o de tr�fego pago"></a></article>
          <article class="card"><div class="ico" aria-hidden="true">?</div><h3>Estrat�gia &amp; performance</h3><p>Diagn�stico e mensura��o para conectar m�dia, p�ginas e objetivos de neg�cio.</p><a class="arrow" href="/servicos/" aria-label="Conhecer a abordagem de estrat�gia e performance"></a></article>
        </div>
        <div class="band"><div><h3>Vamos construir resultados juntos?</h3><p>Converse comigo sobre seu projeto e os pr�ximos passos.</p></div>${button("/contato/", "Fale comigo", "band-button")}</div>
      </div>
    </section>`,
  "/sobre/": `
    ${pageHero("Sobre mim", "Conhe�a minha <span class='accent'>trajet�ria.</span>", "Atua��o em marketing digital com foco em performance, aquisi��o e presen�a digital.")}
    <section class="section"><div class="wrap about-grid">
      <div class="portrait-box"><img src="${asset("retrato_sobre_referencia.png")}" alt="Vinicius Ara�jo lendo" loading="lazy"></div>
      <div class="about-copy"><p>Conecto estrat�gia, dados e execu��o para construir uma presen�a digital coerente e apoiar o crescimento de marcas e neg�cios.</p><p>Meu trabalho passa por m�dia paga, desenvolvimento de sites e landing pages e an�lise de performance, sempre com comunica��o clara e objetivos alinhados.</p>
        <div class="mini-grid"><div class="mini"><b>?</b>Foco em<br>resultado</div><div class="mini"><b>?</b>Vis�o<br>estrat�gica</div><div class="mini"><b>?</b>Execu��o<br>�gil</div></div>
      </div>
    </div></section>`,
  "/servicos/": `
    ${pageHero("Servi�os", "O que eu <span class='accent'>ofere�o.</span>", "Solu��es sob medida para a sua necessidade no digital.")}
    <section class="section"><div class="wrap service-list">
      ${service("?", "Sites e Landing Pages", "Desenvolvimento de p�ginas institucionais e experi�ncias de alta convers�o.", "/servicos/sites/")}
      ${service("?", "Gest�o de Tr�fego Pago", "Campanhas no Meta Ads e Google Ads com foco em aquisi��o de clientes.", "/servicos/trafego-pago/")}
      <div class="approach-note"><span class="ico" aria-hidden="true">?</span><div><h3>Estrat�gia &amp; performance</h3><p>Abordagem integrada de planejamento, mensura��o e otimiza��o para sustentar o crescimento.</p></div></div>
    </div></section>`,
  "/servicos/sites/": `
    ${pageHero("Servi�os � Sites", "Sites que transformam visitas em <span class='accent'>conversas.</span>", "P�ginas r�pidas e responsivas que apresentam sua oferta com clareza e facilitam o contato.")}
    <section class="section"><div class="wrap narrow"><article class="card"><h2>O que seu site precisa fazer</h2><p>Explicar o que voc� oferece, organizar a informa��o e orientar a pessoa at� o pr�ximo passo, em qualquer tela.</p><ul class="feature-list"><li>Estrutura institucional ou landing page</li><li>Conte�do organizado para leitura mobile</li><li>Chamadas para a��o claras e acess�veis</li><li>Base pronta para an�lise de desempenho</li></ul>${button("/contato/", "Conversar sobre meu site")}</article></div></section>`,
  "/servicos/trafego-pago/": `
    ${pageHero("Servi�os � Tr�fego pago", "M�dia planejada para gerar <span class='accent'>oportunidades.</span>", "Gest�o de campanhas em Google Ads e Meta Ads, alinhada aos objetivos e � jornada do seu neg�cio.")}
    <section class="section"><div class="wrap narrow"><article class="card"><h2>Gest�o de ponta a ponta</h2><p>O trabalho parte dos objetivos, passa pela configura��o e mensura��o e segue com an�lise e otimiza��o cont�nuas.</p><ul class="feature-list"><li>Planejamento de campanhas e p�blicos</li><li>Configura��o de m�dia e eventos</li><li>Acompanhamento de investimento e convers�es</li><li>Otimiza��o orientada pelos dados dispon�veis</li></ul>${button("/contato/", "Conversar sobre tr�fego pago")}</article></div></section>`,
  "/portfolio/": `
    ${pageHero("Portf�lio / Cases", "Projetos com foco em <span class='accent'>resultado.</span>", "Veja demonstra��es de estrutura, m�dia e presen�a digital.")}
    <section class="section"><div class="wrap case-list">
      <article class="case-row"><img src="${asset("case_1_imagem.png")}" alt="" loading="lazy"><div><small>PROJETO CONCEITUAL � DEMONSTRA��O</small><h3>Presen�a digital para neg�cio local</h3><p>Estrutura de site institucional, hierarquia de conte�do e caminho de contato.</p></div><span class="arrow" aria-hidden="true"></span></article>
      <article class="case-row"><img src="${asset("case_2_imagem.png")}" alt="" loading="lazy"><div><small>PROJETO CONCEITUAL � DEMONSTRA��O</small><h3>Estrat�gia de aquisi��o digital</h3><p>Exemplo de organiza��o de campanhas, p�gina de destino e mensura��o de oportunidades.</p></div><span class="arrow" aria-hidden="true"></span></article>
      <p class="case-note">Demonstra��es conceituais. Nenhum resultado de cliente ou m�trica est� sendo apresentado.</p>
    </div></section>`,
  "/conteudos/": `
    ${pageHero("Conte�do", "Insights e estrat�gias<br>sobre <span class='accent'>marketing digital.</span>", "Artigos e conte�dos pr�ticos para voc� aplicar no seu neg�cio.")}
    <section class="section"><div class="wrap grid three">
      ${blogCard("blog_capa_1.png", "M�DIA PAGA", "Como estruturar campanhas no Meta Ads", "/conteudos/site-que-converte/")}
      ${blogCard("blog_capa_2.png", "DESENVOLVIMENTO", "Site que converte: 5 elementos essenciais", "/conteudos/site-que-converte/")}
      ${blogCard("blog_capa_3.png", "PERFORMANCE", "Tr�fego pago: como gerar demanda qualificada", "/conteudos/site-que-converte/")}
    </div></section>`,
  "/contato/": `
    ${pageHero("Contato", "Fale <span class='accent'>comigo.</span>", "Tem um projeto, d�vida ou quer entender como posso ajudar seu neg�cio a crescer? Envie uma mensagem.")}
    <section class="section"><div class="wrap contact-grid">
      <form class="form" id="contact-form"><label>Seu nome<input name="name" autocomplete="name" placeholder="Seu nome" required></label><label>Seu e-mail<input name="email" type="email" autocomplete="email" placeholder="Seu e-mail" required></label><label>Assunto<select name="subject" required><option value="">Assunto</option><option>Sites e landing pages</option><option>Gest�o de tr�fego pago</option><option>Estrat�gia digital</option><option>Outro assunto</option></select></label><label>Sua mensagem<textarea name="message" placeholder="Sua mensagem" required></textarea></label><button class="btn" type="submit">Enviar mensagem</button><small id="status" aria-live="polite">Formul�rio demonstrativo: o envio ser� conectado quando o canal de atendimento for definido.</small></form>
      <div class="contact-photo"><img src="${asset("retrato_contato_referencia.png")}" alt="Vinicius Ara�jo com camisa branca" loading="lazy"></div>
    </div></section>`,
  "/conteudos/site-que-converte/": `
    ${pageHero("Conte�do � Sites", "Site que converte: 5 elementos essenciais", "Uma boa p�gina deixa claro o que oferece, para quem e qual � o pr�ximo passo.")}
    <section class="section"><div class="wrap narrow"><article class="card article"><h2>O que ajuda uma p�gina a transformar visitas em contatos?</h2><p>Uma p�gina eficiente combina uma proposta clara, conte�do organizado, boa experi�ncia no celular e um caminho simples para iniciar uma conversa.</p><h3>1. Uma mensagem direta</h3><p>Explique rapidamente o que voc� oferece e para quem. A pessoa precisa entender o valor antes de percorrer a p�gina.</p><h3>2. Uma a��o f�cil de encontrar</h3><p>Use chamadas claras e consistentes para orientar a pessoa ao contato ou � pr�xima etapa.</p><h3>3. Experi�ncia r�pida e mobile</h3><p>Texto leg�vel, imagens otimizadas e navega��o simples ajudam a reduzir atrito em qualquer tela.</p></article></div></section>`
};
const current = content[path] || content["/"];
const pageName = pages.find(([, url]) => url === path)?.[0] || "Vinicius Ara�jo";
document.title = `${path === "/" ? "Marketing & Performance Digital" : pageName} | Vinicius Ara�jo`;
document.body.innerHTML = header + `<main id="main">${current}</main>` + footer;
document.querySelector(".menu")?.addEventListener("click", event => {
  const button = event.currentTarget;
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  document.querySelector(".nav")?.classList.toggle("open", open);
});
document.querySelector("#contact-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const status = document.querySelector("#status");
  if (status) status.textContent = "Obrigado! Esta pr�via ainda n�o envia mensagens. Entre em contato pelo canal informado no seu perfil.";
});
